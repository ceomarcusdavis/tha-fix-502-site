import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { LockKeyhole, MessageCircle, Send, Vote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { useMembershipAccess } from "@/hooks/use-membership-access";
import { MEMBERSHIP_ENTITLEMENTS } from "@/lib/membership-access";
import {
  createMyCommunityDiscussion,
  createMyCommunityDiscussionReply,
  createMyCommunityTopicSubmission,
  getMyCommunityDiscussionReplies,
  getMyCommunityDiscussions,
  getMyCommunityTopicSubmissions,
  getMyOpenCommunityTopicPolls,
  voteMyCommunityTopicPoll,
  type CommunityDiscussion,
  type CommunitySpaceCode,
} from "@/lib/community";

export const Route = createFileRoute("/community/member")({
  head: () => ({
    meta: [
      { title: "Member Community — Tha Fix" },
      { name: "robots", content: "noindex,nofollow" },
      { name: "description", content: "Tha Fix members-only discussions, topic submissions, private network, and voting." },
    ],
  }),
  component: MemberCommunityPage,
});

const fieldClass = "w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-brand";
const primaryButtonClass = "inline-flex items-center justify-center bg-brand text-brand-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#6A33A5] transition-colors";

function MemberCommunityPage() {
  const access = useMembershipAccess();

  if (access.isLoading) {
    return <div className="min-h-[60vh] grid place-items-center text-muted-foreground">Loading your community access…</div>;
  }

  if (!access.isSignedIn) {
    return (
      <AccessMessage
        title="Sign in to enter the member community"
        body="Community participation is available through an eligible Tha Fix membership."
        action={<Link to="/login" className={primaryButtonClass}>Sign In</Link>}
      />
    );
  }

  if (!access.has(MEMBERSHIP_ENTITLEMENTS.memberDiscussions)) {
    return (
      <AccessMessage
        title="Membership access required"
        body="Join The Audience or a higher membership level to participate in Tha Fix member discussions and submit questions or topics."
        action={<Link to="/memberships" className={primaryButtonClass}>View Memberships</Link>}
      />
    );
  }

  return <CommunityWorkspace />;
}

function AccessMessage({ title, body, action }: { title: string; body: string; action: ReactNode }) {
  return (
    <div className="min-h-[70vh] grid place-items-center px-6 py-20">
      <div className="max-w-xl text-center border border-border bg-surface p-10">
        <LockKeyhole className="w-9 h-9 text-brand mx-auto mb-5" />
        <h1 className="font-display text-3xl font-bold mb-3">{title}</h1>
        <p className="text-muted-foreground mb-7">{body}</p>
        {action}
      </div>
    </div>
  );
}

function CommunityWorkspace() {
  const access = useMembershipAccess();
  const [space, setSpace] = useState<CommunitySpaceCode>("community_feed");
  const privateAccess = access.has(MEMBERSHIP_ENTITLEMENTS.privateCommunity);
  const votingAccess = access.has(MEMBERSHIP_ENTITLEMENTS.topicVoting);

  return (
    <>
      <PageHero
        eyebrow="Member Community"
        title="Keep the conversation going."
        description="Discuss what Tha Fix covers, submit questions and topics, and use the member features included with your plan."
      />
      <section className="py-10 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-wrap gap-3">
          <button onClick={() => setSpace("community_feed")} className={tabClass(space === "community_feed")}>Community Feed</button>
          <button
            onClick={() => privateAccess && setSpace("private_network")}
            disabled={!privateAccess}
            className={tabClass(space === "private_network", !privateAccess)}
          >
            Private Network {!privateAccess ? "— Network+" : ""}
          </button>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-[minmax(0,1fr)_380px] gap-8">
          <DiscussionPanel space={space} />
          <div className="space-y-6">
            <SubmissionPanel />
            {votingAccess ? <PollPanel /> : <LockedFeature title="Topic Voting" body="Topic voting is included with The Network and Founder memberships." />}
          </div>
        </div>
      </section>
    </>
  );
}

function DiscussionPanel({ space }: { space: CommunitySpaceCode }) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const discussions = useQuery({
    queryKey: ["community-discussions", space],
    queryFn: () => getMyCommunityDiscussions(space),
    retry: false,
  });
  const create = useMutation({
    mutationFn: () => createMyCommunityDiscussion(space, title, body),
    onSuccess: async () => {
      setTitle("");
      setBody("");
      await queryClient.invalidateQueries({ queryKey: ["community-discussions", space] });
    },
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="w-6 h-6 text-brand" />
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand">{space === "private_network" ? "Private Network" : "Community Feed"}</div>
          <h2 className="font-display text-3xl font-bold">Member Discussions</h2>
        </div>
      </div>

      <div className="border border-border bg-surface p-6 mb-8">
        <h3 className="font-display text-xl font-bold mb-4">Start a discussion</h3>
        <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={180} placeholder="Discussion title" className={`${fieldClass} mb-3`} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} maxLength={6000} rows={5} placeholder="What do you want to talk about?" className={`${fieldClass} resize-y`} />
        {create.error ? <p className="text-sm text-red-600 mt-3">{(create.error as Error).message}</p> : null}
        <button disabled={create.isPending || title.trim().length < 3 || body.trim().length < 1} onClick={() => create.mutate()} className={`${primaryButtonClass} mt-4 disabled:opacity-50`}>
          {create.isPending ? "Posting…" : "Post Discussion"}
        </button>
      </div>

      {discussions.isLoading ? <p className="text-muted-foreground">Loading discussions…</p> : null}
      {discussions.error ? <p className="text-red-600">{(discussions.error as Error).message}</p> : null}
      {!discussions.isLoading && (discussions.data?.length ?? 0) === 0 ? (
        <div className="border border-dashed border-border p-10 text-center text-muted-foreground">
          No discussions have been started here yet. Be the first to open the conversation.
        </div>
      ) : null}
      <div className="space-y-4">
        {discussions.data?.map((discussion) => (
          <DiscussionCard key={discussion.discussion_public_id} discussion={discussion} />
        ))}
      </div>
    </div>
  );
}

function DiscussionCard({ discussion }: { discussion: CommunityDiscussion }) {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [replyBody, setReplyBody] = useState("");
  const replies = useQuery({
    queryKey: ["community-discussion-replies", discussion.discussion_public_id],
    queryFn: () => getMyCommunityDiscussionReplies(discussion.discussion_public_id),
    enabled: open,
    retry: false,
  });
  const reply = useMutation({
    mutationFn: () => createMyCommunityDiscussionReply(discussion.discussion_public_id, replyBody),
    onSuccess: async () => {
      setReplyBody("");
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ["community-discussion-replies", discussion.discussion_public_id] }),
        queryClient.invalidateQueries({ queryKey: ["community-discussions", discussion.space_code] }),
      ]);
    },
  });

  return (
    <article className="border border-border bg-surface p-6">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{discussion.author_display_name}</div>
      <h3 className="font-display text-2xl font-bold mb-3">{discussion.title}</h3>
      <p className="text-foreground/80 whitespace-pre-wrap mb-4">{discussion.body_text}</p>
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>{discussion.reply_count} {discussion.reply_count === 1 ? "reply" : "replies"} · {new Date(discussion.created_at).toLocaleString()}</span>
        <button type="button" onClick={() => setOpen((value) => !value)} className="font-bold uppercase tracking-widest text-brand hover:text-accent">
          {open ? "Hide Replies" : discussion.reply_count > 0 ? "View & Reply" : "Reply"}
        </button>
      </div>

      {open ? (
        <div className="mt-6 pt-5 border-t border-border">
          {replies.isLoading ? <p className="text-sm text-muted-foreground">Loading replies…</p> : null}
          {replies.error ? <p className="text-sm text-red-600">{(replies.error as Error).message}</p> : null}
          {(replies.data?.length ?? 0) > 0 ? (
            <div className="space-y-3 mb-5">
              {replies.data?.map((item) => (
                <div key={item.reply_public_id} className="border-l-2 border-brand/30 pl-4 py-1">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.author_display_name}</div>
                  <p className="text-sm text-foreground/80 whitespace-pre-wrap">{item.body_text}</p>
                  <div className="text-[10px] text-muted-foreground mt-1">{new Date(item.created_at).toLocaleString()}</div>
                </div>
              ))}
            </div>
          ) : !replies.isLoading ? (
            <p className="text-sm text-muted-foreground mb-5">No replies yet.</p>
          ) : null}

          <textarea value={replyBody} onChange={(e) => setReplyBody(e.target.value)} maxLength={4000} rows={3} placeholder="Add your reply…" className={`${fieldClass} resize-y`} />
          {reply.error ? <p className="text-sm text-red-600 mt-3">{(reply.error as Error).message}</p> : null}
          <button disabled={reply.isPending || replyBody.trim().length < 1} onClick={() => reply.mutate()} className={`${primaryButtonClass} mt-3 disabled:opacity-50`}>
            {reply.isPending ? "Posting…" : "Post Reply"}
          </button>
        </div>
      ) : null}
    </article>
  );
}

function SubmissionPanel() {
  const queryClient = useQueryClient();
  const [submissionType, setSubmissionType] = useState<"question" | "topic">("question");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const submissions = useQuery({
    queryKey: ["my-community-submissions"],
    queryFn: getMyCommunityTopicSubmissions,
    retry: false,
  });
  const create = useMutation({
    mutationFn: () => createMyCommunityTopicSubmission({ submissionType, title, details }),
    onSuccess: async () => {
      setTitle("");
      setDetails("");
      await queryClient.invalidateQueries({ queryKey: ["my-community-submissions"] });
    },
  });

  return (
    <div className="border border-border bg-surface p-6">
      <div className="flex items-center gap-2 mb-2"><Send className="w-5 h-5 text-brand" /><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand">Your Voice</span></div>
      <h3 className="font-display text-2xl font-bold mb-4">Submit a Question or Topic</h3>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {(["question", "topic"] as const).map((type) => (
          <button key={type} onClick={() => setSubmissionType(type)} className={tabClass(submissionType === type)}>{type === "question" ? "Question" : "Topic Idea"}</button>
        ))}
      </div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} maxLength={240} placeholder={submissionType === "question" ? "Your question" : "Your topic idea"} className={`${fieldClass} mb-3`} />
      <textarea value={details} onChange={(e) => setDetails(e.target.value)} maxLength={4000} rows={4} placeholder="Add context (optional)" className={`${fieldClass} resize-y`} />
      {create.error ? <p className="text-sm text-red-600 mt-3">{(create.error as Error).message}</p> : null}
      <button disabled={create.isPending || title.trim().length < 3} onClick={() => create.mutate()} className={`${primaryButtonClass} mt-4 disabled:opacity-50`}>{create.isPending ? "Sending…" : "Submit"}</button>
      {(submissions.data?.length ?? 0) > 0 ? (
        <div className="mt-6 pt-5 border-t border-border">
          <div className="text-xs font-bold uppercase tracking-widest mb-3">Your Recent Submissions</div>
          <div className="space-y-3">
            {submissions.data?.slice(0, 5).map((submission) => (
              <div key={submission.submission_public_id} className="text-sm">
                <div className="font-semibold">{submission.title}</div>
                <div className="text-xs text-muted-foreground capitalize">{submission.submission_type} · {submission.status.replaceAll("_", " ")}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PollPanel() {
  const queryClient = useQueryClient();
  const polls = useQuery({ queryKey: ["community-topic-polls"], queryFn: getMyOpenCommunityTopicPolls, retry: false });
  const vote = useMutation({
    mutationFn: ({ poll, option }: { poll: string; option: string }) => voteMyCommunityTopicPoll(poll, option),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["community-topic-polls"] }),
  });

  return (
    <div className="border border-border bg-surface p-6">
      <div className="flex items-center gap-2 mb-2"><Vote className="w-5 h-5 text-brand" /><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand">Network+ Benefit</span></div>
      <h3 className="font-display text-2xl font-bold mb-4">Topic Voting</h3>
      {polls.isLoading ? <p className="text-sm text-muted-foreground">Checking for open votes…</p> : null}
      {!polls.isLoading && (polls.data?.length ?? 0) === 0 ? <p className="text-sm text-muted-foreground">No topic vote is open right now. New voting opportunities will appear here.</p> : null}
      <div className="space-y-6">
        {polls.data?.map((poll) => (
          <div key={poll.poll_public_id}>
            <div className="font-bold mb-1">{poll.title}</div>
            {poll.description ? <p className="text-sm text-muted-foreground mb-3">{poll.description}</p> : null}
            <div className="space-y-2">
              {poll.options.map((option) => (
                <button
                  key={option.option_public_id}
                  disabled={vote.isPending}
                  onClick={() => vote.mutate({ poll: poll.poll_public_id, option: option.option_public_id })}
                  className={`w-full text-left border px-4 py-3 text-sm ${poll.my_option_public_id === option.option_public_id ? "border-brand bg-brand/5" : "border-border hover:border-brand"}`}
                >
                  <span className="font-semibold">{option.label}</span><span className="float-right text-muted-foreground">{option.votes}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LockedFeature({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-border bg-surface p-6">
      <LockKeyhole className="w-5 h-5 text-brand mb-3" />
      <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{body}</p>
      <Link to="/memberships" className="text-xs font-bold uppercase tracking-widest text-brand">Compare Memberships →</Link>
    </div>
  );
}

function tabClass(active: boolean, disabled = false) {
  return `px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${active ? "bg-brand text-brand-foreground border-brand" : "border-border text-muted-foreground hover:text-foreground"} ${disabled ? "opacity-50 cursor-not-allowed hover:text-muted-foreground" : ""}`;
}

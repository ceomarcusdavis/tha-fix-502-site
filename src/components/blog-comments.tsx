import { FormEvent, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MessageSquare, Send } from "lucide-react";
import { createMyBlogComment, getPublicBlogComments, hasPublishedBlogPost } from "@/lib/blog";
import { MEMBERSHIP_ENTITLEMENTS } from "@/lib/membership-access";
import { useMembershipAccess } from "@/hooks/use-membership-access";

type BlogCommentsProps = {
  slug: string;
};

export function BlogComments({ slug }: BlogCommentsProps) {
  const queryClient = useQueryClient();
  const access = useMembershipAccess();
  const [body, setBody] = useState("");
  const [submitError, setSubmitError] = useState("");

  const livePostQuery = useQuery({
    queryKey: ["published-blog-post-exists", slug],
    queryFn: () => hasPublishedBlogPost(slug),
    staleTime: 60_000,
    retry: false,
  });

  const commentsQuery = useQuery({
    queryKey: ["blog-comments", slug],
    queryFn: () => getPublicBlogComments(slug),
    enabled: livePostQuery.data === true,
    staleTime: 15_000,
    retry: false,
  });

  const canComment = access.has(MEMBERSHIP_ENTITLEMENTS.blogComment);

  const mutation = useMutation({
    mutationFn: async () => {
      const normalized = body.trim();
      if (!normalized) throw new Error("Write a comment before posting.");
      if (normalized.length > 4000) throw new Error("Comments are limited to 4,000 characters.");
      return createMyBlogComment(slug, normalized);
    },
    onSuccess: async () => {
      setBody("");
      setSubmitError("");
      await queryClient.invalidateQueries({ queryKey: ["blog-comments", slug] });
    },
    onError: (error) => {
      setSubmitError(error instanceof Error ? error.message : "Your comment could not be posted.");
    },
  });

  const comments = commentsQuery.data ?? [];
  const commentCountLabel = useMemo(() => `${comments.length} ${comments.length === 1 ? "comment" : "comments"}`, [comments.length]);

  if (livePostQuery.isLoading) {
    return <section className="py-12 border-t border-border"><p className="text-sm text-muted-foreground">Loading conversation…</p></section>;
  }

  // Prototype posts stay display-only until the matching post exists in the live CMS.
  if (!livePostQuery.data) return null;

  return (
    <section className="py-14 border-t border-border" aria-labelledby="blog-comments-heading">
      <div className="max-w-4xl">
        <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
          <div>
            <div className="text-brand text-[11px] font-bold uppercase tracking-[0.3em] mb-2">Member Conversation</div>
            <h2 id="blog-comments-heading" className="font-display text-3xl md:text-4xl font-bold tracking-tight">Join the discussion</h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <MessageSquare className="w-4 h-4" /> {commentCountLabel}
          </div>
        </div>

        {commentsQuery.isError && (
          <p role="alert" className="text-sm text-destructive mb-6">Comments could not be loaded right now.</p>
        )}

        <div className="space-y-4 mb-9">
          {comments.map((comment) => (
            <article key={comment.comment_public_id} className="bg-surface border border-border p-5 md:p-6">
              <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">
                <strong className="text-sm">{comment.author_display_name}</strong>
                <time className="text-[11px] uppercase tracking-wider text-muted-foreground" dateTime={comment.created_at}>
                  {new Date(comment.created_at).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })}
                </time>
              </div>
              <p className="text-sm md:text-base text-foreground/80 whitespace-pre-wrap leading-relaxed">{comment.body_text}</p>
            </article>
          ))}
          {!commentsQuery.isLoading && comments.length === 0 && (
            <p className="text-sm text-muted-foreground py-4">No comments yet. Members can start the conversation below.</p>
          )}
        </div>

        {access.isLoading ? (
          <div className="bg-surface border border-border p-6 text-sm text-muted-foreground">Checking membership access…</div>
        ) : canComment ? (
          <form
            onSubmit={(event: FormEvent) => {
              event.preventDefault();
              setSubmitError("");
              mutation.mutate();
            }}
            className="bg-surface border border-border p-5 md:p-6"
          >
            <label htmlFor="blog-comment" className="block text-xs font-bold uppercase tracking-widest mb-3">Add your comment</label>
            <textarea
              id="blog-comment"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              maxLength={4000}
              rows={5}
              placeholder="Add to the conversation…"
              className="w-full bg-background border border-border p-4 text-sm focus:outline-none focus:border-brand resize-y"
            />
            <div className="flex items-center justify-between gap-4 mt-3 flex-wrap">
              <span className="text-[11px] text-muted-foreground">{body.length}/4000</span>
              <button
                type="submit"
                disabled={mutation.isPending || !body.trim()}
                className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" /> {mutation.isPending ? "Posting…" : "Post Comment"}
              </button>
            </div>
            {submitError && <p role="alert" className="text-sm text-destructive mt-4">{submitError}</p>}
          </form>
        ) : access.isSignedIn ? (
          <div className="bg-surface border border-border p-6">
            <h3 className="font-display text-xl font-bold mb-2">Commenting is a member benefit.</h3>
            <p className="text-sm text-muted-foreground mb-4">An active Tha Fix membership with blog-comment access is required to post.</p>
            <Link to="/memberships" className="inline-block text-brand text-xs font-bold uppercase tracking-widest border-b border-brand">View Memberships →</Link>
          </div>
        ) : (
          <div className="bg-surface border border-border p-6">
            <h3 className="font-display text-xl font-bold mb-2">Members join the conversation.</h3>
            <p className="text-sm text-muted-foreground mb-4">Sign in if you already have a membership, or view membership options to unlock commenting.</p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/login" className="text-brand text-xs font-bold uppercase tracking-widest border-b border-brand">Sign In →</Link>
              <Link to="/memberships" className="text-brand text-xs font-bold uppercase tracking-widest border-b border-brand">View Memberships →</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

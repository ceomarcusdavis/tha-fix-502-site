import { getSession, THA_FIX_ORGANIZATION_ID } from "@/lib/account";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://hwiuxhenoogdisueholr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_KTDIiehW5udh-Q60dwnIdw_tdTn-u7Q";

export type CommunitySpaceCode = "community_feed" | "private_network";

export type CommunityDiscussion = {
  discussion_public_id: string;
  space_code: CommunitySpaceCode;
  title: string;
  body_text: string;
  author_display_name: string;
  reply_count: number;
  created_at: string;
  updated_at: string;
};

export type CommunityReply = {
  reply_public_id: string;
  parent_reply_public_id: string | null;
  author_display_name: string;
  body_text: string;
  created_at: string;
  edited_at: string | null;
};

export type CommunitySubmission = {
  submission_public_id: string;
  submission_type: "question" | "topic";
  title: string;
  details: string | null;
  status: string;
  created_at: string;
};

export type CommunityPollOption = {
  option_public_id: string;
  label: string;
  votes: number;
};

export type CommunityPoll = {
  poll_public_id: string;
  title: string;
  description: string | null;
  closes_at: string | null;
  options: CommunityPollOption[];
  my_option_public_id: string | null;
};

async function parseError(response: Response, fallback: string): Promise<never> {
  const body = await response.json().catch(() => ({}));
  const message = body?.msg || body?.message || body?.error_description || body?.error || fallback;
  throw new Error(String(message));
}

async function authenticatedRpc<T>(name: string, body: Record<string, unknown>): Promise<T> {
  const session = await getSession();
  if (!session) throw new Error("Please sign in to continue.");
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${session.access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) return parseError(response, "The community request could not be completed.");
  return (await response.json()) as T;
}

export async function getMyCommunityDiscussions(spaceCode: CommunitySpaceCode): Promise<CommunityDiscussion[]> {
  return authenticatedRpc<CommunityDiscussion[]>("get_my_community_discussions", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_space_code: spaceCode,
    requested_limit: 30,
    requested_offset: 0,
  });
}

export async function createMyCommunityDiscussion(spaceCode: CommunitySpaceCode, title: string, bodyText: string): Promise<CommunityDiscussion> {
  const rows = await authenticatedRpc<CommunityDiscussion[]>("create_my_community_discussion", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_space_code: spaceCode,
    requested_title: title,
    requested_body_text: bodyText,
  });
  if (!rows[0]) throw new Error("The discussion was not returned after posting.");
  return rows[0];
}

export async function getMyCommunityDiscussionReplies(discussionPublicId: string): Promise<CommunityReply[]> {
  return authenticatedRpc<CommunityReply[]>("get_my_community_discussion_replies", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_discussion_public_id: discussionPublicId,
  });
}

export async function createMyCommunityDiscussionReply(discussionPublicId: string, bodyText: string, parentReplyPublicId?: string | null): Promise<CommunityReply> {
  const rows = await authenticatedRpc<CommunityReply[]>("create_my_community_discussion_reply", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_discussion_public_id: discussionPublicId,
    requested_body_text: bodyText,
    requested_parent_reply_public_id: parentReplyPublicId || null,
  });
  if (!rows[0]) throw new Error("The reply was not returned after posting.");
  return rows[0];
}

export async function createMyCommunityTopicSubmission(input: {
  submissionType: "question" | "topic";
  title: string;
  details?: string;
}): Promise<CommunitySubmission> {
  const rows = await authenticatedRpc<CommunitySubmission[]>("create_my_community_topic_submission", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_submission_type: input.submissionType,
    requested_title: input.title,
    requested_details: input.details || null,
  });
  if (!rows[0]) throw new Error("The submission was not returned after sending.");
  return rows[0];
}

export async function getMyCommunityTopicSubmissions(): Promise<CommunitySubmission[]> {
  return authenticatedRpc<CommunitySubmission[]>("get_my_community_topic_submissions", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_limit: 20,
  });
}

export async function getMyOpenCommunityTopicPolls(): Promise<CommunityPoll[]> {
  return authenticatedRpc<CommunityPoll[]>("get_my_open_community_topic_polls", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
  });
}

export async function voteMyCommunityTopicPoll(pollPublicId: string, optionPublicId: string): Promise<boolean> {
  return authenticatedRpc<boolean>("vote_my_community_topic_poll", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_poll_public_id: pollPublicId,
    requested_option_public_id: optionPublicId,
  });
}

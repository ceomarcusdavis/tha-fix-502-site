import { getSession, THA_FIX_ORGANIZATION_ID } from "@/lib/account";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://hwiuxhenoogdisueholr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_KTDIiehW5udh-Q60dwnIdw_tdTn-u7Q";

export type BlogComment = {
  comment_public_id: string;
  parent_comment_public_id: string | null;
  author_display_name: string;
  body_text: string;
  created_at: string;
  edited_at: string | null;
};

async function parseError(response: Response, fallback: string): Promise<never> {
  const body = await response.json().catch(() => ({}));
  const message = body?.msg || body?.message || body?.error_description || body?.error || fallback;
  throw new Error(String(message));
}

async function rpc<T>(name: string, body: Record<string, unknown>, authenticated = false): Promise<T> {
  const session = authenticated ? await getSession() : null;
  if (authenticated && !session) throw new Error("Please sign in to continue.");

  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      ...(session ? { Authorization: `Bearer ${session.access_token}` } : {}),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) return parseError(response, "The blog request could not be completed.");
  return (await response.json()) as T;
}

export async function hasPublishedBlogPost(slug: string): Promise<boolean> {
  const rows = await rpc<Record<string, unknown>[]>("get_public_blog_post_by_slug", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_slug: slug,
  });
  return rows.length > 0;
}

export async function getPublicBlogComments(slug: string): Promise<BlogComment[]> {
  return rpc<BlogComment[]>("get_public_blog_comments", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_slug: slug,
    requested_limit: 100,
    requested_offset: 0,
  });
}

export async function createMyBlogComment(slug: string, bodyText: string, parentCommentPublicId?: string | null): Promise<BlogComment> {
  const rows = await rpc<BlogComment[]>("create_my_blog_comment", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_slug: slug,
    requested_body_text: bodyText,
    requested_parent_comment_public_id: parentCommentPublicId || null,
  }, true);
  if (!rows[0]) throw new Error("Your comment was not returned after posting.");
  return rows[0];
}

export async function deleteMyBlogComment(commentPublicId: string): Promise<boolean> {
  return rpc<boolean>("delete_my_blog_comment", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_comment_public_id: commentPublicId,
  }, true);
}

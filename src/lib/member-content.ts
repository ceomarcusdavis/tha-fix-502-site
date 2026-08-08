import { getSession, THA_FIX_ORGANIZATION_ID } from "@/lib/account";
import type { PublicContentCard } from "@/lib/public-content";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://hwiuxhenoogdisueholr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_KTDIiehW5udh-Q60dwnIdw_tdTn-u7Q";

export type MemberContentFeedItem = {
  content: PublicContentCard;
  required_entitlement_code: string;
  access_label: string | null;
  public_release_at: string | null;
};

export type MemberContentDetail = {
  content: PublicContentCard;
  has_access: boolean;
  required_entitlement_code: string | null;
  access_label: string | null;
  public_release_at: string | null;
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

  if (!response.ok) return parseError(response, "Member content could not be loaded.");
  return (await response.json()) as T;
}

export async function getMyMemberWatchFeed(entitlementCode?: string | null): Promise<MemberContentFeedItem[]> {
  return authenticatedRpc<MemberContentFeedItem[]>("get_my_member_watch_feed", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_entitlement_code: entitlementCode || null,
    requested_limit: 100,
    requested_offset: 0,
  });
}

export async function getMyMemberContentBySlug(slug: string): Promise<MemberContentDetail | null> {
  const rows = await authenticatedRpc<MemberContentDetail[]>("get_my_member_content_by_slug", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_route_scope: "watch",
    requested_slug: slug,
  });
  return rows[0] ?? null;
}

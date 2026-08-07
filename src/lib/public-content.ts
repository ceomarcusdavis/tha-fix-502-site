const DEFAULT_SUPABASE_URL = "https://hwiuxhenoogdisueholr.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_KTDIiehW5udh-Q60dwnIdw_tdTn-u7Q";

export const THA_FIX_ORGANIZATION_ID = "TFM-ORG-000001";

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  DEFAULT_SUPABASE_PUBLISHABLE_KEY;

export type PublicContentCredit = {
  organization_person_public_id: string;
  profile_slug: string | null;
  display_name: string;
  credit_label: string;
  credit_role_code: string;
  is_primary: boolean;
  sort_order: number;
  headline: string | null;
  profile_media_public_id: string | null;
  profile_media_alt_text: string | null;
  profile_media_public_url_path: string | null;
};

export type PublicContentTopic = {
  topic_public_id: string;
  topic_name: string;
  topic_slug: string;
  is_primary: boolean;
  sort_order: number;
};

export type PublicContentCategory = {
  category_public_id: string;
  category_name: string;
  category_slug: string;
  is_primary: boolean;
  sort_order: number;
};

export type PublicExternalReference = {
  platform_code: string;
  reference_type: string;
  destination_url: string;
  external_content_id: string | null;
  caption_text: string | null;
  is_primary: boolean;
  published_at: string | null;
};

export type PublicContentCard = {
  organization_public_id: string;
  content_public_id: string;
  format_code: "episode" | "clip" | "blog_post";
  route_scope: "watch" | "blog";
  slug: string;
  route_path: string;
  title: string;
  subtitle: string | null;
  excerpt: string | null;
  description: string | null;
  published_at: string;
  seo_title: string | null;
  seo_description: string | null;
  canonical_url: string | null;
  exclude_from_search_engines: boolean;
  primary_media_public_id: string | null;
  primary_media_alt_text: string | null;
  primary_media_bucket_id: string | null;
  primary_media_object_path: string | null;
  primary_media_public_url_path: string | null;
  duration_seconds: number | string | null;
  season_number: number | null;
  episode_number: number | null;
  recording_date: string | null;
  episode_type: string | null;
  is_live_recording: boolean | null;
  venue_name: string | null;
  clip_type: string | null;
  aspect_ratio: string | null;
  parent_episode_content_public_id: string | null;
  parent_episode_slug: string | null;
  primary_platform_code: string | null;
  primary_reference_type: string | null;
  primary_destination_url: string | null;
  primary_external_content_id: string | null;
  primary_topic_name: string | null;
  primary_topic_slug: string | null;
  primary_category_name: string | null;
  primary_category_slug: string | null;
  credits: PublicContentCredit[];
  topics: PublicContentTopic[];
  categories: PublicContentCategory[];
  external_references: PublicExternalReference[];
};

export type PublicContentPlacement = PublicContentCard & {
  slot_code: string;
  slot_name: string;
  page_code: string;
  placement_source: "manual" | "automatic";
  assignment_public_id: string | null;
  placement_position: number;
};

export type PublicPerson = {
  organization_public_id: string;
  organization_person_public_id: string;
  slug: string;
  display_name: string;
  headline: string | null;
  biography: string | null;
  published_at: string;
  profile_media_public_id: string | null;
  profile_media_alt_text: string | null;
  profile_media_public_url_path: string | null;
};

export type PublicPersonPlacement = PublicPerson & {
  slot_code: string;
  slot_name: string;
  page_code: string;
  assignment_public_id: string;
  placement_position: number;
};

type WatchFeedOptions = {
  formatCode?: "episode" | "clip" | null;
  topicSlug?: string | null;
  search?: string | null;
  limit?: number;
  offset?: number;
};

async function supabaseRequest<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Accept: "application/json",
      ...(init.body ? { "Content-Type": "application/json" } : {}),
      ...init.headers,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Supabase public content request failed", {
      status: response.status,
      path,
      body,
    });
    throw new Error("We couldn’t load Tha Fix content right now.");
  }

  return (await response.json()) as T;
}

export function getPublicAssetUrl(path?: string | null): string | null {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SUPABASE_URL}${path}`;
}

export function formatDuration(value?: number | string | null): string {
  const seconds = Math.max(0, Math.round(Number(value || 0)));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return hours > 0
    ? `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`
    : `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function formatPublishedDate(value?: string | null): string {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function getPrimaryCredit(
  content: PublicContentCard,
  roleCode: string,
): PublicContentCredit | undefined {
  return content.credits.find(
    (credit) => credit.credit_role_code === roleCode && credit.is_primary,
  ) ?? content.credits.find((credit) => credit.credit_role_code === roleCode);
}

export async function getHomepagePlacements(): Promise<
  PublicContentPlacement[]
> {
  const params = new URLSearchParams({
    organization_public_id: `eq.${THA_FIX_ORGANIZATION_ID}`,
    slot_code:
      "in.(home_featured_episode,home_latest_clips,home_featured_blog)",
    order: "placement_position.asc",
  });

  return supabaseRequest<PublicContentPlacement[]>(
    `/rest/v1/website_public_content_placement?${params.toString()}`,
  );
}

export async function getPersonPlacements(
  slotCodes: string[],
): Promise<PublicPersonPlacement[]> {
  const params = new URLSearchParams({
    organization_public_id: `eq.${THA_FIX_ORGANIZATION_ID}`,
    slot_code: `in.(${slotCodes.join(",")})`,
    order: "placement_position.asc",
  });

  return supabaseRequest<PublicPersonPlacement[]>(
    `/rest/v1/website_public_person_placement?${params.toString()}`,
  );
}

export async function getWatchFeed(
  options: WatchFeedOptions = {},
): Promise<PublicContentCard[]> {
  return supabaseRequest<PublicContentCard[]>(
    "/rest/v1/rpc/get_public_watch_feed",
    {
      method: "POST",
      body: JSON.stringify({
        requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
        requested_format_code: options.formatCode || null,
        requested_topic_slug: options.topicSlug || null,
        requested_search: options.search || null,
        requested_limit: options.limit ?? 24,
        requested_offset: options.offset ?? 0,
      }),
    },
  );
}

export async function getContentBySlug(
  slug: string,
): Promise<PublicContentCard | null> {
  const rows = await supabaseRequest<PublicContentCard[]>(
    "/rest/v1/rpc/get_public_content_by_slug",
    {
      method: "POST",
      body: JSON.stringify({
        requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
        requested_route_scope: "watch",
        requested_slug: slug,
      }),
    },
  );

  return rows[0] ?? null;
}

export async function getPersonBySlug(
  slug: string,
): Promise<PublicPerson | null> {
  const rows = await supabaseRequest<PublicPerson[]>(
    "/rest/v1/rpc/get_public_person_by_slug",
    {
      method: "POST",
      body: JSON.stringify({
        requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
        requested_slug: slug,
      }),
    },
  );

  return rows[0] ?? null;
}

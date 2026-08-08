import type { MembershipEntitlement, MyMembership } from "@/lib/account";

export const MEMBERSHIP_ENTITLEMENTS = {
  earlyAccess: "early_access",
  bonusClips: "bonus_clips",
  memberDiscussions: "member_discussions",
  submitQuestionsTopics: "submit_questions_topics",
  blogComment: "blog_comment",
  afterHours: "after_hours",
  behindTheScenes: "behind_the_scenes",
  topicVoting: "topic_voting",
  merchDiscountPercent: "merch_discount_percent",
  monthlyLiveWebinar: "monthly_live_webinar",
  privateCommunity: "private_community",
  blogPublish: "blog_publish",
  lifetimeContentAccess: "lifetime_content_access",
  exclusiveTshirt: "exclusive_tshirt",
  founderNameListing: "founder_name_listing",
  quarterlyStrategySession: "quarterly_strategy_session",
  documentaryContent: "documentary_content",
  priorityCollaborationGuest: "priority_collaboration_guest",
  featuredSpotlight: "featured_spotlight",
  futureEventsInitiativesEarlyAccess: "future_events_initiatives_early_access",
} as const;

export type MembershipEntitlementCode =
  (typeof MEMBERSHIP_ENTITLEMENTS)[keyof typeof MEMBERSHIP_ENTITLEMENTS];

export type MembershipAccess = {
  membership: MyMembership | null;
  hasMembership: boolean;
  hasActiveAccess: boolean;
  isPastDue: boolean;
  isCanceling: boolean;
  entitlementMap: Map<string, MembershipEntitlement>;
  has: (code: MembershipEntitlementCode | string) => boolean;
  value: <T = unknown>(code: MembershipEntitlementCode | string) => T | null;
  merchDiscountPercent: number;
};

function entitlementEnabled(entitlement: MembershipEntitlement | undefined): boolean {
  if (!entitlement) return false;
  const value = entitlement.value;
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value > 0;
  if (typeof value === "string") return value.trim().length > 0 && value !== "0" && value.toLowerCase() !== "false";
  return value != null;
}

export function buildMembershipAccess(membership: MyMembership | null): MembershipAccess {
  const entitlementMap = new Map<string, MembershipEntitlement>();
  for (const entitlement of membership?.entitlements ?? []) {
    entitlementMap.set(entitlement.code, entitlement);
  }

  const hasActiveAccess = Boolean(
    membership &&
      (membership.membership_status === "active" || membership.membership_status === "past_due") &&
      (!membership.access_ends_at || new Date(membership.access_ends_at).getTime() > Date.now()),
  );

  const has = (code: MembershipEntitlementCode | string) =>
    hasActiveAccess && entitlementEnabled(entitlementMap.get(code));

  const value = <T = unknown>(code: MembershipEntitlementCode | string): T | null => {
    if (!hasActiveAccess) return null;
    return (entitlementMap.get(code)?.value as T | undefined) ?? null;
  };

  return {
    membership,
    hasMembership: Boolean(membership),
    hasActiveAccess,
    isPastDue: membership?.membership_status === "past_due",
    isCanceling: membership?.renewal_status === "cancel_at_period_end",
    entitlementMap,
    has,
    value,
    merchDiscountPercent: Number(value<number>(MEMBERSHIP_ENTITLEMENTS.merchDiscountPercent) ?? 0),
  };
}

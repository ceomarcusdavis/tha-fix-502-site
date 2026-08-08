const DEFAULT_SUPABASE_URL = "https://hwiuxhenoogdisueholr.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_KTDIiehW5udh-Q60dwnIdw_tdTn-u7Q";

export const THA_FIX_ORGANIZATION_ID = "TFM-ORG-000001";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || DEFAULT_SUPABASE_PUBLISHABLE_KEY;
const SESSION_KEY = "tha_fix_supabase_session";

export type AuthSession = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at?: number;
  token_type: string;
  user: {
    id: string;
    email?: string;
    email_confirmed_at?: string | null;
  };
};

export type MyOrganizationAccount = {
  organization_public_id: string;
  email: string;
  email_confirmed_at: string | null;
  account_status: string;
  organization_person_public_id: string | null;
  given_name: string | null;
  family_name: string | null;
  display_name: string | null;
  age_18_plus_attested_at: string | null;
  onboarding_complete: boolean;
};

export type MembershipEntitlement = {
  code: string;
  name: string;
  description: string | null;
  value: unknown;
};

export type PublicMembershipPlan = {
  plan_public_id: string;
  plan_code: "audience" | "network" | "founder" | string;
  plan_name: string;
  description: string | null;
  access_model: "recurring" | "lifetime" | string;
  billing_interval: string | null;
  enrollment_open: boolean;
  enrollment_limit: number | null;
  enrollments_used: number;
  current_price_public_id: string;
  current_price_code: string;
  current_price_label: string | null;
  current_amount_cents: number;
  currency: string;
  price_class: string;
  is_price_protected: boolean;
  price_enrollment_limit: number | null;
  price_enrollments_used: number;
  entitlements: MembershipEntitlement[];
};

export type MyMembership = {
  membership_public_id: string;
  plan_code: string;
  plan_name: string;
  membership_status: "pending" | "active" | "past_due" | string;
  renewal_status: "auto_renew" | "cancel_at_period_end" | "not_applicable" | "canceled" | string;
  started_at: string | null;
  current_period_end: string | null;
  access_ends_at: string | null;
  price_label: string | null;
  amount_cents: number;
  currency: string;
  price_protected: boolean;
  entitlements: MembershipEntitlement[];
};

export type MembershipCheckoutResult = {
  checkout_url: string;
  checkout_session_id: string;
  reservation_public_id: string;
  expires_at: string;
};

function getStoredSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthSession;
  } catch {
    window.localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

function storeSession(session: AuthSession | null) {
  if (typeof window === "undefined") return;
  if (!session) {
    window.localStorage.removeItem(SESSION_KEY);
    window.dispatchEvent(new Event("tha-fix-auth-change"));
    return;
  }
  const expiresAt = Math.floor(Date.now() / 1000) + Number(session.expires_in || 3600);
  window.localStorage.setItem(SESSION_KEY, JSON.stringify({ ...session, expires_at: expiresAt }));
  window.dispatchEvent(new Event("tha-fix-auth-change"));
}

async function parseError(response: Response, fallback: string): Promise<never> {
  const body = await response.json().catch(() => ({}));
  const message = body?.msg || body?.message || body?.error_description || body?.error || fallback;
  throw new Error(String(message));
}

async function refreshSession(session: AuthSession): Promise<AuthSession> {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: session.refresh_token }),
  });
  if (!response.ok) return parseError(response, "Your session has expired. Please sign in again.");
  const refreshed = (await response.json()) as AuthSession;
  storeSession(refreshed);
  return refreshed;
}

export async function getSession(): Promise<AuthSession | null> {
  const session = getStoredSession();
  if (!session) return null;
  const now = Math.floor(Date.now() / 1000);
  if (!session.expires_at || session.expires_at - now < 60) {
    try {
      return await refreshSession(session);
    } catch {
      storeSession(null);
      return null;
    }
  }
  return session;
}

export async function signUp(email: string, password: string) {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
  });
  if (!response.ok) return parseError(response, "We couldn’t create your account.");
  const result = await response.json();
  if (result?.access_token) storeSession(result as AuthSession);
  return result;
}

export async function signIn(email: string, password: string): Promise<AuthSession> {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
  });
  if (!response.ok) return parseError(response, "Email or password is incorrect.");
  const session = (await response.json()) as AuthSession;
  storeSession(session);
  return session;
}

export async function signOut() {
  const session = getStoredSession();
  if (session) {
    await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${session.access_token}`,
      },
    }).catch(() => undefined);
  }
  storeSession(null);
}

export async function sendPasswordReset(email: string) {
  const redirectTo = typeof window !== "undefined" ? `${window.location.origin}/reset-password` : undefined;
  const response = await fetch(`${SUPABASE_URL}/auth/v1/recover`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.trim().toLowerCase(), redirect_to: redirectTo }),
  });
  if (!response.ok) return parseError(response, "We couldn’t send a password-reset email.");
}

export async function consumeRecoverySessionFromUrl(): Promise<boolean> {
  if (typeof window === "undefined" || !window.location.hash) return false;
  const params = new URLSearchParams(window.location.hash.slice(1));
  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");
  const type = params.get("type");
  if (!accessToken || !refreshToken || type !== "recovery") return false;

  const userResponse = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!userResponse.ok) return parseError(userResponse, "This password-reset link is invalid or expired.");
  const user = await userResponse.json();
  storeSession({
    access_token: accessToken,
    refresh_token: refreshToken,
    expires_in: Number(params.get("expires_in") || 3600),
    token_type: params.get("token_type") || "bearer",
    user,
  });
  window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
  return true;
}

export async function updatePassword(newPassword: string) {
  const session = await getSession();
  if (!session) throw new Error("This password-reset session is invalid or expired.");
  const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    method: "PUT",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${session.access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: newPassword }),
  });
  if (!response.ok) return parseError(response, "We couldn’t update your password.");
  await signOut();
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
  if (!response.ok) return parseError(response, "We couldn’t update your account.");
  return (await response.json()) as T;
}

async function authenticatedFunction<T>(name: string, body: Record<string, unknown> = {}): Promise<T> {
  const session = await getSession();
  if (!session) throw new Error("Please sign in to continue.");
  const response = await fetch(`${SUPABASE_URL}/functions/v1/${name}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${session.access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) return parseError(response, "The request could not be completed.");
  return (await response.json()) as T;
}

export async function getMyAccount(): Promise<MyOrganizationAccount | null> {
  const rows = await authenticatedRpc<MyOrganizationAccount[]>("get_my_organization_account", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
  });
  return rows[0] ?? null;
}

export async function completeOnboarding(input: {
  givenName: string;
  familyName: string;
  displayName: string;
  confirmedAge18Plus: boolean;
}): Promise<MyOrganizationAccount> {
  const rows = await authenticatedRpc<MyOrganizationAccount[]>("complete_member_onboarding", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_given_name: input.givenName,
    requested_family_name: input.familyName,
    requested_display_name: input.displayName,
    confirmed_age_18_plus: input.confirmedAge18Plus,
  });
  if (!rows[0]) throw new Error("Account onboarding did not return a profile.");
  return rows[0];
}

export async function updateMyProfile(input: {
  givenName: string;
  familyName: string;
  displayName: string;
}): Promise<MyOrganizationAccount> {
  const rows = await authenticatedRpc<MyOrganizationAccount[]>("update_my_account_profile", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
    requested_given_name: input.givenName,
    requested_family_name: input.familyName,
    requested_display_name: input.displayName,
  });
  if (!rows[0]) throw new Error("Profile update did not return an account.");
  return rows[0];
}

export async function getPublicMembershipPlans(): Promise<PublicMembershipPlan[]> {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_public_membership_plans`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ requested_organization_public_id: THA_FIX_ORGANIZATION_ID }),
  });
  if (!response.ok) return parseError(response, "We couldn’t load membership plans right now.");
  return (await response.json()) as PublicMembershipPlan[];
}

export async function getMyMembership(): Promise<MyMembership | null> {
  const rows = await authenticatedRpc<MyMembership[]>("get_my_membership", {
    requested_organization_public_id: THA_FIX_ORGANIZATION_ID,
  });
  return rows[0] ?? null;
}

export async function createMembershipCheckout(planPublicId: string): Promise<MembershipCheckoutResult> {
  return authenticatedFunction<MembershipCheckoutResult>("create-membership-checkout", {
    plan_public_id: planPublicId,
  });
}

export async function createBillingPortalSession(): Promise<{ portal_url: string }> {
  return authenticatedFunction<{ portal_url: string }>("create-billing-portal-session");
}

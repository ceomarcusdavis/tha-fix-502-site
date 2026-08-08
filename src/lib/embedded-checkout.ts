import { getSession } from "@/lib/account";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://hwiuxhenoogdisueholr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_KTDIiehW5udh-Q60dwnIdw_tdTn-u7Q";

// Browser-safe Stripe key injected by Netlify at Vite build time.
export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "";

export type EmbeddedCheckoutResult = {
  client_secret: string;
  checkout_session_id: string;
  reservation_public_id: string;
  expires_at: string;
};

async function parseError(response: Response, fallback: string): Promise<never> {
  const body = await response.json().catch(() => ({}));
  const message = body?.msg || body?.message || body?.error_description || body?.error || fallback;
  throw new Error(String(message));
}

export async function createEmbeddedMembershipCheckout(planPublicId: string): Promise<EmbeddedCheckoutResult> {
  const session = await getSession();
  if (!session) throw new Error("Please sign in to continue.");

  const response = await fetch(`${SUPABASE_URL}/functions/v1/create-membership-embedded-checkout`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${session.access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plan_public_id: planPublicId }),
  });

  if (!response.ok) return parseError(response, "We couldn’t start secure checkout.");
  return (await response.json()) as EmbeddedCheckoutResult;
}

const DEFAULT_SUPABASE_URL = "https://hwiuxhenoogdisueholr.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_KTDIiehW5udh-Q60dwnIdw_tdTn-u7Q";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || DEFAULT_SUPABASE_PUBLISHABLE_KEY;

export type SupportCadence = "one_time" | "monthly";

export type SupportCheckoutInput = {
  amountCents: number;
  cadence: SupportCadence;
  supporterDisplayName?: string;
  supporterMessage?: string;
  publicRecognitionConsent: boolean;
};

export type SupportCheckoutResult = {
  checkout_url: string;
  checkout_session_id: string;
  intent_public_id: string;
  cadence: SupportCadence;
  amount_cents: number;
  expires_at: string;
  recurring_management_url: string | null;
};

async function parseError(response: Response, fallback: string): Promise<never> {
  const body = await response.json().catch(() => ({}));
  const message = body?.message || body?.msg || body?.error_description || body?.error || fallback;
  throw new Error(String(message));
}

export async function createSupportCheckout(input: SupportCheckoutInput): Promise<SupportCheckoutResult> {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/create-support-checkout`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      amount_cents: input.amountCents,
      cadence: input.cadence,
      supporter_display_name: input.supporterDisplayName?.trim() || null,
      supporter_message: input.supporterMessage?.trim() || null,
      public_recognition_consent: input.publicRecognitionConsent,
    }),
  });

  if (!response.ok) return parseError(response, "We couldn’t start secure support checkout.");
  return (await response.json()) as SupportCheckoutResult;
}

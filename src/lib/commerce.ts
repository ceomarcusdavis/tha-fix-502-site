const DEFAULT_SUPABASE_URL = "https://hwiuxhenoogdisueholr.supabase.co";
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_KTDIiehW5udh-Q60dwnIdw_tdTn-u7Q";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || DEFAULT_SUPABASE_PUBLISHABLE_KEY;

export const THA_FIX_ORGANIZATION_ID = "TFM-ORG-000001";

export type MerchCatalogVariant = {
  variant_public_id: string;
  variant_name: string;
  sku: string | null;
  option_values: Record<string, unknown>;
  price_cents: number;
  currency: string;
  variant_image_url: string | null;
  sort_order: number;
};

export type MerchCatalogProduct = {
  product_public_id: string;
  slug: string;
  product_name: string;
  description: string | null;
  category: string | null;
  primary_image_url: string | null;
  variants: MerchCatalogVariant[];
};

type MerchCatalogRow = Omit<MerchCatalogProduct, "variants"> & MerchCatalogVariant;

async function parseError(response: Response): Promise<never> {
  const body = await response.json().catch(() => ({}));
  const message = body?.message || body?.msg || body?.error_description || body?.error || "We couldn’t load the Tha Fix shop right now.";
  throw new Error(String(message));
}

export async function getPublicMerchCatalog(): Promise<MerchCatalogProduct[]> {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/get_public_merch_catalog`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ requested_organization_public_id: THA_FIX_ORGANIZATION_ID }),
  });

  if (!response.ok) return parseError(response);
  const rows = (await response.json()) as MerchCatalogRow[];
  const products = new Map<string, MerchCatalogProduct>();

  for (const row of rows) {
    const existing = products.get(row.product_public_id);
    const variant: MerchCatalogVariant = {
      variant_public_id: row.variant_public_id,
      variant_name: row.variant_name,
      sku: row.sku,
      option_values: row.option_values || {},
      price_cents: Number(row.price_cents),
      currency: row.currency,
      variant_image_url: row.variant_image_url,
      sort_order: Number(row.sort_order || 0),
    };

    if (existing) {
      existing.variants.push(variant);
      continue;
    }

    products.set(row.product_public_id, {
      product_public_id: row.product_public_id,
      slug: row.slug,
      product_name: row.product_name,
      description: row.description,
      category: row.category,
      primary_image_url: row.primary_image_url,
      variants: [variant],
    });
  }

  return [...products.values()];
}

export function formatMerchPrice(cents: number, currency = "usd") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

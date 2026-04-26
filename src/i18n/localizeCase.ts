import type { Lang } from "@/i18n/LanguageContext";

export type Bi = { pt: string; en: string };

type AnyObj = Record<string, unknown>;

const isBilingual = (v: unknown): v is { pt: unknown; en: unknown } => {
  if (!v || typeof v !== "object" || Array.isArray(v)) return false;
  const o = v as AnyObj;
  const keys = Object.keys(o);
  if (!("pt" in o) || !("en" in o)) return false;
  // Only treat as bilingual if pt/en are the *only* keys — avoids mistaking
  // a regular object that happens to contain pt/en sub-fields.
  if (keys.length !== 2) return false;
  const okType = (x: unknown) =>
    typeof x === "string" || typeof x === "number" || Array.isArray(x);
  return okType(o.pt) && okType(o.en);
};

/**
 * Recursively walks a case object and returns a copy where every Bi value
 * is replaced by its localized string. Other primitives, arrays and nested
 * objects are preserved as-is.
 */
export function localizeCase<T>(value: T, lang: Lang): T {
  if (isBilingual(value)) {
    return value[lang] as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((v) => localizeCase(v, lang)) as unknown as T;
  }
  if (value && typeof value === "object") {
    const out: AnyObj = {};
    for (const k of Object.keys(value as AnyObj)) {
      out[k] = localizeCase((value as AnyObj)[k], lang);
    }
    return out as T;
  }
  return value;
}

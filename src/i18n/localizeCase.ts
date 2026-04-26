import type { Lang } from "@/i18n/LanguageContext";

export type Bi = { pt: string; en: string };

type AnyObj = Record<string, unknown>;

const isBi = (v: unknown): v is Bi =>
  !!v && typeof v === "object" && "pt" in (v as AnyObj) && "en" in (v as AnyObj) &&
  typeof (v as AnyObj).pt === "string" && typeof (v as AnyObj).en === "string";

/**
 * Recursively walks a case object and returns a copy where every Bi value
 * is replaced by its localized string. Other primitives, arrays and nested
 * objects are preserved as-is.
 */
export function localizeCase<T>(value: T, lang: Lang): T {
  if (isBi(value)) {
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

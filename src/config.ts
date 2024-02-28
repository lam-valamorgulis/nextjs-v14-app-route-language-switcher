import { Pathnames } from "next-intl/navigation";
export const locales = ["en", "vn"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    vn: "/pathnames",
  },
  "/employees/list": {
    en: "/employees/list",
    vn: "/employees/list",
  },
  "/employees/detail": {
    en: "/employees/detail",
    vn: "/employees/detail",
  },
  "/employees/create": {
    en: "/employees/create",
    vn: "/employees/create",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

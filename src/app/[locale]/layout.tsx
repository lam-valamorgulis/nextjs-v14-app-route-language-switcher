import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";
import { locales } from "../../config";

import { Inter } from "next/font/google";
import { Container, Theme } from "@radix-ui/themes";
import NavBar from "./components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Theme accentColor="violet">
          <NavBar />
          <main className="p-5">
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

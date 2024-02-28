import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <div title={t("title")}>
      <p className="max-w-[590px]">
        {t.rich("description", {
          code: (chunks) => (
            <code className="font-mono text-lg text-blue-400">{chunks}</code>
          ),
        })}
      </p>
    </div>
  );
}

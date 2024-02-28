import { useTranslations } from "next-intl";
import EmployeeDetailsLocale from "./EmployeeDetailsLocale";

// useTranslations only work for server component
// get messages and passing to EmployeeDetailsLocale as props
function EmployeeDetailPage() {
  const t = useTranslations("LocaleButon");
  return (
    <EmployeeDetailsLocale
      deleteBtn={t("deleteBtn")}
      deleteConfirm={t("deleteConfirm")}
      cancel={t("cancel")}
      edit={t("edit")}
      deleteConfirmLable={t("deleteConfirmLable")}
    />
  );
}

export default EmployeeDetailPage;

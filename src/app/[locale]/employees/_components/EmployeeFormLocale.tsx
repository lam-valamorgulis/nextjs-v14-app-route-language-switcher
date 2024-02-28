import { useTranslations } from "next-intl";
import EmployeeForm from "./EmployeeForm";

// useTranslations only work for server component
// get messages and passing to EmployeeForm as props
function EmployeeFormLocale() {
  const t = useTranslations("LocaleTable");
  return (
    <EmployeeForm
      name={t("name")}
      age={t("age")}
      salary={t("salary")}
      image={t("image")}
      create={t("create")}
      update={t("update")}
    />
  );
}

export default EmployeeFormLocale;

import EmployeesTable from "./EmployeesTable";
import { Flex } from "@radix-ui/themes";
import { useTranslations } from "next-intl";

// useTranslation only works in server component
// getting messages and passing EmployeeTable as props
const AllEmployessPage = () => {
  const t = useTranslations("LocaleTable");

  return (
    <Flex direction="column" gap="3">
      <EmployeesTable name={t("name")} age={t("age")} salary={t("salary")} />
    </Flex>
  );
};

export default AllEmployessPage;

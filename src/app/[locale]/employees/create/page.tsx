import dynamic from "next/dynamic";
import EmployeeFormSkeleton from "./loading";

const EmployeeForm = dynamic(
  () => import("@/src/app/[locale]/employees/_components/EmployeeFormLocale"),
  {
    ssr: false,
    loading: () => <EmployeeFormSkeleton />,
  }
);

const NewEmployeePage = () => {
  return <EmployeeForm />;
};

export default NewEmployeePage;

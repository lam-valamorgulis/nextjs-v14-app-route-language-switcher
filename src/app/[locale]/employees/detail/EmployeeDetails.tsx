import { EmployeeType } from "@/src/app/types/employeeTypes";
import { Flex, Heading, Text } from "@radix-ui/themes";

const EmployeeDetailPage = ({
  employeeDetail,
}: {
  employeeDetail: EmployeeType;
}) => {
  return (
    <>
      <Heading size="7">{employeeDetail.employee_name}</Heading>
      <Flex className="space-y-3 flex-col" my="2">
        <Text size="4" as="p">
          <Text className="underline underline-offset-4">Age:</Text>{" "}
          {employeeDetail.employee_age}
        </Text>
        <Text size="4" as="p">
          <Text className="underline underline-offset-4">Salary:</Text>{" "}
          {employeeDetail.employee_salary}
        </Text>
      </Flex>
    </>
  );
};

export default EmployeeDetailPage;

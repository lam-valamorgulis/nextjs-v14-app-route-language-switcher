import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const EditEmployeeButton = ({
  employeeDetailId,
  edit,
}: {
  employeeDetailId: string;
  edit: string;
}) => {
  return (
    <div className="md:col-span-6">
      <Button>
        <Pencil2Icon />
        <Link href={`/employees/create`}>{edit}</Link>
      </Button>
    </div>
  );
};

export default EditEmployeeButton;

// always put "use client" on the top
// since using zustand, client library add "use client"
"use client";

import { Box, Flex, Grid } from "@radix-ui/themes";
import EditEmployeeButton from "./EditEmployeeButton";
import EmployeeDetails from "./EmployeeDetails";
import DeleteEmployeeButton from "./DeleteEmployeeButton";
import { useStore } from "@/src/app/context/useStore";

interface Props {
  edit: string;
  deleteBtn: string;
  deleteConfirm: string;
  cancel: string;
  deleteConfirmLable: string;
}

const EmployeeDetailsLocale = ({
  edit,
  deleteBtn,
  deleteConfirm,
  cancel,
  deleteConfirmLable,
}: Props) => {
  const employeeDetail = useStore((state) => state.employeeDetail);

  return (
    <>
      {/* check length for temporary authorization visible */}
      {employeeDetail.id.length > 0 && (
        <Flex direction="column" gap="4">
          <Box className="md:col-span-4">
            <EmployeeDetails employeeDetail={employeeDetail} />
          </Box>
          <Box className="md:col-span-4">
            <Flex direction="row" gap="4" className="md:col-span-4">
              <EditEmployeeButton
                employeeDetailId={employeeDetail.id}
                edit={edit}
              />
              <DeleteEmployeeButton
                employeeDetailId={employeeDetail.id}
                deleteBtn={deleteBtn}
                deleteConfirm={deleteConfirm}
                cancel={cancel}
                deleteConfirmLable={deleteConfirmLable}
              />
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default EmployeeDetailsLocale;

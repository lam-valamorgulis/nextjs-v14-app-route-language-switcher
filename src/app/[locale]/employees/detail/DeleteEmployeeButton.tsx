"use client";

import Spinner from "@/src/app/[locale]/components/Spinner";
import { AlertDialog, Button, Container, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useStore } from "@/src/app/context/useStore";

interface Props {
  deleteBtn: string;
  deleteConfirm: string;
  cancel: string;
  employeeDetailId: string;
  deleteConfirmLable: string;
}

const DeleteEmployeeButton = ({
  employeeDetailId,
  deleteBtn,
  deleteConfirm,
  cancel,
  deleteConfirmLable,
}: Props) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const deleteEmployee = useStore((state) => state.deleteEmployee);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      //   await axios.delete("/api/issues/" + issueId);
      deleteEmployee(employeeDetailId);
      router.push("/employees/list");
      //   router.refresh();
    } catch (error) {
      setDeleting(false);
      setError(true);
    }
  };

  return (
    <div className="md:col-span-6">
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" className="px-4 mx-4" disabled={isDeleting}>
            {deleteBtn}
            {isDeleting && <Spinner />}
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>{deleteConfirmLable}</AlertDialog.Title>
          <AlertDialog.Description>{deleteConfirm}</AlertDialog.Description>
          <Flex mt="4" gap="3" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                {cancel}
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="red" onClick={handleDelete}>
                {deleteBtn}
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            This Employee could not be deleted.
          </AlertDialog.Description>
          <Button
            color="gray"
            variant="soft"
            mt="2"
            onClick={() => setError(false)}
          >
            OK
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </div>
  );
};

export default DeleteEmployeeButton;

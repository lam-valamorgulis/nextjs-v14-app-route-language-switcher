"use client";

import Image from "next/image";
import ErrorMessage from "@/src/app/[locale]/components/ErrorMessage";
import Spinner from "@/src/app/[locale]/components/Spinner";
import { employeeSchema } from "@/src/app/[locale]/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField, Text, Flex } from "@radix-ui/themes";
// import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useStore } from "@/src/app/context/useStore";

type EmployeeFormData = z.infer<typeof employeeSchema>;
interface Props {
  name: string;
  age: string;
  salary: string;
  image: string;
  create: string;
  update: string;
}

const EmployeeForm = ({ name, age, salary, image, create, update }: Props) => {
  const router = useRouter();
  const addEmployee = useStore((state) => state.addEmployee);
  const employeeDetail = useStore((state) => state.employeeDetail);
  const updateEmployeeDetail = useStore((state) => state.updateEmployeeDetail);

  // declare const for react hook form
  // resolver for interage zod for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  // for this purpose of project we dont need Post data to server or API
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      // update employee
      if (employeeDetail.id.length > 0)
        // await axios.patch("/api/employees/" + employee.id, data);
        updateEmployeeDetail({ ...employeeDetail, ...data });
      // else await axios.post("/api/employees", data);
      // create new employee
      else addEmployee({ ...data, id: Date.now().toString() });

      router.push("/employees/list");
      // make a request on "employees/list" for get fresh data
      // refer
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <div className="max-w-xs">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={onSubmit}>
        <Flex gap="1" direction="column">
          <label htmlFor="name">
            <Text weight="medium">{name}</Text>
          </label>

          <TextField.Root>
            <TextField.Input
              defaultValue={employeeDetail?.employee_name}
              id="name"
              placeholder="Name"
              {...register("employee_name")}
            />
          </TextField.Root>
          <ErrorMessage>{errors.employee_name?.message}</ErrorMessage>
        </Flex>

        <Flex gap="1" direction="column">
          <label htmlFor="age">
            <Text weight="medium">{age}</Text>
          </label>
          <TextField.Root>
            <TextField.Input
              defaultValue={employeeDetail?.employee_age}
              placeholder="Age"
              id="age"
              type="number"
              step={1}
              {...register("employee_age")}
            />
          </TextField.Root>
          <ErrorMessage>{errors.employee_age?.message}</ErrorMessage>
        </Flex>

        <Flex gap="1" direction="column">
          <label htmlFor="salary">
            <Text weight="medium">{salary}</Text>
          </label>
          <TextField.Root>
            <TextField.Input
              defaultValue={employeeDetail?.employee_salary}
              placeholder="Salary"
              id="salary"
              type="number"
              {...register("employee_salary")}
            />
          </TextField.Root>
          <ErrorMessage>{errors.employee_salary?.message}</ErrorMessage>
        </Flex>

        <Flex gap="1" direction="column">
          <label htmlFor="image">
            <Text weight="medium">{image}</Text>
          </label>
          <Flex gap="2" align="center" className="pt-3 pb-1">
            <Image
              className="h-12 w-12 object-cover rounded-full"
              width={50}
              height={50}
              src={
                employeeDetail?.profile_image
                  ? employeeDetail.profile_image
                  : "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              }
              alt="Current profile photo"
            />
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500 
                file:mr-4 file:py-2 file:px-4 
                file:rounded-full file:border-0 
                file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
              />
            </label>
            <input
              type="text"
              defaultValue=""
              className="hidden"
              {...register("profile_image")}
            />
          </Flex>
          <ErrorMessage>{errors.profile_image?.message}</ErrorMessage>
        </Flex>

        <Button disabled={isSubmitting}>
          {employeeDetail?.id.length > 0 ? `${update}` : `${create}`}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default EmployeeForm;

"use client";

import { Table, Text, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { EmployeeType } from "@/src/app/types/employeeTypes";
import { useStore } from "@/src/app/context/useStore";
import { useEffect } from "react";
import { getAllEmployees } from "@/src/app/services/apiEmployee";

interface Props {
  name: string;
  age: string;
  salary: string;
}

const EmployeesTable = ({ name, age, salary }: Props) => {
  const updateListEmployees = useStore((state) => state.updateListEmployees);

  // 1.for this purpose of the project, and the remote API is not stable only fetch data make me hard to comsuming data:
  // => so I fetch data on client components

  // 2.in real life project best practice:
  // + fetch data from server components : fast, avoid expose sensiual data
  // + move fetchEmployees to page.js and passing all employees data as props
  // + this client component EmployeeTable only handle for user interaction like: sorting, update, edit, delete

  const fetchEmployees = async () => {
    try {
      const res = await getAllEmployees();
      if (res?.ok) {
        const { data } = await res.json();
        updateListEmployees(data);
        localStorage.setItem("employees", JSON.stringify(data));
      } else {
        const employeeList = localStorage.getItem("employees");
        employeeList && updateListEmployees(JSON.parse(employeeList));
      }
    } catch (error) {}
  };

  const allEmployees = useStore((state) => state.employees);
  useEffect(() => {
    if (allEmployees?.length === 0) {
      fetchEmployees();
    }
  }, []);

  const updateEmployeeDetail = useStore((state) => state.updateEmployeeDetail);

  const handleSelectEmployee = (employee: EmployeeType) => {
    updateEmployeeDetail(employee);
  };

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>{name}</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>{age}</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>{salary}</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {allEmployees?.length > 0 &&
          allEmployees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>
                <Link href={`/employees/detail`}>
                  <Text
                    weight="medium"
                    onClick={() => handleSelectEmployee(employee)}
                  >
                    {employee.employee_name}
                  </Text>
                </Link>
              </Table.Cell>

              <Table.Cell>
                <Text weight="medium">{employee.employee_age}</Text>
              </Table.Cell>

              <Table.Cell>
                <Text weight="medium">{employee.employee_salary}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
};

export default EmployeesTable;

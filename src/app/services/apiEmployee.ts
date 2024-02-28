import { employeeSchema } from "@/src/app/[locale]/validationSchemas";
import { z } from "zod";

type EmployeeFormData = z.infer<typeof employeeSchema>;

export const createEmployee = async (employeeData: EmployeeFormData) => {
  try {
    const res = await fetch("https://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });

    if (!res.ok) {
      throw new Error("Failed to create employee");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

export const getAllEmployees = async () => {
  try {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.error("Error getting all employees:", error);
    throw error;
  }
};

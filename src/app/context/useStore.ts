import { EmployeeType, storeType } from "@/src/app/types/employeeTypes";
import { create } from "zustand";

export const initEmployee = {
  id: "",
  employee_name: "",
  employee_salary: "",
  employee_age: "",
  profile_image: "",
};

const updateEmployees = (
  employees: EmployeeType[],
  employeeDetail: EmployeeType
) => {
  const newEmployees = [...employees];
  const index = employees.findIndex(
    (employee: EmployeeType) => employee.id === employeeDetail.id
  );

  if (index !== -1) {
    newEmployees[index] = {
      ...newEmployees[index],
      ...employeeDetail,
    };
  }
  return newEmployees;
};

export const useStore = create<storeType>((set) => ({
  employees: [],
  employeeDetail: initEmployee,
  updateEmployeeDetail: (employeeDetail: EmployeeType) =>
    set((state: storeType) => ({
      ...state,
      employees: updateEmployees(state.employees, employeeDetail),
      employeeDetail,
    })),
  updateListEmployees: (employees: EmployeeType[]) =>
    set((state: storeType) => ({
      ...state,
      employees,
    })),
  deleteEmployee: (id: string) =>
    set((state: storeType) => ({
      ...state,
      employees: state.employees.filter((employee) => employee.id !== id),
    })),
  addEmployee: (employeeDetail: EmployeeType) =>
    set((state: storeType) => ({
      ...state,
      employees: [...state.employees, employeeDetail],
    })),
}));

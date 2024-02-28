export interface EmployeeType {
  id: string;
  employee_name: string;
  employee_salary: number | string;
  employee_age: number | string;
  profile_image: string;
}

export interface storeType {
  employeeDetail: EmployeeType;
  employees: EmployeeType[];
  updateEmployeeDetail: (employeeDetail: EmployeeType) => void;
  updateListEmployees: (employees: EmployeeType[]) => void;
  deleteEmployee: (id: string) => void;
  addEmployee: (employeeDetail: EmployeeType) => void;
}

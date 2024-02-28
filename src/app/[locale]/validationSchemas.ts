import { z } from "zod";

export const employeeSchema = z.object({
  employee_name: z.string().min(1, "Name is required.").max(255),
  employee_age: z.coerce.number().gt(17).int(),
  employee_salary: z.coerce.number().gt(1).int(),
  profile_image: z.string(),
});

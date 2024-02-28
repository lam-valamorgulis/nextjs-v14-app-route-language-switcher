import { NextRequest, NextResponse } from "next/server";
import { employeeSchema } from "../../validationSchemas";
import { createEmployee } from "@/src/app/services/apiEmployee";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = employeeSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newEmployee = await createEmployee(body);

  return NextResponse.json(newEmployee, { status: 201 });
}

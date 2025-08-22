import dbConnection from '@/lib/dbConnect';
import DepartmentModel from '@/models/DepartmentModel';

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  await dbConnection();

  try {
    const rules = await DepartmentModel.find();
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Departments Goted',
        data: rules,
      }),
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error,
      }),
      { status: 404 },
    );
  }
}

// POST Departments

export async function POST(req: NextRequest) {
  await dbConnection();
  const data = await req.json();

  try {
    const createdDepartment = await DepartmentModel.create(data);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Department Created Successfully!',
        data: createdDepartment,
      }),
      { status: 201 },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error,
      }),
      { status: 404 },
    );
  }
}

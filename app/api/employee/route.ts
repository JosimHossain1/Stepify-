import dbConnection from '@/lib/dbConnect';
import EmployeeModel from '@/models/EmployeeModel';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  // Data base connection
  await dbConnection();
  const data = await req.json();
  try {
    const response = await EmployeeModel.create(data);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Employee Profile Created Successfully!',
        data: response,
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: error,
      }),
      { status: 500 },
    );
  }
}

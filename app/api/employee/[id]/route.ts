import dbConnection from '@/lib/dbConnect';
import EmployeeModel from '@/models/EmployeeModel';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();

  const id = params.id;
  try {
    const singleEmployee = await EmployeeModel.findById(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Get the single Employee',
        data: singleEmployee,
      }),
      { status: 200 },
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 500,
    });
  }
}

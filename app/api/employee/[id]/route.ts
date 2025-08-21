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
        message: 'Got the single Employee',
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



// PUT - Update single Employee data
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  const { id } = params;

  try {
    const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Employee Updated Successfully!',
        data: updatedEmployee,
      }),
      { status: 200 },
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

// DELETE - Delete single Employee by id
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  await dbConnection();

  try {
    await EmployeeModel.findByIdAndDelete(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Employee Deleted Successfully!',
      }),
      { status: 200 },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: true,
        message: error,
      }),
      { status: 500 },
    );
  }
}

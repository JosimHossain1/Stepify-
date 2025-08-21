import dbConnection from '@/lib/dbConnect';
import BranchModel from '@/models/BranchModel';
import { NextRequest } from 'next/server';

// GET single branch
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await dbConnection();
  try {
    const singleBranch = await BranchModel.findById(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Data Goted',
        data: singleBranch,
      }),
      { status: 200 },
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

// PUT - Update single branch data
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  const { id } = params;

  try {
    const updatedBranch = await BranchModel.findByIdAndUpdate(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Branch Updated Successfully!',
        data: updatedBranch,
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

// DELETE - Delete single branch by id
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  await dbConnection();

  try {
    await BranchModel.findByIdAndDelete(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Branch Deleted Successfully!',
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

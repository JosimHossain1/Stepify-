import dbConnection from '@/lib/dbConnect';
import CategoryModel from '@/models/CategoryModel';
import { NextRequest } from 'next/server';

// GET single Category
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await dbConnection();
  try {
    const singleCategory = await CategoryModel.findById(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Category Goted',
        data: singleCategory,
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

// PUT - Update single Category data
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  const { id } = params;

  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Category Updated Successfully!',
        data: updatedCategory,
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

// DELETE - Delete single Category by id
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  await dbConnection();

  try {
    await CategoryModel.findByIdAndDelete(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Category Deleted Successfully!',
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

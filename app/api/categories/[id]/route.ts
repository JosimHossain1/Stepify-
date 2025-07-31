import dbConnection from '@/lib/dbConnect';
import CategoryModel from '@/models/CategoryModel';
import { NextRequest } from 'next/server';

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await dbConnection();

  await CategoryModel.findByIdAndDelete(id);

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Category Deleted Successfully!',
    }),
    { status: 200 },
  );
}

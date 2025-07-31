import dbConnection from '@/lib/dbConnect';
import CategoryModel from '@/models/CategoryModel';
import { NextRequest } from 'next/server';

// Get All Catogories
export async function GET(request: NextRequest) {
  try {
    await dbConnection();
    const categories = await CategoryModel.find();

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// Create Categories

export async function POST(request: NextRequest) {
  try {
    const datas = await request.json();
    await dbConnection();

    const createCategory = await CategoryModel.create(datas);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Category Created',
        data: createCategory,
      }),
      { status: 201 },
    );
  } catch (error) {
    console.log(error);
  }
}

// Get single product by id

import dbConnection from '@/lib/dbConnect';
import ProductModel from '@/models/ProductModel';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  try {
    await dbConnection();
    const singleProduct = await ProductModel.findById(id);
    return new Response(JSON.stringify(singleProduct));
  } catch (error) {
    console.log(error);
  }
}

// Update data

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { title } = await req.json();

  try {
    await dbConnection();

    const updateProduct = await ProductModel.findByIdAndUpdate(id, {
      title,
      new: true,
    });

    return new Response(JSON.stringify(updateProduct));
  } catch (error) {
    console.log(error);
  }
}

// Delete Product by id

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await dbConnection();

  try {
    await ProductModel.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Product Deleted Successfully!',
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
  }
}

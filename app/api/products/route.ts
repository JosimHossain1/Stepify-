// Get all products

import dbConnection from '@/lib/dbConnect';
import ProductModel from '@/models/ProductModel';
import { NextRequest } from 'next/server';

// Get all products
export async function GET() {
  await dbConnection();

  try {
    const allProducts = await ProductModel.find();
    return new Response(JSON.stringify(allProducts), { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// Add new product

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const data = await req.json();

    // Connect Database
    await dbConnection();

    // Create new product
    const addedProduct = await ProductModel.create(data);

    // return response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Product Create successfully',
        data: addedProduct,
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Failed to create product.',
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}

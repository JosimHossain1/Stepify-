// Get all orders

import dbConnection from '@/lib/dbConnect';
import OrderModel from '@/models/OrderModel';
import { NextRequest } from 'next/server';

// Get all orders
export async function GET() {
  await dbConnection();

  try {
    const allorders = await OrderModel.find();
    return new Response(JSON.stringify(allorders), { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// Add new order

export async function POST(req: NextRequest) {
  try {
    // Parse JSON body
    const data = await req.json();

    // Connect Database
    await dbConnection();

    // Create new order
    const addedorder = await OrderModel.create(data);

    // return response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Order Create successfully',
        data: addedorder,
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
        message: 'Failed to create order.',
        error: error,
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

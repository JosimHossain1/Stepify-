// Get single Order by id

import dbConnection from '@/lib/dbConnect';
import OrderModel from '@/models/OrderModel';
import { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  try {
    await dbConnection();
    const singleOrder = await OrderModel.findById(id);
    return new Response(JSON.stringify(singleOrder));
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

    const updateOrder = await OrderModel.findByIdAndUpdate(id, {
      title,
      new: true,
    });

    return new Response(JSON.stringify(updateOrder));
  } catch (error) {
    console.log(error);
  }
}

// Delete Order by id

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await dbConnection();

  try {
    await OrderModel.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Order Deleted Successfully!',
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log(error);
  }
}

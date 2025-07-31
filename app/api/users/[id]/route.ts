import dbConnection from '@/lib/dbConnect';
import UserModel from '@/models/UserModel';
import { NextRequest } from 'next/server';

// Get single data by userID
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  await dbConnection();

  try {
    const singleUser = await UserModel.findById(id);
    return new Response(JSON.stringify(singleUser), { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// Delete Data by userID
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  await dbConnection();

  try {
    await UserModel.findByIdAndDelete(id);

    return new Response(
      JSON.stringify({ message: 'User Deleted Successfully!' }),
    );
  } catch (error) {
    console.log(error);
  }
}

// Update data by userID
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  console.log(id);
  const { name } = await request.json();

  await dbConnection();

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, { name }, { new: true });


    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

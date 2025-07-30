import dbConnection from '@/lib/dbConnect';
import UserModel from '@/models/UserModel';
import { NextRequest } from 'next/server';

export async function GET() {
  await dbConnection();
  const getUser = await UserModel.find();
  return new Response(JSON.stringify(getUser), { status: 200 });
}

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();
  await dbConnection();

  const newUser = await UserModel.create({ name, email });
  return new Response(JSON.stringify(newUser), { status: 201 });
}

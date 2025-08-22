import dbConnection from '@/lib/dbConnect';
import BranchModel from '@/models/BranchModel';
import { NextRequest } from 'next/server';

// GET all the datas
export async function GET() {
  await dbConnection();

  try {
    const allBranches = await BranchModel.find();
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Branch Goted',
        data: allBranches,
      }),
      { status: 200 },
    );
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error }), {
      status: 404,
    });
  }
}

// POST all datas
export async function POST(req: NextRequest) {
  const data = await req.json();
  await dbConnection();

  try {

    const response = await BranchModel.create(data);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Branch Created Successfully!',
        data: response,
      }),
      { status: 201 },
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

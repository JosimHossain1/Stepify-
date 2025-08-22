import dbConnection from '@/lib/dbConnect';
import RoleModel from '@/models/RolesModel';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  await dbConnection();

  try {
    const rules = await RoleModel.find();
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Roles Goted',
        data: rules,
      }),
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

// POST Roles

export async function POST(req: NextRequest) {
  await dbConnection();
  const data = await req.json();

  try {
    const createdRole = await RoleModel.create(data);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Role Created Successfully!',
        data: createdRole,
      }),
      { status: 404 },
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

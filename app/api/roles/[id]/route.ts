import dbConnection from '@/lib/dbConnect';
import RoleModel from '@/models/RolesModel';
import { NextRequest } from 'next/server';


// Delete role
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  const { id } = params;

  try {
    await RoleModel.findByIdAndDelete(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Role deleted Successfully!',
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

// Update role

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  await dbConnection();
  const { id } = params;

  try {
    const updatedRole = await RoleModel.findByIdAndUpdate(id);
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Role Updated Successfully!',
        data: updatedRole,
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

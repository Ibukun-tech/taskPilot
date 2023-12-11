import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;
    if (!userId) {
      return NextResponse.json({ error: "unauthorized", status: "401" });
    }
    const task = await prisma.task.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: "error deleting task", status: "500" });
  }
}

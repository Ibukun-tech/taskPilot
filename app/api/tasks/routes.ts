import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export async function POST(req: Request, res: Response) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ status: "you are not authorised" });
    }
    const { title, decription, date, isCompleted, isImportant } =
      await req.json();
    if (!title || !decription || !date) {
      return NextResponse.json({ error: "missing someRequired fields" });
    }
    const task = await prisma.task.create({
      data: {
        title,
        decription,
        date,
        isImportant,
        isCompleted,
        userId,
      },
    });
    return NextResponse.json({task, status:"201"})
  } catch (err) {
    return NextResponse.json({ error: err, status: "500" });
  }
}

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    console.log(userId);
    if (!userId) {
      return NextResponse.json({ status: "you are not authorised" });
    }
    const { title, decription, date, isCompleted, isImportant } =
      await req.json();

    if (!title || !decription || !date) {
      return NextResponse.json({
        error: "missing someRequired fields",
        status: "400",
      });
    }
    console.log(title, decription, "its here");
    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: "400",
      });
    }
    const task = await prisma.task.create({
      data: {
        title,
        decription: decription,
        date,
        isCompleted,
        isImportant,
        userId,
      },
    });
    console.log(task);
    return NextResponse.json(task);
  } catch (err) {
    return NextResponse.json({ error: err, status: "500" });
  }
}

export async function GET(req: Request, res: Response) {
  console.log("I am about to get something");
  try {
    const { userId } = auth();
    // console.log(userId);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: "401" });
    }
    const task = await prisma.task.findMany({
      where: {
        userId,
      },
    });
    console.log(task);
    return NextResponse.json(task);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}

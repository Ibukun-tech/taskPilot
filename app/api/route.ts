import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import prisma from "@/app/utils/connect";
import { startDatabase, Model } from "../utils/connect";
let value = false;
async function mark() {
  if (!value) await startDatabase();
  value = true;
}
console.log(value);
mark();
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    console.log(userId);
    if (!userId) {
      return NextResponse.json({ status: "you are not authorised" });
    }
    console.log(req);
    const { title, decription, date, isCompleted, isImportant } =
      await req.json();
    if (!title || !decription || !date) {
      return NextResponse.json({ error: "missing someRequired fields" });
    }
    const task = await Model.create({
      title: title,
      description: decription,
      date: date,
      isCompleted: isCompleted,
      userId: userId,
    });
    return NextResponse.json({ task, status: "201" });
  } catch (err) {
    return NextResponse.json({ error: err, status: "500" });
  }
}

export async function GET(req: Request, res: Response) {
  console.log("I am about to get something");
  try {
    const { userId } = auth();
    console.log(userId);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: "401" });
    }
    const task = await Model.find({
      userId: userId,
    });
    return NextResponse.json(task);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}

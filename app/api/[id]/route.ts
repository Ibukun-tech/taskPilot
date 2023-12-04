import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
  } catch (error) {
    console.log(error, "deleting task");
    return NextResponse.json(error);
  }
}

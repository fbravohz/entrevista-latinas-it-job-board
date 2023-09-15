const { NextResponse } = require("next/server");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const res = await prisma.jobs.findUnique({
      where: {
        id: Number(params.jobID),
      },
    });
    if (res) return NextResponse.json({ success: res }, { status: 200 });
    else
      return NextResponse.json(
        { error: { message: "Not found." } },
        { status: 404 }
      );
  } catch (err) {
    return NextResponse.json(
      { error: { message: "Bad request." } },
      { status: 400 }
    );
  }
}

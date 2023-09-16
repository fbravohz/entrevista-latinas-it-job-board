const { NextResponse } = require("next/server");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const companyName = url.searchParams.get("companyName");
    const functionalArea = url.searchParams.get("functionalArea");
    const keywords = url.searchParams.get("keywords");
    const locationFull = url.searchParams.get("locationFull");
    const perks = url.searchParams.get("perks");
    const recent = url.searchParams.get("recent");
    const seniority = url.searchParams.get("seniority");

    const orderBy = [];
    if (recent) {
      orderBy.push({ datePublished: recent ? "desc" : "asc" });
    }
    orderBy.push({ companyName: companyName ? "asc" : "desc" });

    const res = await prisma.jobs.findMany({
      where: {
        ...(functionalArea && { functionalArea: { contains: functionalArea } }),
        ...(locationFull && { locationFull: { contains: locationFull } }),
        ...(perks && { perks: { contains: perks } }),
        ...(seniority && { seniority: { contains: seniority } }),
        ...(keywords && {
          OR: [
            { companyName: { contains: keywords } },
            { jobTitle: { contains: keywords } },
            { jobType: { contains: keywords } },
            { locationFull: { contains: keywords } },
            { seniority: { contains: keywords } },
            { perks: { contains: keywords } },
            { functionalArea: { contains: keywords } },
          ],
        }),
      },
      orderBy: orderBy,
    });
    if (res) return NextResponse.json({ success: res }, { status: 200 });
    else
      return NextResponse.json(
        { error: { message: "Not found." } },
        { status: 404 }
      );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: { message: "Bad request." } },
      { status: 400 }
    );
  }
}

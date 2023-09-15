const { NextResponse } = require('next/server')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export async function GET(request) { 
  console.log("called");
  try{
    const url = new URL(request.url);
    const enumType = url.searchParams.get('enumType');
    
    const res = await prisma.technicalityParameterType.findMany({
      where: {
        ...(enumType && { enumType })
      }
    })
    if (res) return NextResponse.json({ success: res }, { status: 200 });
    else
      return NextResponse.json(
        { error: { message: "No technicality parameter type found." } },
        { status: 404 }
      );
  } catch(err){
    return NextResponse.json(
      { error: { message: "Bad request." } },
      { status: 400 }
    );
  }
}
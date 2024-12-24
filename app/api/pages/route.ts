import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const pages = await prisma.page.findMany()
    return NextResponse.json(pages)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch pages" },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      )
    }

    const data = await request.json()
    const page = await prisma.page.create({
      data
    })
    return NextResponse.json(page)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    )
  }
}
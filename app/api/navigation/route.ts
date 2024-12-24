import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function GET() {
  try {
    const navigation = await prisma.navigation.findMany({
      orderBy: { order: "asc" }
    })
    return NextResponse.json(navigation)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch navigation" },
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
    const navItem = await prisma.navigation.create({
      data
    })
    return NextResponse.json(navItem)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create navigation item" },
      { status: 500 }
    )
  }
}
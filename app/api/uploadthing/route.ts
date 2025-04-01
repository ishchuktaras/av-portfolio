// Dočasná implementace bez uploadthing
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ message: "Upload API is temporarily disabled" })
}

export async function POST() {
  return NextResponse.json({ message: "Upload API is temporarily disabled" }, { status: 503 })
}


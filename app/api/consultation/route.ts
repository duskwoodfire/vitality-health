import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  // Here you would typically save the consultation data to a database
  console.log("Received consultation booking:", body)

  // For now, we'll just return a success message
  return NextResponse.json({ message: "Consultation booked successfully" })
}


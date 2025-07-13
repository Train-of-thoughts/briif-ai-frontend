import { NextResponse } from "next/server";
import { logoutUser } from "@/lib/auth/actions";

export async function POST(): Promise<NextResponse> {
  try {
    await logoutUser();
    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 },
    );
  }
}

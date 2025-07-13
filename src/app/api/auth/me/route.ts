import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/actions";

export async function GET(): Promise<NextResponse> {
  try {
    const user = await getCurrentUser();

    if (user) {
      return NextResponse.json(user);
    }

    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  } catch (error) {
    console.error("Error getting current user:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 },
    );
  }
}

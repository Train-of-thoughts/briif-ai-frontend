import { NextRequest, NextResponse } from "next/server";
import { loginUser } from "@/lib/auth/actions";
import { LoginCredentials } from "@/lib/auth/types";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const credentials: LoginCredentials = {
      email: body.email,
      password: body.password,
    };

    const result = await loginUser(credentials);

    if (result.success) {
      // Get the user from the session
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"}/auth/profile`,
        {
          headers: {
            Cookie: request.headers.get("cookie") || "",
          },
        },
      );

      if (response.ok) {
        const user = await response.json();
        return NextResponse.json(user);
      }

      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { message: result.error || "Login failed" },
      { status: 401 },
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 },
    );
  }
}

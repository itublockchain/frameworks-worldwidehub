import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const entryHash = searchParams.get("entryHash");
  if (!entryHash) {
    return new Response("entryHash is Not Set", {
      status: 400,
    });
  }
  const user = await kv.hgetall("user:me");
  return NextResponse.json(user);
}

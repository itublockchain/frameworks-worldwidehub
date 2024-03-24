import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { Entry } from "../types/entryTypes";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const entryHash = searchParams.get("entryHash");
  if (!entryHash) {
    return new Response("entryHash is Not Set", {
      status: 400,
    });
  }
  let result: { entry: Entry } = await kv.hgetall(entryHash);
  let entry = result.entry;

  const responseEntry = { entryHash, entry };

  const jsonResponseEntry = JSON.stringify(responseEntry);

  return new Response(jsonResponseEntry, {
    status: 200,
  });
}

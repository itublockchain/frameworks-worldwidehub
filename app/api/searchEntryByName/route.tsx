import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

import { Entry, EntryComment } from "../types/entryTypes";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const searchKey = searchParams.get("searchKey");
  if (!searchKey) {
    return new Response("searchKey is Not Set", {
      status: 201,
    });
  }
  const entryHashes = await kv.smembers("EntryHashSet");
  let entries: Entry[] = [];
  for (const hash of entryHashes) {
    let result: { entry: Entry } = await kv.hgetall(hash);
    let entry = result.entry;
    entries.push(entry);
  }

  entries = entries.filter((entry) => {
    return entry.entryTitle.includes(searchKey);
  });

  const jsonResponseEntries = JSON.stringify(entries);

  return new Response(jsonResponseEntries, {
    status: 200,
  });
}

import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

import { Entry, EntryComment } from "../types/entryTypes";

export async function GET() {
  const entryHashes = await kv.smembers("EntryHashSet");
  let entries: Entry[] = [];
  for (const hash of entryHashes) {
    console.log(hash);
    let result: { entry: Entry } = await kv.hgetall(hash);
    let entry = result.entry;
    entries.push(entry);
    console.log(entries);
  }

  const jsonResponseEntries = JSON.stringify(entries);

  return new Response(jsonResponseEntries, {
    status: 200,
  });
}

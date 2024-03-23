import { createClient } from "@vercel/kv";
import { kv } from "@vercel/kv";
import { Entry, EntryComment } from "../types/entryTypes";
import * as crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const hash = crypto.randomBytes(20).toString("hex");

  const hashtag = searchParams.get("hashtag");
  const entryTitle = searchParams.get("entryTitle");
  const entryCreatorAddress = searchParams.get("entryCreatorAddress");

  if (!hashtag) {
    return new Response("hashtag is Not Set", {
      status: 201,
    });
  }
  if (!entryCreatorAddress) {
    return new Response("entryCreator Address is Not Set", {
      status: 201,
    });
  }

  if (!entryTitle) {
    return new Response("entryTitle Address is Not Set", {
      status: 201,
    });
  }

  const entryComment: EntryComment = {
    commentString: "asd",
    commentCreatorAddress: "asd",
  };

  const createdEntry: Entry = {
    hashtag,
    entryTitle,
    entryCreatorAddress,
    comments: new Map<String, EntryComment>(),
  };

  try {
    await kv.hset(hash, { entry: createdEntry });
    await kv.sadd("EntryHashSet", hash);
  } catch (error) {
    // Handle errors
  }

  const responseEntry = { hash, createdEntry };

  const jsonResponseEntry = JSON.stringify(responseEntry);

  return new Response(jsonResponseEntry, {
    status: 201,
  });
}

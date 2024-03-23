import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { Entry, EntryComment } from "../types/entryTypes";

import * as crypto from "crypto";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  let commentHash = crypto.randomBytes(20).toString("hex");

  const entryHash = searchParams.get("entryHash");
  const commentString = searchParams.get("commentString");
  const commentCreatorAddress = searchParams.get("commentCreatorAddress");

  if (!entryHash) {
    return new Response("entryHash is Not Set", {
      status: 400,
    });
  }

  if (!commentString) {
    return new Response("hashtag is Not Set", {
      status: 400,
    });
  }

  if (!commentCreatorAddress) {
    return new Response("hashtag is Not Set", {
      status: 400,
    });
  }

  const entryComment: EntryComment = {
    commentString,
    commentCreatorAddress,
  };
  let result: { entry: Entry } = await kv.hgetall(entryHash);
  let entry = result.entry;
  entry.comments[`${commentHash}`] = entryComment;
  await kv.hset(entryHash, { entry });
  const responseEntry = { entryHash, entry };

  const jsonResponseEntry = JSON.stringify(responseEntry);

  return new Response(jsonResponseEntry, {
    status: 201,
  });
}

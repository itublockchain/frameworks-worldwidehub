/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";
import { getFrameMessage, getPreviousFrame } from "frames.js/next/server";

const frames = createFrames({
  basePath: "/api/frames",
  initialState: {
    pageIndex: 0,
  },
});

const accepts = [
  {
    id: "farcaster",
    version: "vNext",
  },
  {
    id: "xmtp",
    version: "vNext",
  },
];

const handleRequest = frames(async (ctx) => {
  let pageParam: number;
  let entryHash = ctx.searchParams.entryHash;

  if (ctx.searchParams.doComment) {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/commentToEntry?entryHash=${entryHash}&commentCreatorAddress=default&commentString=${ctx.message.inputText}`,
      { method: "POST" },
    );
  }

  let commentMode = ctx.searchParams.commentMode;
  if (!ctx.searchParams.page) {
    pageParam = 1;
  } else {
    pageParam = Number(ctx.searchParams.page);
  }
  const previousFrame = getPreviousFrame(ctx.searchParams);
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/getEntryData?entryHash=${entryHash}`,
  );

  const entryData = await result.json();
  let comments = entryData.entry.comments;
  comments = comments.filter((comment: any, index) => {
    return index >= (pageParam - 1) * 2 && index < pageParam * 2;
  });
  // ...
  if (!commentMode)
    return {
      image: (
        <div tw="flex flex-col">
          <div>{comments[0]?.commentString}</div>

          <h6>{comments[0]?.commentCreatorAddress}</h6>

          <div>{comments[1]?.commentString}</div>

          <h6>{`creator: ${comments[1]?.commentCreatorAddress}`}</h6>
          <div className="flex">{`Current Page: ${pageParam}`}</div>
        </div>
      ),
      buttons: [
        pageParam > 1 && (
          <Button
            action="post"
            target={`/?entryHash=${entryHash}&page=${+pageParam - 1}`}
          >
            Down
          </Button>
        ),
        <Button
          action="post"
          target={`/?commentMode=${true}&entryHash=${entryHash}&page=${+pageParam + 1}`}
        >
          Comment
        </Button>,

        <Button
          action="post"
          target={`/?entryHash=${entryHash}&page=${+pageParam + 1}`}
        >
          Up
        </Button>,
      ],
      accepts,
    };

  if (commentMode)
    return {
      image: <div>Your Comment</div>,

      buttons: [
        <Button
          action="post"
          target={`/?doComment=${true}&entryHash=${entryHash}&commentString=asd&commentCreatorAddress=asd`}
        >
          Do Comment
        </Button>,
        <Button
          action="post"
          target={`/?doComment=${true}&entryHash=${entryHash}&page=${+pageParam + 1}`}
        >
          Back
        </Button>,
      ],

      textInput: "Write Comment Here",
      accepts,
    };
});

export { handleRequest as GET, handleRequest as POST };

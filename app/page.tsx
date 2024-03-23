import { usePrivy } from "@privy-io/react-auth";
import { Button } from "frames.js/next";
import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameInput,
  NextServerPageProps,
  createPreviousFrame,
  getPreviousFrame,
} from "frames.js/next/server";

export default async function Home(props: any) {
  const previousFrame = getPreviousFrame(props.searchParams);
  return (
    <>
      <FrameContainer postUrl="/" state={{}} previousFrame={previousFrame}>
        <FrameImage src="https://picsum.photos/seed/frames.js/1146/600" />
        <FrameInput text="put some text here" />
        <FrameButton action="tx" target={`https://www.google.com`}>
          External
        </FrameButton>
      </FrameContainer>
    </>
  );
}

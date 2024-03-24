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
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="flex flex-row -mx-2">
          <div className="flex flex-col w-full md:w-1/4 px-2 mb-4 gap-5 ml-8">
            <div className="text-xl font-bold ml-24">Most Liked Entrys</div>
            <div className="flex flex-col bg-yellow-50 rounded-3xl shadow top-0 p-1 border-2 border-black">
              <div className="flex flex-row top-0 rounded-3xl text-left p-2 justify-between hover:bg-yellow-100">
                <span className="text-lg mb-4 p-1 w-72">Watering schedule</span>
                <span className="text-lg mb-4 p-1">462</span>
              </div>
              <div className="flex flex-row top-0 rounded-3xl text-left p-2 justify-between hover:bg-yellow-100">
                <span className="text-lg mb-4 p-1 w-72">Obama</span>
                <span className="text-lg mb-4 p-1">254</span>
              </div>
              <div className="flex flex-row top-0 rounded-3xl text-left p-2 justify-between hover:bg-yellow-100">
                <span className="text-lg mb-4 p-1 w-72">
                  What happened to Kate?
                </span>
                <span className="text-lg mb-4 p-1">462</span>
              </div>
              <div className="flex flex-row top-0 rounded-3xl text-left p-2 justify-between hover:bg-yellow-100">
                <span className="text-lg mb-4 p-1 w-72">
                  The reasons to use slippers on your summer location
                </span>
                <span className="text-lg mb-4 p-1">1761</span>
              </div>
              <div className="flex flex-row top-0 rounded-3xl text-left p-2 justify-between hover:bg-yellow-100">
                <span className="text-lg mb-4 p-1 w-72">
                  What can I do to make money quick
                </span>
                <span className="text-lg mb-4 p-1">73</span>
              </div>
              <div className="flex flex-row top-0 rounded-3xl text-left p-2 justify-between hover:bg-yellow-100">
                <span className="text-lg mb-4 p-1 w-72">Pitbull new song</span>
                <span className="text-lg mb-4 p-1">0</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-1 w-[800px] ml-24">
            <div className="flex flex-col justify-start mb-4 border-2 border-b-black">
              <div className="mb-6 text-xl font-bold">
                <h4>Insomnia</h4>
              </div>
              <div className="mb-8 w-[600px]">
                <p>
                  it is a common sleep disorder that can make it hard to fall
                  asleep, stay asleep, or cause you to wake up too early and not
                  be able to get back to sleep. Insomnia can lead to daytime
                  sleepiness, lack of energy, irritability, and difficulty
                  concentrating.horrible to have it :/
                </p>
              </div>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-start border-2 border-b-black">
              <div className="mb-6 text-xl font-bold">
                <h4>Insomnia</h4>
              </div>
              <div className="mb-8">
                <p>
                  it is a common sleep disorder that can make it hard to fall
                  asleep, stay asleep, or cause you to wake up too early and not
                  be able to get back to sleep. Insomnia can lead to daytime
                  sleepiness, lack of energy, irritability, and difficulty
                  concentrating. horrible to have it :/
                </p>
              </div>
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/düzlemli.png"
          alt="Hi_image"
          className="h-40 fixed right-0 bottom-10"
        />
      </div>
    </>
  );
}

"use client";

import { usePrivy } from "@privy-io/react-auth";
import { FrameInput } from "frames.js/next/server";

export default function Navbar() {
  const { login } = usePrivy();
  return (
    <>
      <div className="bg-white p-5 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-0 flex-col">
          <img src="/LOGO1.png" alt="Logo" className="h-11" />
          <div className="text-xs font-bold text-left">WordWise Hub</div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex bg-white items-center rounded-full border border-gray-300">
            <FrameInput text="put some text here" />
            <div className="p-2">
              <button className="text-gray-500 rounded-full p-2 hover:bg-gray-100 focus:outline-none">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <img src="/düzlemsiz.png" alt="BirdTop" className="h-24" />
          </div>
          <div>
            <button className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none font-bold rounded-full px-4 py-2">
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 py-2 bg-gray-100 overflow-x-auto gap-x-6 border-2 border-black">
        <a
          href="#"
          className="bg-yellow-500 border-2 border-yellow-500 rounded-full py-1 px-4 flex items-center shadow-lg text-black text-sm font-bold"
        >
          #Agenda
        </a>

        <a
          href="#"
          className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-full"
        >
          #education
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-full"
        >
          #education
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded-full"
        >
          #education
        </a>
      </div>
    </>
  );
}

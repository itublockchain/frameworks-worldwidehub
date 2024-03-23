"use client";

import { usePrivy } from "@privy-io/react-auth";

export default function Navbar() {
  const { login } = usePrivy();
  return (
    <>
      <div className="">Navbar</div>
    </>
  );
}

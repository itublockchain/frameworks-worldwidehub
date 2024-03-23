"use client";

import { PrivyProvider, usePrivy } from '@privy-io/react-auth';

export default function Providers({ children }: { children: React.ReactNode }) {
  const { login, ready, authenticated } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);
  
  return (
    <PrivyProvider appId="clu45qg6q0k2tklm62opgvbp8" config={{
      loginMethods : ["wallet", "farcaster", "email", "google"],
      appearance : {
        logo : "../public/logo.png",
        theme : "light",
        accentColor : "green",
        showWalletLoginFirst : true,
        walletList : ["metamask", "phantom", "walletconnect", "walletlink", "coinbase"]
      },
      embeddedWallets: {
        createOnLogin: 'users-without-wallets',
      }
    }}>{
      <button disabled={false} onClick={login}>Log In</button>
    }</PrivyProvider>
  );
}

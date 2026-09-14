import Image from "next/image";
import { MenuLandingPage } from "./component/landing-page-menu/page";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-white dark:bg-black">
      <div className="mx-8 mt-4 flex h-[80px] w-[calc(100%-4rem)] items-center justify-between rounded-[70px] bg-blue-800 px-8">
        <div className="relative flex h-[50px] w-[220px] items-center">
          <Image src="/img/smk_mvp_ars_logo.png" alt="logo" fill className="object-contain object-left"/>
        </div>
        <div className="flex items-center justify-center">
          <MenuLandingPage />
        </div> 
      </div>
    </main>
  );
}
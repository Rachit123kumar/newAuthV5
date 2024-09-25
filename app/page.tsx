import {Poppins} from "next/font/google"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Loginbutton from "@/components/auth/login-button";
const font=Poppins({
  subsets:["latin"],
  weight:"500"
})


export default function Home() {
  return (
   <main className="flex h-full flex-col items-center justify-center bg-sky-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <div className="space-y-6">
      <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",font.className)}> 🔐Auth</h1>
      <p className="text-white text-xl">A simple authentication service</p>

    </div>  
    <Loginbutton >

  <Button size="lg">Sign in</Button>
    </Loginbutton>
   </main>
  );
}

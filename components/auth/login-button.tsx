"use client"
import {useRouter} from "next/navigation"
interface LoginButtonProps{
    children:React.ReactNode,
    mode?:"modal"| "redirect",
    asChild?:boolean
}

export default function Loginbutton({children,mode="redirect",asChild}:LoginButtonProps) {
    const Router=useRouter();

    const onClick=()=>{
        Router.push("/auth/login")
        console.log("button is clicked")
    }

if(mode==="modal"){

return <span>Implememt modal</span>
}



  return (
    <span className='cursor-pointer' onClick={onClick}>
      {children}
    </span>
  )
}

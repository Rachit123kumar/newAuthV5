"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import BackButton from "./BackButton"
import Header from "./header"
import Social from "./Social"


interface cardWrapperProps{
    children:React.ReactNode,
    headerLabel:string,
    backButtonLabel:string,
    backButtonHref:string,
    showSocial?:boolean

}

export default function Cardwrapper({children,headerLabel,backButtonHref,showSocial,backButtonLabel}:cardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md ">
        <CardHeader>
         <Header label={headerLabel}/>
         <CardContent>

      {children}
         </CardContent>
        </CardHeader>

        { showSocial && <CardFooter>
            <Social/>
            </CardFooter>}

            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref}></BackButton>
            </CardFooter>
    </Card>
  )
}

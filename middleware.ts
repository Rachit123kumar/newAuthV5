import {auth} from "./auth"

export default auth((req)=>{
    const isLoggedin=!!req.auth
    console.log("ROute",req.nextUrl.pathname)
    console.log("ROute",isLoggedin)
})

export const config={
   matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
      ]
}
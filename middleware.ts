import authConfig from "./auth.config"
import NextAuth from "next-auth"

const {auth}=NextAuth(authConfig)
import {DEFAULT_LOGIN_REDIRECT,apiAuthPrefix,authRoutes, publicRoutes} from "./route"



export default auth((req)=>{
    const isLoggedin=!!req.auth
    console.log("ROute",req.nextUrl.pathname)
    console.log("ROute",isLoggedin)
    const {nextUrl}=req;
 


    const isApiAuthRoute=nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute=publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute=authRoutes.includes(nextUrl.pathname)

    if(isApiAuthRoute){

return null
    }

    if(isAuthRoute){
      if(isLoggedin){
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,nextUrl))
      }
      return null;
    }
    


    if(!isLoggedin && !isPublicRoute){
      return Response.redirect(new URL("/auth/login",nextUrl));
    }


    return null;

})

export const config={
   matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
      ]
}
"use server"
import { LoginSchema } from "@/schemas"
import * as z from "zod"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/route"
import { AuthError } from "next-auth"

export async  function login(values:z.infer< typeof LoginSchema>) {


    const validated=LoginSchema.safeParse(values)
  if(!validated.success){
    return {error:"error Fields"}
  }

  // return {error :"Invalid credentials"}

    const {email,password}=validated.data;

    try{
   await signIn("credentials",{
    email,password,
    redirectTo:DEFAULT_LOGIN_REDIRECT
   })
    }catch(error){
      if(error instanceof AuthError){
         switch (error.type){
          case "CredentialsSignin":
            return {
              error :"Invalid Credentials"
            }

           default :
           return {error :"something went wrong "} 
         }

      }

      throw error;

    }






}

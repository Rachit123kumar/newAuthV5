"use server"
import { LoginSchema } from "@/schemas"
import * as z from "zod"

export async  function login(values:z.infer< typeof LoginSchema>) {


    const validated=LoginSchema.safeParse(values)
  if(!validated.success){
    return {error:"error Fields"}
  }

  return {success:"email sent"}
}

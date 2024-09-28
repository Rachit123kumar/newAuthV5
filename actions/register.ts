"use server"
import { RegisterSchema } from "@/schemas"
import * as z from "zod"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"
export async  function register(values:z.infer< typeof RegisterSchema>) {


    const validated=RegisterSchema.safeParse(values)
  if(!validated.success){
    return {error:"error Fields"}
  }

  const {name,email,password}=validated.data
  const hashedPassword=await bcrypt.hash(password,10)
  const existingUser=await getUserByEmail(email);

  if(existingUser){
    return {error:"email alredy in use"}
  }

  await db.user.create({
    data:{
      name,
      email,
      password:hashedPassword
    }
  })

  return {success:"User created"}
}

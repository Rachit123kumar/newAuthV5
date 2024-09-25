import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import { db } from "./lib/db"
// import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"
import authConfig from "@/auth.config"
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter:PrismaAdapter(db),
  session:{strategy:'jwt'},
  ...authConfig
 
})
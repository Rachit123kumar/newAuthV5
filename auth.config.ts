import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs" 

export default { providers: [
    Credentials({
       authorize: async (credentials)=>{
            const validatedFiels=LoginSchema.safeParse(credentials);
            if(validatedFiels.success){
                const {email,password}=validatedFiels.data;
                const user=await getUserByEmail(email);
                if(!user || !user.password){
                    return null
                }

                const passwordMatched=await bcrypt.compare(password,user.password);
                if(passwordMatched)return user;
                 return null

            }
        }
    })
] } satisfies NextAuthConfig
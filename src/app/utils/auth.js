
import Credentials from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { signIn } from "next-auth/react";

import { getUserByEmail } from "@/data/users";
export const authOptions = {
  debug: true,
  session: {
    strategy: "jwt",
  },
  providers: [
   
  ],
  
};

export async function doCredentialsLogin(formData){
  try{
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    })
    return response;
   } catch(error) {
    console.error("Error during sign-in:", error);
    throw new Error("Sign-in failed");  
  }
  }


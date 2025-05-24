import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/data/users";
import bcrypt from "bcrypt";

export const authOptions = {
  session: {
  strategy: "jwt",
  maxAge: 24 * 60 * 60, // 1 day (adjust as needed)
},
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email);
        if (!user) return null;

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          name: user.name || "Admin",
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // On initial sign-in, add version
      if (user) {
        token.version = process.env.SESSION_TOKEN_VERSION;
        token.user = user;
      } else {
        // On subsequent calls, check version
        if (token.version !== process.env.SESSION_TOKEN_VERSION) {
          // Version mismatch - invalidate token by returning empty object
          return {};
        }
      }
      return token;
    },
    async session({ session, token }) {
      // If token is empty (invalidated), session.user will be null
      if (!token.user || token.version !== process.env.SESSION_TOKEN_VERSION) {
        session.user = null;
      } else {
        session.user = token.user;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
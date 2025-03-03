import { prismaCLient } from "@/app/lib/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn(params) {
      console.log(params);
      if (!params.user.email) {
        return false;
      }
      try {
        await prismaCLient.user.create({
          data: {
            email: params.user.email,
            provider: "Google",
          },
        });
      } catch (e) {}
      return true;
    },
  },
});

export { handler as GET, handler as POST };

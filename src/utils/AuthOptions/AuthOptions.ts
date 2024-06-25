import GoogleProvider from "next-auth/providers/google";
import { Account, NextAuthOptions, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60 // 1 day
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 14 * 24 * 60 * 60 // 1 day
  },
  callbacks: {
    jwt: async ({
      token,
      user,
      account
    }: {
      token: JWT;
      user: User | AdapterUser;
      account: Account | null;
    }) => {
      if (account && user) {
        token.accessToken = account.access_token; // Add the access token to the JWT
        token.user = user; // Add user information to the JWT
      }
      return token;
    },
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      session.user = token.user as User; // Embed user info into the session object
      if (token?.accessToken) {
        (session as any).accessToken = token.accessToken; // Add the access token to the session
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth" // Custom sign-in page
  }
};

import GoogleProvider from "next-auth/providers/google";
import { Account, NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import { dbConnect } from "@/lib";
import Users from "@/models/users/UserModel";

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
    session: async ({ session, token }) => {
      session.user = token.user as User; // Embed user info into the session object
      if (token?.accessToken) {
        (session as any).accessToken = token.accessToken; // Add the access token to the session
      }
      return session;
    },
    signIn: async ({ account, profile }) => {
      await dbConnect(); // Забезпечуємо з'єднання з базою даних

      if (account && account.provider === "google" && profile) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const { email, name, picture } = profile;

        const existingUser = await Users.findOne({ email });

        if (existingUser) {
          return true;
        } else {
          const newUser = await Users.create({
            email,
            name,
            avatar: picture,
            googleId: profile.sub // Google ID з профілю
          });

          return !!newUser; // Повертаємо true, якщо користувач був створений
        }
      }
      return true;
    }
  },
  pages: {
    signIn: "/auth" // Custom sign-in page
  }
};

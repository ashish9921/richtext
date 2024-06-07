import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("serer error");
        }
        if (!email || !password)
          throw new Error("email and password is empty");

        const user = await User.findOne({ email });
        if (!user) throw new Error("user not found");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("wrong credential");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import { getServerSession } from "next-auth";
import SignInPage from "@/templates/SignIn/SignInPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const SignIn = async () => {
  // ========= Session ==========
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignInPage />;
};

export default SignIn;

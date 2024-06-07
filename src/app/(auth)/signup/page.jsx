import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import SignUpPage from "@/templates/SignUp/SignUpPage";
import { redirect } from "next/navigation";

const SignUp = async () => {
  // ============= Session =============
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  // ============= Rendering =============
  return <SignUpPage />;
};

export default SignUp;

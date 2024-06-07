import SideBar from "@/layout/Dashboard/SideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashBoardLayout = async ({ children }) => {
  // =========== Session ===========
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <SideBar>{children}</SideBar>;
};

export default DashBoardLayout;

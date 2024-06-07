import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import DashboardPage from "@/templates/Dashboard/DashboardPage";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

const Dashboard = async () => {
  // ============ Session =============
  await connectDB();
  const session = await getServerSession(authOptions);
  const email = session?.user.email;
  const user = await User.findOne({ email });
  console.log(user);
  // ============ Rendering =============
  return <DashboardPage createdAt={user.createdAt} />;
};

export default Dashboard;

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyProfilePage from "@/templates/Profile/MyProfilePage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

const MyProfile = async () => {
  await connectDB();
  // ============ Session ===========
  const session = await getServerSession(authOptions);

  // ============ FindUser ===========
  const email = session.user.email;
  const [user] = await User.aggregate([
    { $match: { email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  // ============ Rendering ===========
  return <MyProfilePage profiles={user.profiles} />;
};

export default MyProfile;

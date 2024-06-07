import Profile from "@/models/Profile";
import ProfilePage from "@/templates/Profile/ProfilePage";
import connectDB from "@/utils/connectDB";

const Edit = async ({ params }) => {
  const { profileId } = params;
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی پیش آمده است .</h3>;
  return <ProfilePage data={JSON.parse(JSON.stringify(profile))} />;
};

export default Edit;

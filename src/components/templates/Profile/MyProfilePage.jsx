import { v4 as uuidv4 } from "uuid";

import DashboardCard from "@/modules/DashboardCard/DashboardCard";
import styles from "./MyProfile.module.css";

const MyProfilePage = ({ profiles }) => {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است .</p>
      )}
      {profiles.map((item) => (
        <DashboardCard key={uuidv4} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
};

export default MyProfilePage;

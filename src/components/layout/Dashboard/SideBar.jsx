import { CgProfile } from "react-icons/cg";
import styles from "./SideBar.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import Link from "next/link";
import LogOut from "@/modules/LogOut/LogOut";

const SideBar = async ({ children }) => {
  // ========== Session ===========
  const session = await getServerSession(authOptions);
  const email = session?.user.email;
  // ========== Rendering ===========
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>{email}</p>
        <span></span>

        <LogOut />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default SideBar;

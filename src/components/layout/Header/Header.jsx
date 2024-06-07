"use client";

import { useSession } from "next-auth/react";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  // ========== Session ============
  const { data } = useSession();

  // ========== Rendering ============
  return (
    <div className={styles.header}>
      <div>
        <ul>


        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />

          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;

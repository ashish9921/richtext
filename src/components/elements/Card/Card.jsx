import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { icons } from "@/utils/helper";
import { sp } from "@/utils/replaceNumber";

import styles from "./Card.module.css";
import Link from "next/link";

const Card = ({ title, category, location, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} </span>
      <Link href={"/"}>

        <BiLeftArrowAlt />
      </Link>
    </div>
  );
};

export default Card;

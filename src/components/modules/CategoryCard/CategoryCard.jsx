import Link from "next/link";
import styles from "./CategoryCard.module.css";
import Image from "next/image";

const CategoryCard = ({ name, title }) => {
  return (
    <div className={styles.card}>
      <Link href={"/"}>
        <Image
          src={`/images/${name}.png`}
          alt="type of home"
          width={240}
          height={144}
          priority={true}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;

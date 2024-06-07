import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

import styles from "./TextList.module.css";

const TextList = ({ title, profileData, setProfileData, type }) => {
  // ============ Function =============
  const changeHandler = (event, index) => {
    const { value } = event.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };
  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  // ============ Rendering =============
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileData[type].map((item, index) => (
        <div key={index} className={styles.card}>
          <input
            type="text"
            value={item}
            onChange={(event) => changeHandler(event, index)}
          />
          <button onClick={() => deleteHandler(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
};

export default TextList;

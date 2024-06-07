import { p2e } from "@/utils/replaceNumber";
import styles from "./TextInput.module.css";

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) => {
  // ============= Function ============
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  // ============= Rendering ============
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};

export default TextInput;

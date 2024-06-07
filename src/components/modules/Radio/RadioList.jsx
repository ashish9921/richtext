import styles from "./RadioList.module.css";

const RadioList = ({ profileData, setProfileData }) => {
  const { category } = profileData;
  // =========== Function ===========
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // =========== Rendering ===========
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="category"
            id="villa"
            value="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="category"
            id="apartment"
            value="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            id="store"
            value="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            id="office"
            value="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default RadioList;

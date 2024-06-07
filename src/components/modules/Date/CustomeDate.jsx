import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "./CustomeDate.module.css";

const CustomeDate = ({ profileData, setProfileData }) => {
  // ============ Function ==============
  const changeHandler = (event) => {
    const date = new Date(event);
    setProfileData({ ...profileData, constructionDate: date });
  };

  // ============ Rendering ==============
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker
        calender={persian}
        locale={persian_fa}
        onChange={changeHandler}
        value={profileData.constructionDate}
        calendarPosition="bottom-right"
      />
    </div>
  );
};

export default CustomeDate;

"use client";

import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

import styles from "./ProfilePage.module.css";
import TextInput from "@/modules/Inputs/textInput";
import RadioList from "@/modules/Radio/RadioList";
import TextList from "@/modules/TextList/TextList";
import CustomeDate from "@/modules/Date/CustomeDate";
import Loader from "@/elements/Loader/Loader";

const ProfilePage = ({ data }) => {
  // ========== Router =========
  const router = useRouter();

  // ========== State =========
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });

  // ========== Effect =========
  useEffect(() => {
    if (data) setProfileData(data);
  }, [data]);

  // ========== Function =========
  const submitHandler = async () => {
    setLoading(true);
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const response = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  // ========== Rendering =========
  return (
    <div className={styles.container}>
      <Toaster />
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        type="amenities"
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextList
        type="rules"
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <CustomeDate profileData={profileData} setProfileData={setProfileData} />
      {loading ? (
        <Loader />
      ) : data ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
};

export default ProfilePage;

"use client";

import { AiOutlineDelete } from "react-icons/ai";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

import styles from "./DashboardCard.module.css";
import Card from "@/elements/Card/Card";
import Loader from "@/elements/Loader/Loader";

const DashboardCard = ({ data }) => {
  // =========== Router ==========
  const router = useRouter();

  // =========== State ==========
  const [deleteLoading, setDeleteLoading] = useState(false);

  // =========== Function ==========
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    setDeleteLoading(true);
    const response = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const deleteData = await response.json();
    setDeleteLoading(false);
    if (deleteData.error) {
      toast.error(deleteData.error);
    } else {
      toast.success(deleteData.message);
      router.refresh();
    }
  };

  // =========== Rendering ==========
  return (
    <div className={styles.container}>
      <Toaster />
      <Card {...data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>

        {deleteLoading ? (
          <Loader />
        ) : (
          <button onClick={deleteHandler}>
            حذف آگهی
            <AiOutlineDelete />
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;

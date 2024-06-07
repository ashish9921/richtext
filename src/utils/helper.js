import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";

export const icons = {
  villa: <RiHome3Line />,
  apartment: <MdApartment />,
  store: <BiStore />,
  office: <GiOfficeChair />,
};

export const services = ["خرید", "فروش", "رهن", "اجاره"];

export const cities = [
  "تهران",
  "سنندج",
  "کرمانشاه",
  "اهواز",
  "مشهد",
  "اصفحان",
  "شیراز",
  "خرم آباد",
];

export const categories = [
  { id: 1, title: "خانه ویلایی", name: "villa" },
  { id: 2, title: "آپارتمان", name: "apartment" },
  { id: 3, title: "مغازه", name: "store" },
  { id: 4, title: "دفتر", name: "office" },
];

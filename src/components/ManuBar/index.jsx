import style from "./index.module.css";
import { images } from "../../constants";
import { NavLink } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { RiTimer2Line } from "react-icons/ri";
import { BsCalendar4 } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi";
import Avater from "../ui/Avater";

const ManuBar = () => {
  return (
    <div className={style.manue}>
      <div className={style.logo}>
        <img src={images.logo} alt="logo" />
      </div>
      <div className={style.manu_icon}>
        <li>
          <NavLink
            to="activate"
            className={({ isActive }) => (isActive ? style.active : undefined)}>
            <RiTimer2Line className={style.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="calander"
            className={({ isActive }) => (isActive ? style.active : undefined)}>
            <BsCalendar4 className={style.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tasks"
            className={({ isActive }) => (isActive ? style.active : undefined)}>
            <FaTasks className={style.icon} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="document"
            className={({ isActive }) => (isActive ? style.active : undefined)}>
            <HiOutlineDocument className={style.icon} />
          </NavLink>
        </li>
      </div>
      <Avater
        src="https://freepngimg.com/thumb/man/22654-6-man.png"
        size="lg"
        notifi={10}
      />
    </div>
  );
};

export default ManuBar;

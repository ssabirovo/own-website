import React from "react";
import Photo from "../../assets/images/portrait.png";
import cls from "./nav.module.scss";

interface NavProps {}

const Nav: React.FC<NavProps> = () => (
  <div className={cls.nav}>
    <img src="https://pngimg.com/uploads/face/face_PNG5645.png" alt="" />
  </div>
);

export default Nav;

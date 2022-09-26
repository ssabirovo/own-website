import React from "react";
import Card from "../../assets/icons/card";
import Home from "../../assets/icons/home";
import Portfolio from "../../assets/icons/portfolio";
import Rgb from "../../assets/icons/rgb";

import cls from "./sidebar.module.scss";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => (
  <div className={cls.wrapper}>
    <a href="#1">{Home}</a>
    <a href="#1">{Portfolio}</a>
    <a href="#1">{Card}</a>
    <div>{Rgb}</div>
    
  </div>
);

export default AboutMe;

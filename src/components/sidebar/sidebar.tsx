import React from "react";
import Card from "../../assets/icons/card";

import cls from "./about-me.module.scss";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => (
  <div className={cls.wrapper}>
    <a href="#1">{Card}</a>
    <a href="#1">{Card}</a>
    <a href="#1">{Card}</a>
    <a href="#1">{Card}</a>
    <a href="#1">{Card}</a>
  </div>
);

export default AboutMe;

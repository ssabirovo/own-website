import React from "react";

import cls from "./about-me.module.scss";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => (
  <div className={cls.wrapper}>Hello world</div>
);

export default AboutMe;

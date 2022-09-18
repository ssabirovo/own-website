import React from "react";

import cls from "./about-me.module.scss";
import Photo from "../../assets/images/img.png";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => (
  <div className={cls.wrapper}>
    <div className={cls["info-wrapper"]}>
      <div className={cls.img}>
        <img className={cls.photo} src={Photo} alt="" />
      </div>

      <div className={cls["info"]}>
        <h2 className={cls.title}>Sobirov Muhiddin</h2>
        <p className={cls.paragraph}>
          i'm junior frontend developer. i work as a trainee for a two month for
          my mentor’s company. Whether you’re trying to find disciplined,
          hard-working and sociable worker, I could be one of the right cadre.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;

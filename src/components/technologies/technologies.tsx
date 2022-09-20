import React from "react";

import cls from "./technologies.module.scss";
import icon from "../../assets/icons/html.png";

interface TechnologiesItem {}



const Technologies: React.FC<TechnologiesItem> = () => (
  <div className={cls.wrapper}>
    <div className={cls.technologies}>
      <div className={cls.title}>Technologies</div>
      <div className={cls["technologies-box"]}>
        <div className={cls.technology}>
          <img className={cls.img} src={icon} alt="" />
          <p className={cls.subtitle}>Html</p>
        </div>

        <div className={cls.technology}>
          <img className={cls.img} src={icon} alt="" />
          <p className={cls.subtitle}>Html</p>
        </div>

        <div className={cls.technology}>
          <img className={cls.img} src={icon} alt="" />
          <p className={cls.subtitle}>Html</p>
        </div>

        <div className={cls.technology}>
          <img className={cls.img} src={icon} alt="" />
          <p className={cls.subtitle}>Html</p>
        </div>

        <div className={cls.technology}>
          <img className={cls.img} src={icon} alt="" />
          <p className={cls.subtitle}>Html</p>
        </div>

        <div className={cls.technology}>
          <img className={cls.img} src={icon} alt="" />
          <p className={cls.subtitle}>Html</p>
        </div>

        <div className={cls.technology}>
          <img className={cls.img} src={icon} alt="" />
          <p className={cls.subtitle}>Html</p>
        </div>
        <div className={cls.technology}>
          <img className={cls.img} src={icon} alt="" />
          <p className={cls.subtitle}>Html</p>
        </div>
      </div>
    </div>
  </div>
);

export default Technologies;

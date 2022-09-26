/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Github from "../../assets/icons/github";
import Instagram from "../../assets/icons/instagram";
import Linkedin from "../../assets/icons/linkedin";
import Telegram from "../../assets/icons/telegram";

import cls from "./links.module.scss";

interface SocialMediaProps {}

const Links: React.FC<SocialMediaProps> = () => (
  <div className={cls.wrapper}>
    <a href="https://www.instagram.com/so1ov/">{Instagram}</a>
    <a href="https://www.instagram.com/so1ov/">{Telegram}</a>
    <a href="https://www.instagram.com/so1ov/">{Linkedin}</a>
    <a href="https://www.instagram.com/so1ov/">{Github}</a>
  </div>
);

export default Links;

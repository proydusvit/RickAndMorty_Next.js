import { FC } from "react";
import style from "./Footer.module.scss"
const Footer: FC = () => {
  return (
    <footer className={style.footer}>
    <p className={style.text}>   Мade by <a href="https://github.com/proydusvit">proydusvit</a></p>  
    </footer>
  )
}

export default Footer;
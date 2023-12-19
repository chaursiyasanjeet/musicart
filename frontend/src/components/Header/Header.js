import style from "./Header.module.css";
import phoneIcon from "../../assets/phoneIcon.svg";
import musicIcon from "../../assets/musicIcon.svg";
import { useState } from "react";
const Header = () => {
  const [login, setLogin] = useState(true);
  return (
    <header className={style.desktopHeader}>
      <div className={style.leftBox}>
        <img src={phoneIcon} alt="phoneIcon" />
        <span>912121131313</span>
      </div>
      <div className={style.middleBox}>
        <span>Get 50% off on selected items | Shop Now</span>
      </div>
      <div className={style.rightBox}>
        {login ? (
          <button
            onClick={() => {
              setLogin(false);
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <a href="#login">Login</a> | <a href="#signup">Signup</a>
          </>
        )}
      </div>
      <div className={style.mobileHeader}>
        <img src={musicIcon} alt="musicIcon" />
        <span>Musicart</span>
      </div>
    </header>
  );
};

export default Header;

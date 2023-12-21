import HomeIcon from "../../assets/homeIcon.svg";
import LogoutIcon from "../../assets/logout.svg";
import LoginIcon from "../../assets/loginIcon.svg";
import CartIcon from "../../assets/cartIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./MobileNavFooter.module.css";

const MobileNavFooter = () => {
  const redirect = useNavigate();
  const [login, setLogin] = useState(true);
  const [selected, setSelected] = useState("home");
  return (
    <div className={style.footerNav}>
      <div onClick={() => setSelected("home")}>
        {selected === "home" ? <div></div> : ""}
        <img src={HomeIcon} alt="homeicon" />
        <span>Home</span>
      </div>
      <div onClick={() => setSelected("cart")}>
        {selected === "cart" ? <div></div> : ""}
        <img src={CartIcon} alt="carticon" />
        <span>Cart</span>
      </div>
      <div
        onClick={() => {
          if (!login) {
            redirect("/signin");
          }
        }}
      >
        <img
          src={login ? LogoutIcon : LoginIcon}
          alt="homeicon"
          onClick={(prev) => {
            setLogin(!prev);
          }}
        />
        <span>{login ? "Logout" : "Login"}</span>
      </div>
    </div>
  );
};

export default MobileNavFooter;

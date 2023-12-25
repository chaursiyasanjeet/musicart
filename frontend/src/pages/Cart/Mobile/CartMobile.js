import style from "./CartMobile.module.css";
import Header from "../../../components/Header/Header";
import MobileNavFooter from "../../../components/MobileNavFooter/MobileNavFooter";
import { useNavigate } from "react-router-dom";
import backIcon from "../../../assets/backIcon.svg";
import headphone from "../../../assets/headphone.png";

const CartMobile = () => {
  const redirect = useNavigate();
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.backButton}>
          <img
            src={backIcon}
            alt="backArrow"
            onClick={() => {
              redirect("/");
            }}
          />
        </div>
        <div className={style.allCartProduct}>
          <div>
            <img src={headphone} alt="headphoneimg" />
            <div className={style.productDetails}>
              <span>Sony WH-CH720N</span>
              <span>₹3500</span>
              <span>Clour : Black</span>
              <span>In Stock</span>
              <span>
                Convenience Fee <span>₹45</span>
              </span>
            </div>
          </div>
          <div>
            <img src={headphone} alt="headphoneimg" />
            <div className={style.productDetails}>
              <span>Sony WH-CH720N</span>
              <span>₹3500</span>
              <span>Clour : Black</span>
              <span>In Stock</span>
              <span>
                Convenience Fee <span>₹45</span>
              </span>
            </div>
          </div>
          <div>
            <img src={headphone} alt="headphoneimg" />
            <div className={style.productDetails}>
              <span>Sony WH-CH720N</span>
              <span>₹3500</span>
              <span>Clour : Black</span>
              <span>In Stock</span>
              <span>
                Convenience Fee <span>₹45</span>
              </span>
            </div>
          </div>
          <summary>
            <span>Total:</span>
            <span>₹3545</span>
          </summary>
        </div>
        <div className={style.totalAmountAndOrderBtn}>
          <div>
            <span>Total Amount</span>
            <span>₹3500</span>
          </div>
          <button>PLACE ORDER</button>
        </div>
      </div>
      <MobileNavFooter component={"cart"} />
    </>
  );
};

export default CartMobile;

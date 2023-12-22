import style from "./ProductDetailsMobile.module.css";
import MobileNavFooter from "../../../components/MobileNavFooter/MobileNavFooter";
import MobileSearchBar from "../../../components/MobileSearchBar/MobileSearchBar";
import Headphone from "../../../assets/headphone.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import star from "../../../assets/star.svg";
import { useNavigate } from "react-router-dom";
import backIcon from "../../../assets/backIcon.svg";
const ProductDetailsMobile = () => {
  const redirect = useNavigate();
  return (
    <>
      <MobileSearchBar />
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
        <button className={style.buyNowButton}>Buy Now</button>
        <div className={style.productImg}>
          <img src={Headphone} alt="headphoneImg" />
          <img src={img1} alt="headphoneImg" />
          <img src={img2} alt="headphoneImg" />
          <img src={img3} alt="headphoneImg" />
        </div>
        <div className={style.porductDetails}>
          <h1 className={style.productTitle}>Sony WH-CH720N</h1>
          <div className={style.ratingBox}>
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <span>(50 Customer reviews)</span>
          </div>
          <div className={style.productDescriptionHeader}>
            Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation
            Headphones with Mic, up to 50 Hours Playtime, Multi-Point
            Connection, App Support, AUX & Voice Assistant Support for Mobile
            Phones (Black)
          </div>
          <span className={style.price}>Price-₹3,500</span>
          <span className={style.colorType}>Black | Over-ear headphone</span>
          <div className={style.aboutProduct}>
            <span>About this item</span>
            <ul>
              <li>Sony’s lightest Wireless Noise-cancelling headband ever</li>
              <li>
                Up to 50-hour battery life with quick charging (3 min charge for
                up to 1 hour of playback)
              </li>
              <li>
                Multi-Point Connection helps to pair with two Bluetooth devices
                at the same time
              </li>

              <li>
                Take noise cancelling to the next level with Sony’s Integrated
                Processor V1,so you can fully immerse yourself in the music
              </li>
              <li>Super comfortable and lightweight design ( 192 Grams )</li>

              <li>High sound quality and well-balanced sound tuning</li>
            </ul>
          </div>
          <div className={style.availableAndBrand}>
            <div>
              <span>Available -</span>
              <span> In stock</span>
            </div>
            <div>
              <span>Brand -</span>
              <span> Sony</span>
            </div>
          </div>
          <div className={style.buttons}>
            <button>Add to cart</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <MobileNavFooter component={"home"} />
    </>
  );
};

export default ProductDetailsMobile;

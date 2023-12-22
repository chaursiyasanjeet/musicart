import style from "./ProductDetailsDesktop.module.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import musicIcon from "../../../assets/musicIcon.svg";
import cart from "../../../assets/cart.svg";
import headphone from "../../../assets/headphone.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import star from "../../../assets/star.svg";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const ProductDetailsDesktop = () => {
  const redirect = useNavigate();
  const imgRef = useRef(null);
  return (
    <>
      <section className={style.header}>
        <Header />
      </section>
      <div className={style.container}>
        <section className={style.firstBox}>
          <div className={style.titleNav}>
            <img src={musicIcon} alt="musicIcon" />
            <span>Musicart</span>
            <a href="/">Home/</a>
            <a href="/productid">Productname</a>
          </div>
          <div className={style.cart}>
            <img src={cart} alt="cartIcon" />
            <span>0</span>
          </div>
        </section>
        <button
          className={style.backToProductBtn}
          onClick={() => {
            redirect("/");
          }}
        >
          Back to products
        </button>
        <div className={style.productDescriptionHeader}>
          Sony WH-CH720N, Wireless Over-Ear Active Noise Cancellation Headphones
          with Mic, up to 50 Hours Playtime, Multi-Point Connection, App
          Support, AUX & Voice Assistant Support for Mobile Phones (Black)
        </div>
        <section className={style.fullProductDetails}>
          <div className={style.imageBox}>
            <img ref={imgRef} src={headphone} alt="headphoneicon" />
            <div className={style.smallImages}>
              <img
                src={img1}
                alt="headphoneicon"
                onClick={(e) => {
                  imgRef.current.src = e.target.src;
                }}
              />
              <img
                src={img2}
                alt="headphoneicon"
                onClick={(e) => {
                  imgRef.current.src = e.target.src;
                }}
              />
              <img
                src={img3}
                alt="headphoneicon"
                onClick={(e) => {
                  imgRef.current.src = e.target.src;
                }}
              />
            </div>
          </div>
          <div className={style.productTextDetail}>
            <h1 className={style.productTitle}>Sony WH-CH720N</h1>
            <div className={style.ratingBox}>
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <img src={star} alt="star icon" />
              <span>(50 Customer reviews)</span>
            </div>
            <span className={style.price}>Price-₹3,500</span>
            <span className={style.colorType}>Black | Over-ear headphone</span>
            <div className={style.aboutProduct}>
              <span>About this item</span>
              <ul>
                <li>Sony’s lightest Wireless Noise-cancelling headband ever</li>
                <li>
                  Up to 50-hour battery life with quick charging (3 min charge
                  for up to 1 hour of playback)
                </li>
                <li>
                  Multi-Point Connection helps to pair with two Bluetooth
                  devices at the same time
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
        </section>
      </div>
      <section className={style.footer}>
        <Footer />
      </section>
    </>
  );
};

export default ProductDetailsDesktop;

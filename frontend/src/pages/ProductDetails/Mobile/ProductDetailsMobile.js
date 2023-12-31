import style from "./ProductDetailsMobile.module.css";
import { ToastContainer, toast } from "react-toastify";
import MobileNavFooter from "../../../components/MobileNavFooter/MobileNavFooter";
import Header from "../../../components/Header/Header";
import Headphone from "../../../assets/headphone.png";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import starImage from "../../../assets/star.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { getProductDetails, addToCart } from "../../../apis/product";
import backIcon from "../../../assets/backIcon.svg";
const ProductDetailsMobile = () => {
  const redirect = useNavigate();
  const { id } = useParams();
  const imgRef = useRef(null);
  const [productDetails, setProductDetails] = useState(null);
  const [login, setLogin] = useState(
    localStorage.getItem("musicArtToken") ? true : false
  );

  useEffect(() => {
    getProductDetails(id).then((data) => {
      console.log(data.data);
      setProductDetails(data.data);
    });
  }, []);

  let stars = [];
  if (productDetails) {
    for (let i = 0; i < productDetails.rating; i++) {
      stars.push(i);
    }
  }

  const handleCart = async () => {
    const result = await addToCart(id, 1);
    if (result.status === "SUCCESS") {
      toast.success("Added To Cart");
    } else {
      toast.error(result.message);
    }
  };

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
        <button className={style.buyNowButton}>Buy Now</button>
        {productDetails === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <div className={style.productImg}>
              <img src={productDetails.images[0]} alt="headphoneImg" />
              <img src={productDetails.images[1]} alt="headphoneImg" />
              <img src={productDetails.images[2]} alt="headphoneImg" />
              <img src={productDetails.images[3]} alt="headphoneImg" />
            </div>
            <div className={style.porductDetails}>
              <h1 className={style.productTitle}>
                {productDetails.brand} {productDetails.model}
              </h1>
              <div className={style.ratingBox}>
                {stars.map((item) => {
                  return <img key={item} src={starImage} alt="star icon" />;
                })}
                <span>({productDetails.reviewCount} Customer reviews)</span>
              </div>
              <div className={style.productDescriptionHeader}>
                {productDetails.shortDescription}
              </div>
              <span className={style.price}>Price-₹{productDetails.price}</span>
              <span className={style.colorType}>
                {productDetails.color} | {productDetails.headphoneType}
              </span>
              <div className={style.aboutProduct}>
                <span>About this item</span>
                <ul>
                  {productDetails.about.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
              <div className={style.availableAndBrand}>
                <div>
                  <span>Available -</span>
                  <span> {productDetails.available}</span>
                </div>
                <div>
                  <span>Brand -</span>
                  <span> {productDetails.brand}</span>
                </div>
              </div>
            </div>
          </>
        )}
        {login ? (
          <div className={style.buttons}>
            <button onClick={handleCart}>Add to cart</button>
            <button>Buy Now</button>
          </div>
        ) : (
          <div className={style.buttons}>
            <button
              onClick={() => {
                redirect("/signin");
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                redirect("/signup");
              }}
            >
              Signup
            </button>
          </div>
        )}
      </div>
      <MobileNavFooter component={"home"} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default ProductDetailsMobile;

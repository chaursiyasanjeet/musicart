import style from "./Checkout.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MobileNavFooter from "../../components/MobileNavFooter/MobileNavFooter";
import musicIcon from "../../assets/musicIcon.svg";
import backIcon from "../../assets/backIcon.svg";
import { useNavigate } from "react-router-dom";
import headphone from "../../assets/headphone.png";

const Checkout = () => {
  const redirect = useNavigate();
  return (
    <>
      <Header />
      <div className={style.container}>
        <section className={style.desktoptitleNav}>
          <img src={musicIcon} alt="musicIcon" />
          <span>Musicart</span>
          <a href="/">Home/</a>
          <a href="/productid">checkout</a>
        </section>
        <button
          className={style.backToProductBtnDesktop}
          onClick={() => {
            redirect("/");
          }}
        >
          Back to products
        </button>
        <div className={style.backButtonMobile}>
          <img
            src={backIcon}
            alt="backArrow"
            onClick={() => {
              redirect("/");
            }}
          />
        </div>
        <h2 className={style.checkoutTitle}>Checkout</h2>
        <main className={style.checkoutContainer}>
          <div className={style.detailsContainer}>
            <div className={style.deliveryAddress}>
              <span>1. Delivery address</span>
              <span>
                Akash Patel <br />
                104 <br />
                kk hh nagar, Lucknow <br />
                Uttar Pradesh 226025
              </span>
            </div>
            <div className={style.paymentMethod}>
              <span>2. Payment method</span>
              <span>Pay on delivery(Cash/Card)</span>
            </div>
            <div className={style.reviewItems}>
              <span>3. Review items and delivery</span>
              <div>
                <div>
                  <img src={headphone} alt="headphoneIcon" />
                  <span>Sony WH-CH720N</span>
                  <span>Colour: Black</span>
                  <span>In stock</span>
                  <span>Estimated delivery:</span>
                  <span>Monday-FREE Standard Delivery</span>
                </div>
                <div>
                  <img src={headphone} alt="headphoneIcon" />
                  <span>Sony WH-CH720N</span>
                  <span>Colour: Black</span>
                  <span>In stock</span>
                  <span>Estimated delivery:</span>
                  <span>Monday-FREE Standard Delivery</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.orderPlaceSideSection}>
            <button>Place your order</button>
            <span>
              By placing your order, you agree to Musicart privacy notice and
              conditions of use.
            </span>
            <div>
              <h5>Order Summary</h5>
              <div>
                <span>Item:</span>
                <span>₹3500.00</span>
              </div>
              <div>
                <span>Delivery:</span>
                <span>₹45.00</span>
              </div>
              <div>
                <span>Order Total:</span>
                <span>₹3545.00</span>
              </div>
            </div>
          </div>
        </main>
        <div className={style.orderSummaryBottomSide}>
          <button>Place your order</button>
          <div>
            <span>Order Total : ₹3545.00</span>
            <span>
              By placing your order, you agree to Musicart privacy notice and
              conditions of use.
            </span>
          </div>
        </div>
      </div>
      <section className={style.desktopFooter}>
        <Footer />
      </section>
      <MobileNavFooter component={"cart"} />
    </>
  );
};

export default Checkout;

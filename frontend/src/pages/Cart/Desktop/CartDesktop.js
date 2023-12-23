import style from "./CartDesktop.module.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import musicIcon from "../../../assets/musicIcon.svg";
import cart from "../../../assets/cart.svg";
import bag from "../../../assets/bag.svg";
import headphone from "../../../assets/headphone.png";
import { useNavigate } from "react-router-dom";

const CartDesktop = () => {
  const redirect = useNavigate();
  return (
    <>
      <section className={style.header}>
        <Header />
      </section>
      <main className={style.container}>
        <section className={style.firstBox}>
          <div className={style.titleNav}>
            <img src={musicIcon} alt="musicIcon" />
            <span>Musicart</span>
            <a href="/">Home/</a>
            <a href="/productid">Productname</a>
          </div>
          <div className={style.cart}>
            <img src={cart} alt="cartIcon" />
            <span>View Cart</span>
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
        <section className={style.CartProductsBox}>
          <title className={style.cartTitle}>
            <img src={bag} alt="cartbagicon" />
            <span>My Cart</span>
          </title>
          <div className={style.cartContainer}>
            <div className={style.allProducts}>
              <div className={style.ProductDetails}>
                <div>
                  <img src={headphone} alt="productImage" />
                  <div>
                    <span>Sony WH-CH720N</span>
                    <span>Clour:Black</span>
                    <span>In stock</span>
                  </div>
                  <div>
                    <span>Price</span>
                    <span>₹3500</span>
                  </div>
                  <div className={style.quantity}>
                    <span>Quantity</span>
                    <select name="quantity" id="">
                      <option value="1" selected>
                        1
                      </option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="1">5</option>
                      <option value="1">6</option>
                      <option value="1">7</option>
                      <option value="1">8</option>
                      <option value="1">9</option>
                      <option value="1">10</option>
                    </select>
                  </div>
                  <div className={style.total}>
                    <span>Total</span>
                    <span>₹3500</span>
                  </div>
                </div>
              </div>
              <div className={style.ProductDetails}>
                <div>
                  <img src={headphone} alt="productImage" />
                  <div>
                    <span>Sonjjjjjjjmmy WH-CH720N</span>
                    <span>Clour:Black</span>
                    <span>In stock</span>
                  </div>
                  <div>
                    <span>Price</span>
                    <span>₹3500</span>
                  </div>
                  <div className={style.quantity}>
                    <span>Quantity</span>
                    <select name="quantity" id="">
                      <option value="1" selected>
                        1
                      </option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="1">5</option>
                      <option value="1">6</option>
                      <option value="1">7</option>
                      <option value="1">8</option>
                      <option value="1">9</option>
                      <option value="1">10</option>
                    </select>
                  </div>
                  <div className={style.total}>
                    <span>Total</span>
                    <span>₹3500</span>
                  </div>
                </div>
              </div>
              <summary className={style.summaryOfTotalItems}>
                <span>1 Item</span>
                <span>₹ 3500</span>
              </summary>
            </div>
            <div className={style.totalAmount}>
              <div>
                <h5>PRICE DETAILS</h5>
                <div className={style.totalMRP}>
                  <span>Total MRP</span>
                  <span>₹3500</span>
                </div>
                <div className={style.discounts}>
                  <span>Discounts on MRP</span>
                  <span>₹0</span>
                </div>
                <div className={style.conveinceFee}>
                  <span>Convenience Fee</span>
                  <span>₹45</span>
                </div>
              </div>
              <div className={style.totalAmoutAndPlaceOrder}>
                <div>
                  <span>Total Amount</span>
                  <span>₹3545</span>
                </div>
                <button
                  onClick={() => {
                    redirect("/ordersuccess");
                  }}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className={style.footer}>
        <Footer />
      </section>
    </>
  );
};

export default CartDesktop;

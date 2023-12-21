import style from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import musicIcon from "../../assets/musicIcon.svg";
import cart from "../../assets/cart.svg";
import saleIcon from "../../assets/saleIcon.png";
import searchIcon from "../../assets/search.svg";
import GridIcon from "../../assets/gridIcon.svg";
import FilledGrid from "../../assets/filledGrid.svg";
import ListIcon from "../../assets/list.svg";
import FilledList from "../../assets/filledList.svg";
import headphone from "../../assets/headphone.png";
import imgCart from "../../assets/imgCart.svg";
import { useState } from "react";
import MobileHome from "./MobileHome";

const Home = () => {
  const [view, setView] = useState("list");
  return (
    <>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.container}>
        <section className={style.firstBox}>
          <div className={style.titleNav}>
            <img src={musicIcon} alt="musicIcon" />
            <span>Musicart</span>
            <a href="/">Home</a>
          </div>
          <div className={style.cart}>
            <img src={cart} alt="cartIcon" />
            <span>View Cart</span>
          </div>
        </section>
        <section className={style.saleBanner}>
          <div>
            <h1>
              Grab upto 50% off on<br></br> Selected headphones
            </h1>
            <button>Buy Now</button>
          </div>
          <img src={saleIcon} alt="sale Icon" />
        </section>
        <section className={style.searchBox}>
          <img src={searchIcon} alt="searchIcon" />
          <input type="text" name="search" placeholder="Search Product" />
        </section>

        <section className={style.filterBox}>
          <div className={style.listStyleBox}>
            <img
              src={view === "grid" ? FilledGrid : GridIcon}
              alt="gridViewIcon"
              onClick={() => {
                setView("grid");
              }}
            />
            <img
              src={view === "list" ? FilledList : ListIcon}
              alt="ListViewIcon"
              onClick={() => {
                setView("list");
              }}
            />
          </div>

          <div className={style.filterSelectBox}>
            <select name="headphoneType">
              <option value="" disabled selected hidden>
                Headphone type
              </option>
              <option value="featured">Featured</option>
              <option value="inEarHeadphone">In-ear headphone</option>
              <option value="onEarHeadphobe">On-ear headphobe</option>

              <option value="overEarHeadphone">Over-ear headphone</option>
              <img src="../../assets/dropDown.svg" alt="" />
            </select>

            <select name="company">
              <option value="" disabled selected hidden>
                Company
              </option>
              <option value="featured">Featured</option>
              <option value="jbl">JBL</option>
              <option value="sony">Sony</option>
              <option value="boat">Boat</option>
              <option value="zebronics">zebronics</option>
              <option value="marshall">Marshall</option>
              <option value="ptron">Ptron</option>
            </select>
            <select name="colour">
              <option value="" disabled selected hidden>
                Colour
              </option>
              <option value="featured">Featured</option>
              <option value="blue">Blue</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="brown">Brown</option>
            </select>
            <select name="price">
              <option value="" disabled selected hidden>
                Price
              </option>
              <option value="fetured">Featured</option>
              <option value="0-1000">₹0-₹1000</option>
              <option value="1000-2000">₹1,000-₹10,000</option>
              <option value="10000-20000">₹10000-₹20000</option>
            </select>
          </div>
          <div className={style.sortBox}>
            <span>Sort by:</span>
            <select name="sort" id="">
              <option value="featured" selected>
                Featured
              </option>
              <option value="PriceLowest">Price:Lowest</option>
              <option value="PriceHighest">Price:Highest</option>
              <option value="a-z">Name:(A-Z)</option>
              <option value="z-a">Name:(Z-A)</option>
            </select>
          </div>
        </section>
        {view === "grid" ? (
          <section className={style.productContainerGrid}>
            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>

            <div>
              <div className={style.productImg}>
                <img src={imgCart} alt="cartImg" />
                <img src={headphone} alt="headphoneIcon" />
              </div>
              <div className={style.productSpec}>
                <span className={style.productTitle}>boAt Rockerz 551ANC</span>
                <span className={style.productPrice}>Price-RS 3,000</span>
                <span className={style.productType}>
                  Blue | On-ear headphpne
                </span>
              </div>
            </div>
          </section>
        ) : (
          <section className={style.productContainerList}>
            <div className={style.singleProductBox}>
              <div className={style.imgDiv}>
                <img src={headphone} alt="headphoneIcon" />
                <img
                  src={imgCart}
                  alt="cart icon"
                  className={style.cartProductImg}
                />
              </div>
              <div className={style.productSpecLIst}>
                <span className={style.productListTitle}>
                  boAt Rockerz 551ANC
                </span>
                <span className={style.productListPrice}>Price - ₹ 3,000</span>
                <span className={style.colorType}>Blue | On-ear headphone</span>
                <span className={style.shortSpec}>
                  boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm
                  Drivers & ASAP Charge Bluetooth Headset (Stellar Black, On the
                  Ear)
                </span>
                <button>Details</button>
              </div>
            </div>
            <div className={style.singleProductBox}>
              <div className={style.imgDiv}>
                <img src={headphone} alt="headphoneIcon" />
                <img
                  src={imgCart}
                  alt="cart icon"
                  className={style.cartProductImg}
                />
              </div>
              <div className={style.productSpecLIst}>
                <span className={style.productListTitle}>
                  boAt Rockerz 551ANC
                </span>
                <span className={style.productListPrice}>Price - ₹ 3,000</span>
                <span className={style.colorType}>Blue | On-ear headphone</span>
                <span className={style.shortSpec}>
                  boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm
                  Drivers & ASAP Charge Bluetooth Headset (Stellar Black, On the
                  Ear)
                </span>
                <button>Details</button>
              </div>
            </div>
            <div className={style.singleProductBox}>
              <div className={style.imgDiv}>
                <img src={headphone} alt="headphoneIcon" />
                <img
                  src={imgCart}
                  alt="cart icon"
                  className={style.cartProductImg}
                />
              </div>
              <div className={style.productSpecLIst}>
                <span className={style.productListTitle}>
                  boAt Rockerz 551ANC
                </span>
                <span className={style.productListPrice}>Price - ₹ 3,000</span>
                <span className={style.colorType}>Blue | On-ear headphone</span>
                <span className={style.shortSpec}>
                  boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm
                  Drivers & ASAP Charge Bluetooth Headset (Stellar Black, On the
                  Ear)
                </span>
                <button>Details</button>
              </div>
            </div>
            <div className={style.singleProductBox}>
              <div className={style.imgDiv}>
                <img src={headphone} alt="headphoneIcon" />
                <img
                  src={imgCart}
                  alt="cart icon"
                  className={style.cartProductImg}
                />
              </div>
              <div className={style.productSpecLIst}>
                <span className={style.productListTitle}>
                  boAt Rockerz 551ANC
                </span>
                <span className={style.productListPrice}>Price - ₹ 3,000</span>
                <span className={style.colorType}>Blue | On-ear headphone</span>
                <span className={style.shortSpec}>
                  boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm
                  Drivers & ASAP Charge Bluetooth Headset (Stellar Black, On the
                  Ear)
                </span>
                <button>Details</button>
              </div>
            </div>
            <div className={style.singleProductBox}>
              <div className={style.imgDiv}>
                <img src={headphone} alt="headphoneIcon" />
                <img
                  src={imgCart}
                  alt="cart icon"
                  className={style.cartProductImg}
                />
              </div>
              <div className={style.productSpecLIst}>
                <span className={style.productListTitle}>
                  boAt Rockerz 551ANC
                </span>
                <span className={style.productListPrice}>Price - ₹ 3,000</span>
                <span className={style.colorType}>Blue | On-ear headphone</span>
                <span className={style.shortSpec}>
                  boAt Rockerz 551 ANC with Hybrid ANC, 100 HRS Playback, 40mm
                  Drivers & ASAP Charge Bluetooth Headset (Stellar Black, On the
                  Ear)
                </span>
                <button>Details</button>
              </div>
            </div>
          </section>
        )}
      </div>
      <section className={style.footer}>
        <Footer />
      </section>
      <MobileHome />
    </>
  );
};

export default Home;

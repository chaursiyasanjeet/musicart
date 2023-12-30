import style from "./HomeDesktop.module.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import musicIcon from "../../../assets/musicIcon.svg";
import cart from "../../../assets/cart.svg";
import saleIcon from "../../../assets/saleIcon.png";
import searchIcon from "../../../assets/search.svg";
import GridIcon from "../../../assets/gridIcon.svg";
import FilledGrid from "../../../assets/filledGrid.svg";
import ListIcon from "../../../assets/list.svg";
import FilledList from "../../../assets/filledList.svg";
import imgCart from "../../../assets/imgCart.svg";
import { useEffect, useState } from "react";
import { getProduct } from "../../../apis/product";

const Home = () => {
  const [view, setView] = useState("list");
  const [product, setProduct] = useState(null);

  const productFetch = async () => {
    const result = await getProduct();
    console.log(result.data);
    setProduct(result.data);
  };
  useEffect(() => {
    productFetch();
  }, []);
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
            {product === null ? (
              <h1 style={{ margin: " auto" }}>
                <b>Loading...</b>
              </h1>
            ) : (
              product.map((item, index) => {
                return (
                  <div>
                    <div className={style.productImg}>
                      <img src={imgCart} alt="cartImg" />
                      <img src={item.images[0]} alt="headphoneIcon" />
                    </div>
                    <div className={style.productSpec}>
                      <span className={style.productTitle}>
                        {item.brand} {item.model}
                      </span>
                      <span className={style.productPrice}>
                        Price-₹ {item.price}
                      </span>
                      <span className={style.productType}>
                        {item.color} | {item.headphoneType}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </section>
        ) : (
          <section className={style.productContainerList}>
            {product === null ? (
              <h1 style={{ margin: " auto" }}>
                <b>Loading...</b>
              </h1>
            ) : (
              product.map((item, index) => {
                return (
                  <div className={style.singleProductBox}>
                    <div className={style.imgDiv}>
                      <img src={item.images[0]} alt="headphoneIcon" />
                      <img
                        src={imgCart}
                        alt="cart icon"
                        className={style.cartProductImg}
                      />
                    </div>

                    <div className={style.productSpecLIst}>
                      <span className={style.productListTitle}>
                        {item.brand} {item.model}
                      </span>
                      <span className={style.productListPrice}>
                        Price - ₹ {item.price}
                      </span>
                      <span className={style.colorType}>
                        {item.color} | {item.headphoneType}
                      </span>
                      <span className={style.shortSpec}>
                        {item.shortDescription}
                      </span>
                      <button>Details</button>
                    </div>
                  </div>
                );
              })
            )}
          </section>
        )}
      </div>
      <section className={style.footer}>
        <Footer />
      </section>
    </>
  );
};

export default Home;

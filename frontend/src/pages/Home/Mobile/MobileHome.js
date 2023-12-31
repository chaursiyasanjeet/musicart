import MobileNavFooter from "../../../components/MobileNavFooter/MobileNavFooter";
import style from "./MobileHome.module.css";
import saleIcon from "../../../assets/mobileSale.png";
import MobileSearchBar from "../../../components/MobileSearchBar/MobileSearchBar";
import { getProduct } from "../../../apis/product";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MobileHome = () => {
  const redirect = useNavigate();
  const [product, setProduct] = useState(null);

  const productFetch = async () => {
    const result = await getProduct();
    setProduct(result.data);
  };
  useEffect(() => {
    productFetch();
  }, []);

  const productDetailPage = (id, brand, model) => {
    const productName = brand + model;
    redirect(`/${productName}/${id}`);
  };
  return (
    <>
      <MobileSearchBar />
      <div className={style.container}>
        <section className={style.saleBanner}>
          <div>
            <h1>
              Grab upto 50% off on<br></br> Selected headphones
            </h1>
            <button>Buy Now</button>
          </div>
          <img src={saleIcon} alt="sale Icon" />
        </section>
        <section className={style.filterBox}>
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
        </section>
        <section className={style.productContainer}>
          {product === null ? (
            <h1 style={{ margin: " auto" }}>
              <b>Loading...</b>
            </h1>
          ) : (
            product.map((item, index) => {
              return (
                <div
                  key={item._id}
                  onClick={() => {
                    productDetailPage(item._id, item.brand, item.model);
                  }}
                >
                  <div className={style.productImg}>
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
      </div>
      <MobileNavFooter component={"home"} />
    </>
  );
};

export default MobileHome;

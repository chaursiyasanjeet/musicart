import MobileNavFooter from "../../../components/MobileNavFooter/MobileNavFooter";
import style from "./MobileHome.module.css";
import saleIcon from "../../../assets/mobileSale.png";
import headphone from "../../../assets/headphone.png";
import MobileSearchBar from "../../../components/MobileSearchBar/MobileSearchBar";

const MobileHome = () => {
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
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
          <div>
            <div className={style.productImg}>
              <img src={headphone} alt="headphoneIcon" />
            </div>
            <div className={style.productSpec}>
              <span className={style.productTitle}>boAt Rockerz 551ANC</span>
              <span className={style.productPrice}>Price-RS 3,000</span>
              <span className={style.productType}>Blue | On-ear headphpne</span>
            </div>
          </div>
        </section>
      </div>
      <MobileNavFooter />
    </>
  );
};

export default MobileHome;

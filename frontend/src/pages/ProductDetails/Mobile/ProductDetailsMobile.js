import style from "./ProductDetailsMobile.module.css";
import MobileNavFooter from "../../../components/MobileNavFooter/MobileNavFooter";
import MobileSearchBar from "../../../components/MobileSearchBar/MobileSearchBar";

import backIcon from "../../../assets/backIcon.svg";
const ProductDetailsMobile = () => {
  return (
    <>
      <MobileSearchBar />
      <div className={style.container}>
        <div className={style.backButton}>
          <img src={backIcon} alt="backArrow" />
        </div>
      </div>

      <MobileNavFooter />
    </>
  );
};

export default ProductDetailsMobile;

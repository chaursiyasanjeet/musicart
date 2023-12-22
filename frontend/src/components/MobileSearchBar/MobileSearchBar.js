import style from "./MobileSearchBar.module.css";
import searchIcon from "../../assets/search.svg";

const MobileSearchBar = () => {
  return (
    <section className={style.searchBoxHeader}>
      <div>
        <img src={searchIcon} alt="searchIcon" />
        <input type="text" name="search" placeholder="Search Musicart" />
      </div>
    </section>
  );
};

export default MobileSearchBar;

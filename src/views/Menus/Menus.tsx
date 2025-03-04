import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StickyBox from "react-sticky-box";
import MenuList from "./MenuList";
// import Banner from "../Home/Banner";
import "./Menus.css";

const Menus = () => {
  return (
    <>
      <Header />
      {/* <Banner /> */}
      <StickyBox
        offsetTop={250}
        offsetBottom={20}
        style={{ zIndex: "99999", width: "3%", height: "0px" }}
      >
        <div className="facebook">
          <a
            href="https://www.facebook.com/profile.php?id=61559079655665"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={"assets/images/red-facebook.webp"}
              alt="img"
              style={{ width: "40px" }}
            />
          </a>
        </div>
        <div className="insta">
          <a
            href="https://www.instagram.com/house_of_paneer_restaurant/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={"assets/images/red-insta.webp"}
              alt="img"
              style={{ width: "40px", marginTop: "10px" }}
            />
          </a>
        </div>
        <div className="twitter">
          <a
            href="https://www.youtube.com/channel/UCG6ccHrSB6fSSJsQEtwqzjA"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={"assets/images/red-youtube.webp"}
              alt="img"
              style={{ width: "40px", marginTop: "10px" }}
            />
          </a>
        </div>
      </StickyBox>
      <MenuList />
      <Footer />
    </>
  );
};

export default Menus;

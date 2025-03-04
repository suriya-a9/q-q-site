import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../Home/Banner";
import OurStory from "./OurStory";
import Cullinary from "./Cullinary";
import Tradition from "./Tradition";
import Palette from "./Palette";
import Experience from "./Experience";
import Commitment from "./Commitment";
import WhyChoose from "./WhyChoose";
import StickyBox from "react-sticky-box";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <div style={{ background: "#141414" }}>
      <Header />
      <Banner />
      <StickyBox
        offsetTop={250}
        offsetBottom={20}
        style={{ zIndex: "99999", width: "3%" }}
      >
        <div className="facebook">
          <img
            src={"assets/images/red-facebook.webp"}
            alt="img"
            style={{ width: "40px" }}
          />
        </div>
        <div className="insta">
          <img
            src={"assets/images/red-insta.webp"}
            alt="img"
            style={{ width: "40px", marginTop: "10px" }}
          />
        </div>
        <div className="twitter">
          <img
            src={"assets/images/red-youtube.webp"}
            alt="img"
            style={{ width: "40px", marginTop: "10px" }}
          />
        </div>
      </StickyBox>
      <OurStory />
      <Tradition />
      <Cullinary />
      <Palette />
      <Commitment />
      <Experience />
      <OurTeam />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default About;

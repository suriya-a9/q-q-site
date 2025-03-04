import "./Vision.css";

const Vision = () => {
  document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var targetScrollPosition = 2700;

    var myElement = document.querySelector(".vision-img-1");

    if (myElement && scrollPosition >= targetScrollPosition) {
      myElement.classList.add("animate__zoomIn");
    }
  });

  return (
    <>
      <section className="vision-section">
        <div className="container">
          <div className="row" style={{ background: "#141414" }}>
            <div className="col-md-6">
              <img
                className="vision-img-1"
                src={
                  "assets/images/front-view-female-chef-with-mask-cooking-kitchen 1.webp"
                }
                alt="vision-img"
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="col-md-6">
              <div className="vision-class">
                <div className="vision-1">
                  <h1
                    className="vision-header"
                    style={{ fontFamily: "'Forum', serif" }}
                  >
                    Our Vision
                  </h1>
                  <p className="vision-para">
                    To redefine the dining experience in Madurai by offering an
                    exquisite fusion of flavours and culinary excellence. We
                    strive to create memorable moments for our guests through
                    exceptional food, warm hospitality, and a vibrant
                    atmosphere.
                  </p>
                </div>
              </div>
              <div className="vision-class-2">
                <h1
                  className="vision-header-2"
                  style={{ fontFamily: "'Forum', serif" }}
                >
                  Our Mission
                </h1>
                <p className="vision-para">
                  To delight our guests with authentic Indian cuisine,
                  innovative dishes, and unparalleled hospitality. We are
                  dedicated to upholding the highest standards of quality and
                  integrity in everything we do, from sourcing the finest
                  ingredients to providing exceptional service.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="spining-image">
          <img src={"assets/images/spoon-01 1.webp"} alt="img" />
          {/* <img src={"assets/images/food.png"} alt="img" /> */}
        </div>
        <div className="spining-image-1">
          <img src={"assets/images/circling image.webp"} alt="img" />
        </div>
        <div className="container" style={{ marginTop: "60px" }}>
          <div className="row">
            <h4
              className="strength-title"
              style={{ fontFamily: "'Forum', serif", textAlign: "center" }}
            >
              OUR STRENGTH
            </h4>
            <div className="col-md-6">
              <div className="strength-1">
                <ul>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    Artisanal Handcrafted Paneer
                  </li>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    Own Dairy Factory
                  </li>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    Premium Veg Cuisines
                  </li>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    Captivating Ambiance
                  </li>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    Complete Dining Destination
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="strength-2">
                <ul>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    Kid-Friendly Fun Zone
                  </li>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    100+ Paneer Dishes
                  </li>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    1st Time Spice Flavoured Raw Paneer
                  </li>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    Authentic Shakes, Ice creams, Pastries, Milk based sweets
                  </li>
                  <li>
                    <img
                      src={"assets/images/new-red-icon.webp"}
                      alt="img"
                      style={{ width: "35px", paddingRight: "10px" }}
                    />
                    Live Kitchen Experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;

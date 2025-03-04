import "./Cullinary.css";

const Cullinary = () => {
  return (
    <>
      <img
        src={"assets/images/About-us/red-chili-pepper-Photoroom 1.webp"}
        alt="img"
        className="pepperfry-image"
      />
      <section className="cullinary">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="cullinary-first-div">
                <img
                  className="cullinary-first-image"
                  src={"assets/images/About-us/Mask group.webp"}
                  alt="img"
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="cullinary-second-div">
                <h1
                  className="our-story-header"
                  style={{
                    fontFamily: "'Forum', serif",
                  }}
                >
                  Our Culinary Philosophy
                </h1>
                <h2 className="our-story-sub-heading">
                  "Flavour, Freshness, and Creativity"
                </h2>
                <p className="our-story-para">
                  Our culinary philosophy is simple: to delight our guests with
                  an irresistible combination of flavour, freshness, and
                  creativity. From traditional Indian classics to innovative
                  fusion dishes, desserts, sweets, ice creams, drinks and
                  shakes, our menu is thoughtfully curated to showcase the best
                  of both worlds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cullinary;

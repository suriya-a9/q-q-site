import "./Palette.css";

const Palette = () => {
  return (
    <>
      <section className="paletter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="palette-right-div">
                <h1
                  className="our-story-header"
                  style={{
                    fontFamily: "'Forum', serif",
                  }}
                >
                  A Global Palette
                </h1>
                <h2 className="our-story-sub-heading">
                  "Exploring Diverse Cuisines"
                </h2>
                <p className="our-story-para">
                  Step into our world and explore a diverse array of cuisines
                  from around the globe. From the vibrant spices of Indian
                  cuisine to the bold flavours of Chinese specialities and the
                  comforting classics of Continental fare, our menu offers
                  something for every palate.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="palette-left-div">
                <img
                  className="pallete-image"
                  src={"assets/images/About-us/Group 31.webp"}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
        src={"assets/images/About-us/red-chili-pepper-Photoroom 2.webp"}
        alt="img"
        style={{
          float: "left",
          width: "13%",
          marginTop: "-3%",
          marginLeft: "12%",
        }}
      />
      <img
        className="spoon-spice-splash"
        src={"assets/images/About-us/side img 1 (1).webp"}
        alt="img"
        style={{
          float: "right",
          position: "absolute",
          right: "-93px",
          width: "50%",
          marginTop: "-14%",
        }}
      />
    </>
  );
};

export default Palette;

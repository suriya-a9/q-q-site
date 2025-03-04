import "./OurStory.css";

const OurStory = () => {
  return (
    <>
      <img
        className="our-story-above-image"
        src={
          "assets/images/About-us/top-view-tasty-cooked-mushrooms-with-tomatoes-greens-dark-background-Photoroom 1.webp"
        }
        alt="img"
        style={{
          float: "right",
          width: "17%",
          position: "relative",
          left: "5%",
        }}
      />
      <section className="our-story-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 our-story-first-col">
              <div className="cour-story-image">
                <img
                  src={"assets/images/About-us/our-story-banner.webp"}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-6 our-story-second-col">
              <div className="our-story-text">
                <h1
                  className="our-story-header"
                  style={{
                    fontFamily: "'Forum', serif",
                  }}
                >
                  Our Story
                </h1>
                <h2 className="our-story-sub-heading">
                  "A Journey of Flavor and Tradition"
                </h2>
                <p className="our-story-para">
                  Our journey began with a shared love for paneer – a staple
                  ingredient in Indian cuisine celebrated for its versatility
                  and flavour. Inspired by the rich culinary heritage of India,
                  we set out to create a restaurant that pays homage to this
                  beloved ingredient while also exploring the diverse flavours
                  of global cuisine.
                </p>
              </div>
              <img
                className="takali"
                src={
                  "assets/images/About-us/tomatoe-white-backgroundxaxa-Photoroom 1 (1) 1.webp"
                }
                alt="img"
                style={{ float: "right", width: "40%" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;

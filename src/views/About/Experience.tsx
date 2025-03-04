import "./Experience.css";

const Experience = () => {
  return (
    <>
      <section className="experience">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="experience-left-div">
                <h1
                  className="our-story-header"
                  style={{
                    fontFamily: "'Forum', serif",
                  }}
                >
                  The House of Paneer Experience
                </h1>
                <h2 className="our-story-sub-heading">
                  "Where Tradition Meets Innovation"
                </h2>
                <p className="our-story-para">
                  From the moment you step through our doors, you'll be greeted
                  by the tantalizing aroma of spices, the warmth of our
                  hospitality, and the promise of a culinary adventure unlike
                  any other. Whether you're dining with family, friends, or
                  colleagues, you'll find that every moment spent at House of
                  Paneer is a moment to be cherished.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="experience-left-div">
                <img
                  src={"assets/images/About-us/img 10 1.webp"}
                  alt="img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

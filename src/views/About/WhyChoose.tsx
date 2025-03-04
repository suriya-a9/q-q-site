import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <>
      <section className="why-choose">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="why-choose-right">
                <h1
                  className="our-story-header"
                  style={{
                    fontFamily: "'Forum', serif",
                  }}
                >
                  Why Choose House of Paneer?
                </h1>
                <p className="our-story-para">
                  With so many dining options to choose from, why should you
                  choose House of Paneer? The answer is simple: because we offer
                  more than just great food. We manufacture & make our own
                  Paneer, offer an experience – an opportunity to explore new
                  flavours, connect with loved ones, and create lasting
                  memories.
                </p>
                <p className="our-story-para">
                  From our commitment to quality and sustainability to our
                  diverse menu and warm hospitality, there are countless reasons
                  to choose House of Paneer for your next dining adventure.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="why-choose-left">
                <img
                  className="why-choose-image"
                  src={"assets/images/About-us/Rectangle 330.webp"}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;

import "./Commitment.css";

const Commitment = () => {
  return (
    <>
      <section className="commitment">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="commitment-left-div">
                <img
                  src={"assets/images/About-us/hop about image.webp"}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="commitment-right-div">
                <h1
                  className="our-story-header"
                  style={{
                    fontFamily: "'Forum', serif",
                  }}
                >
                  Our Commitment to Quality
                </h1>
                <h2 className="our-story-sub-heading">
                  "Fresh, Local, and Sustainable"
                </h2>
                <p className="our-story-para">
                  At House of Paneer, we are committed to sourcing the freshest,
                  highest-quality ingredients from local suppliers whenever
                  possible. We believe in supporting our community and
                  minimizing our environmental footprint, which is why we
                  prioritize sustainability in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commitment;

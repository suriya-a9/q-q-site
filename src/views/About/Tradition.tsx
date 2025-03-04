import "./Tradition.css";

const Tradition = () => {
  return (
    <>
      <section className="tradition">
        <div
          className="container"
          style={{ position: "relative", zIndex: "2" }}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="tradition-right-div">
                <h1 className="tradition-header">Crafting Tradition</h1>
                <h2 className="tradition-sub-header">
                  "The Art of Paneer Making"
                </h2>
                <p>
                  At House of Paneer, we take pride in crafting our own paneer
                  using time-honoured techniques and the finest ingredients.
                  Each batch is made with care and attention to detail,
                  resulting in a paneer that is fresh, creamy, and bursting with
                  flavour. Our commitment to quality ensures that every bite is
                  a true delight for the senses.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tradition-left-div">
                <img
                  src={"assets/images/About-us/new-our-team-image.webp"}
                  alt="img"
                />
                <img
                  className="tradition-left-image-2"
                  src={"assets/images/About-us/Group 37.webp"}
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

export default Tradition;

import "./OurTeam.css";

const OurTeam = () => {
  return (
    <>
      <section className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="our-team-left">
                <img
                  className="our-team-image"
                  src={"assets/images/About-us/about-last-before.webp"}
                  alt="img"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="our-team-right">
                <h1
                  className="our-story-header"
                  style={{
                    fontFamily: "'Forum', serif",
                  }}
                >
                  Our Team
                </h1>
                <h2 className="our-story-sub-heading">
                  "Passionate, Experienced, and Dedicated"
                </h2>
                <p className="our-story-para">
                  Behind every great meal is a team of passionate individuals
                  dedicated to making it happen. At House of Paneer, our team is
                  comprised of experienced chefs, talented cooks, and dedicated
                  staff who share a common passion for food and hospitality.
                  With years of experience and a commitment to excellence, our
                  team strives to exceed your expectations with every dish we
                  serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;

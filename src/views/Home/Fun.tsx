import "./Fun.css";

const Fun = () => {
  window.addEventListener("scroll", function () {
    const headers = document.querySelectorAll(".fun-section");
    const scrollPos = window.scrollY;

    headers.forEach((header) => {
      if (scrollPos > 4200) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    });
  });

  return (
    <>
      <section className="fun-section" id="gallery">
        <div className="container">
          <h1 className="fun-header" style={{ fontFamily: "'Forum', serif" }}>
            Gallery Section
          </h1>
          <h2
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "'Forum', serif",
            }}
          >
            Discover Authentic Paneer Delights in Madurai
            <br />
            In Our Gallery
          </h2>
          {/* <p
            style={{
              textAlign: "center",
              color: "white",
              paddingBottom: "30px",
            }}
          >
            In Our Gallery
          </p> */}
          <div className="row">
            <div className="col-md-4">
              <div className="fun-images shine">
                <img
                  src={"assets/images/Gallery-images/Butter Dosa.webp"}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="fun-images shine">
                <img
                  src={"assets/images/Gallery-images/Paneer Jar.webp"}
                  alt="gallery-img"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="fun-images shine">
                <img
                  src={"assets/images/Gallery-images/Paneer Nan.webp"}
                  alt="gallery-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fun;

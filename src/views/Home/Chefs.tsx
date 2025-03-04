import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Chefs.css";

const Chefs = () => {
  const options = {
    loop: true,
    margin: 10,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const carouselItems = [
    <>
      <div className="owl-card">
        <div className="owl_image img_fluid">
          <img
            className="img owl-chef-image"
            alt="product-img"
            src={"assets/images/signature-images/Classic Paneer Tikka.webp"}
          />
        </div>
        <div className="over-owl-caption">
          <div className="owl-captions">
            {/* <p>18/09/2022</p> */}
            <h4 className="product-name">Classic Paneer Tikka</h4>
            {/* <p className="product-price">$25.00</p> */}
          </div>
        </div>
      </div>
      <div className="owl-card">
        <div className="owl_image img_fluid">
          <img
            className="img owl-chef-image"
            alt="product-img"
            style={{ rotate: "-5deg" }}
            src={"assets/images/signature-images/Japan Paneer.webp"}
          />
        </div>
        <div className="over-owl-caption">
          <div className="owl-captions">
            {/* <p>18/09/2022</p> */}
            <h4 className="product-name">Japan Paneer</h4>
            {/* <p className="product-price">$25.00</p> */}
          </div>
        </div>
      </div>
      <div className="owl-card">
        <div className="owl_image img_fluid">
          <img
            className="img owl-chef-image"
            alt="product-img"
            style={{ rotate: "6deg" }}
            src={"assets/images/signature-images/kaloonji paneer1.webp"}
          />
        </div>
        <div className="over-owl-caption">
          <div className="owl-captions">
            {/* <p>18/09/2022</p> */}
            <h4 className="product-name">Kaloonji paneer</h4>
            {/* <p className="product-price">$25.00</p> */}
          </div>
        </div>
      </div>
      <div className="owl-card">
        <div className="owl_image img_fluid">
          <img
            className="img owl-chef-image"
            alt="product-img"
            src={
              "assets/images/signature-images/Karuveppilai paneer veppudu.webp"
            }
          />
        </div>
        <div className="over-owl-caption">
          <div className="owl-captions">
            {/* <p>18/09/2022</p> */}
            <h4 className="product-name">Karuveppilai paneer veppudu</h4>
            {/* <p className="product-price">$25.00</p> */}
          </div>
        </div>
      </div>
      <div className="owl-card">
        <div className="owl_image img_fluid">
          <img
            className="img owl-chef-image"
            alt="product-img"
            src={"assets/images/signature-images/makhmali paneer tikka.webp"}
          />
        </div>
        <div className="over-owl-caption">
          <div className="owl-captions">
            {/* <p>18/09/2022</p> */}
            <h4 className="product-name">Makhmali paneer tikka</h4>
            {/* <p className="product-price">$25.00</p> */}
          </div>
        </div>
      </div>
      <div className="owl-card">
        <div className="owl_image img_fluid">
          <img
            className="img owl-chef-image"
            alt="product-img"
            src={"assets/images/signature-images/Paneer popcorn.webp"}
          />
        </div>
        <div className="over-owl-caption">
          <div className="owl-captions">
            {/* <p>18/09/2022</p> */}
            <h4 className="product-name">Paneer popcorn</h4>
            {/* <p className="product-price">$25.00</p> */}
          </div>
        </div>
      </div>
    </>,
  ];

  return (
    <>
      <section className="chefs-section">
        <div className="container">
          <h1 className="chefs-header" style={{ fontFamily: "'Forum', serif" }}>
            Chef's Specials
          </h1>
          <h2
            style={{
              textAlign: "center",
              color: "white",
              // paddingTop: "8px",
              // paddingBottom: "8px",
              fontFamily: "'Forum', serif",
            }}
          >
            Experience the Flavors of India & Beyond at House of Paneer
          </h2>
          <h3
            style={{
              textAlign: "center",
              color: "white",
              // paddingTop: "15px",
              fontFamily: "'Forum', serif",
            }}
          >
            With Our Chef's Special & Signature Menu
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "white",
              paddingBottom: "25px",
              paddingTop: "20px",
            }}
          >
            Can't decide what to order? Let our Cheff's Special Menu guide your
            culinary journey.
            <br />
            Handpicked by our expert chefs, these signature dishes are a
            testament to our commitment to excellence.
          </p>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                className="owl-theme"
                nav
                {...options}
                style={{ marginTop: "45px" }}
              >
                {carouselItems}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chefs;

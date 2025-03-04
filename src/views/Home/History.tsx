import React, { useEffect, useRef } from "react";
import "./History.css";
import "../../../src/index.css";

const History = () => {
  const MenuLink = (url: string) => {
    window.open(url, "_blank");
  };
  window.addEventListener("scroll", function () {
    const headers = document.querySelectorAll(".right-animation");
    const scrollPos = window.scrollY;

    headers.forEach((header) => {
      if (scrollPos > 150) {
        header.classList.add("right-come");
      } else {
        header.classList.remove("right-come");
      }
    });
  });
  window.addEventListener("scroll", function () {
    const headers = document.querySelectorAll(".left-animation");
    const scrollPos = window.scrollY;

    headers.forEach((header) => {
      if (scrollPos > 150) {
        header.classList.add("left-come");
      } else {
        header.classList.remove("left-come");
      }
    });
  });
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      if (
        historyRef.current &&
        scrollPos + window.innerHeight >= historyRef.current.offsetTop + 750
      ) {
        const leftAnimationElements =
          document.querySelectorAll(".left-animation");
        const rightAnimationElements =
          document.querySelectorAll(".right-animation");

        leftAnimationElements.forEach((element) => {
          element.classList.add("animate-left");
        });

        rightAnimationElements.forEach((element) => {
          element.classList.add("animate-right");
        });

        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="history-section" id="about">
        <div className="container">
          <h1
            className="history-header"
            style={{ fontFamily: "'Forum', serif" }}
          >
            About us
          </h1>
          <h2
            className="history-sub-head"
            style={{
              textAlign: "center",
              color: "white",
              position: "relative",
              marginTop: "15px",
              marginBottom: "15px",
              fontFamily: "'Forum', serif",
            }}
          >
            House Of Paneer
          </h2>
          <div className="row">
            <div className="col-md-6 left-animation">
              <div className="history-para">
                <h1
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "'Forum', serif",
                  }}
                >
                  Veg Restaurant Madurai
                </h1>
                <p>
                  Welcome to House of Paneer, a culinary haven where tradition
                  meets innovation to create an unforgettable dining experience.
                  Our restaurant is more than just a place to eat – it's a
                  celebration of flavour, culture, and of course Paneer.
                  <br />
                  At House of Paneer, we take pride in crafting authentic,
                  artisan paneer using only the finest ingredients. Our paneer
                  is made in-house, ensuring freshness and quality in every
                  bite. We believe in preserving the rich heritage of Indian
                  cuisine while embracing creativity and innovation.
                  <br />
                  Fasten your belts, and prepare for a journey to explore 50+
                  exotic paneer dishes ranging from Indian, continental,
                  Chinese, tandoor
                  <br />
                  Join us at Paneer restaurant in Madurai and experience the
                  magic of traditional Indian cuisine brought to life with a
                  modern twist.
                </p>
                <button
                  className="btn-gradient-2"
                  onClick={() => MenuLink("/about-us")}
                >
                  Explore
                </button>
              </div>
            </div>
            <div className="col-md-6 right-animation">
              <div className="history-image-div">
                {/* <img
                  className="history-image-1"
                  src={"assets/images/Collage-2.webp"}
                  alt="about-us-img"
                /> */}
                <img
                  className="history-image-2"
                  src={"assets/images/Collag-1.webp"}
                  alt="about-us-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;

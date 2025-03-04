import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-1">
                <img
                  src={"assets/images/HOP - Logo-01.webp"}
                  alt="footer-logo"
                />
                <p>
                  No 43, V.P.Rathinasamay Nadar Rd.
                  <br />
                  Opp to Reliance Super Market,
                  <br />
                  BB.Kulam,
                  <br />
                  Madurai - 625002
                  <br />
                  Open: 11:00 AM - 11:00 PM
                </p>
              </div>
            </div>
            <div className="col-md-6 second-footer-div">
              <div className="footer-2">
                <h4>EXPLORE</h4>
                <ul>
                  <li>
                    <a href="/">HOME</a>
                  </li>
                  <li>
                    <a href="/menu" target="_blank">
                      MENUS
                    </a>
                  </li>
                  <li>
                    <a href="/about-us" target="_blank">
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a href="/#gallery">GALLERY</a>
                  </li>
                </ul>
              </div>
              <div className="footer-3">
                <h4>CONTACT US</h4>
                <div className="foot-3-last">
                  <p>
                    <FaPhoneAlt />
                    <a
                      className="foot-3-last-second-a"
                      href="tel:+9196000 77511"
                    >
                      &nbsp; +91 96000 77511
                    </a>
                  </p>
                  <p className="mail-p">
                    <IoMdMail />
                    &nbsp;&nbsp;
                    <a href="mailto:customercare@houseofpaneer.com">
                      customercare@houseofpaneer.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-4">
                <div className="footer-social-media-icons">
                  <h4>FOLLOW US</h4>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61559079655665"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          src={"assets/images/red-facebook.webp"}
                          alt="img"
                          style={{ width: "42px" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/house_of_paneer_restaurant/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          src={"assets/images/red-insta.webp"}
                          alt="img"
                          style={{ width: "42px" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCG6ccHrSB6fSSJsQEtwqzjA"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          src={"assets/images/red-youtube.webp"}
                          alt="img"
                          style={{
                            width: "42px",
                          }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

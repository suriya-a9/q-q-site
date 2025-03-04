import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaPhoneAlt } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header() {
  const NavLink = (url: string) => {
    window.open(url, "_blank");
  };
  window.addEventListener("scroll", function () {
    const headers = document.querySelectorAll(".navbar");
    const scrollPos = window.scrollY;

    headers.forEach((header) => {
      if (scrollPos > 100) {
        header.classList.add("header-scrolled-fixed");
      } else {
        header.classList.remove("header-scrolled-fixed");
      }
    });
  });
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <a href="/">
            <img src={"assets/images/HOP - Logo-01.webp"} alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={() => NavLink("/about-us")}>About</Nav.Link>
            <Nav.Link onClick={() => NavLink("/menu")}>Menu</Nav.Link>
            <Nav.Link href="/#gallery">Gallery</Nav.Link>
          </Nav>
          {/* <button className="offers-button"> */}
          {/* <img src={"assets/images/Vector.webp"} alt="offers" />
            <span className="button-span">Offers</span> */}
          <div className="nav-bar-phone">
            <FaPhoneAlt />
            &nbsp;&nbsp;
            <a href="tel:+9196000 77511">+91 96000 77511</a>
          </div>
          {/* </button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

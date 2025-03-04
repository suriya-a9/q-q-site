// import { useNavigate } from "react-router-dom";
import "./Menus.css";

const Menus = () => {
  // const navigate = useNavigate();
  const MenuLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <section className="menus-section" id="menu">
        <div
          className="container"
          style={{ position: "relative", zIndex: "2" }}
        >
          <a href="#book-a-table">
            <div className="fixed-div">
              <img
                src={"assets/images/dining-table-icon.webp"}
                alt="book-a-table-icon"
              />
            </div>
          </a>
          <h1 className="menu-header" style={{ fontFamily: "'Forum', serif" }}>
            Delicious Menu
          </h1>
          <h2
            style={{
              textAlign: "center",
              color: "white",
              position: "relative",
              marginTop: "15px",
              marginBottom: "15px",
              fontFamily: "'Forum', serif",
            }}
          >
            Indulge in 100+ Exquisite Paneer Dishes at House of Paneer
          </h2>
          <p
            style={{
              textAlign: "center",
              position: "relative",
              color: "white",
            }}
          >
            Discover a world of culinary delights with our extensive menu
            offerings. Whether you're craving the creamy richness of paneer
            tikka or the bold flavours of our continental specialities, we have
            something to satisfy every craving.
          </p>
          <div
            className="row menus-web-view"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Soup
            </h2>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={
                          "assets/images/home-menus/Cream of brocolli soup.jpg"
                        }
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Broccoli & almond cream soup
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Creamy indulgence with broccoli florets and a touch of
                        almond richness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={
                          "assets/images/home-menus/Sweet Corn Veg Soup.jpeg"
                        }
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Sweet corn veg</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹110</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Light and wholesome – sweet corn kernels simmered with
                        vegetables in a clear broth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row menus-web-view"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Starter
            </h2>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/images/Chilli Paneer.jpg"}
                        alt="menu-product-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Chilli Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Choose your style – paneer tossed in a variety of
                        flavorful sauces.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/images/Japan Paneer.jpeg"}
                        alt="menu-product-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Japan Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A unique twist – paneer with Japanese-inspired flavors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/images/Paneer Popcorn.jpeg"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer popcorn</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Bite-sized pieces of paneer tossed in a flavorful
                        batter, perfect for popping in your mouth.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={
                          "assets/images/home-menus/Aloo kulcha Masala kulcha.jpg"
                        }
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Aloo nazakati chef spl</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹225</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Sweet and spicy paneer tossed in honey and chilli sauce.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="row menus-web-view"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Main Course
            </h2>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={
                          "assets/images/home-menus/Hyderabadi Veg Biriyani.jpeg"
                        }
                        alt="menu-product-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Veg Biriyani</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Aromatic basmati rice layered with garden-fresh
                        vegetables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/images/home-menus/Green Peas Pulao.jpeg"}
                        alt="menu-product-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Green Peas Pulao</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹170</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Classic basmati rice with green peas or corn for a
                        simple, flavorful dish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row menus-web-view"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Beverages
            </h2>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/images/home-menus/Mocktails.jpg"}
                        alt="menu-product-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Mocktails</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Refreshing non-alcoholic beverages to complement your
                        meal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/images/home-menus/Milk Shakes.jpg"}
                        alt="menu-product-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Milkshakes</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹140</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Creamy and delicious milkshakes with a variety of
                        flavours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row menus-web-view"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Sundaes
            </h2>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/images/home-menus/Faloodas.jpg"}
                        alt="menu-product-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Faloodas</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹160</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A traditional Indian dessert drink with a rich blend of
                        flavours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/images/home-menus/SIzzling Brownie.jpg"}
                        alt="menu-product-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Sizzling Brownies</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹150</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Warm, gooey brownies served sizzling with a scoop of ice
                        cream.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="menus-button" onClick={() => MenuLink("/menu")}>
            View Full Menu
          </button>
          <div className="row menus-mobile-view">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Soup
            </h2>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Faloodas.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Milagu Chaaru</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹90</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A peppery South Indian soup with a delightful paneer
                      twist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Hot & Sour Soup.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Hot & Sour Paneer Soup</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹90</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A tangy and spicy Asian-style soup with succulent paneer
                      cubes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row menus-mobile-view">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Starter
            </h2>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Paneer Chukka.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Sukka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Dry-roasted paneer with aromatic spices for a flavorful
                      start.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Japan Paneer Dish.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Japan Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy paneer bites with a sweet and savoury Japanese
                      glaze with cashew nuts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Paneer Milagu varuval.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Milagu Varuval</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Pepper-spiced fried paneer with a crispy texture and bold
                      taste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Honey Chilli Paneer.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Honey Chilli Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹225</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Sweet and spicy paneer tossed in honey and chilli sauce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row menus-mobile-view">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Main Course
            </h2>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Paneer Pulao.png"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Pulao</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹225</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Aromatic rice cooked with tender paneer and flavorful
                      spices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={
                      "assets/images/home-menus/HOP's Special Mixed Fried Rice.jpg"
                    }
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Hop's Spl Mixed Fried Rice</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A special blend of fried rice with mixed vegetables and
                      paneer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row menus-mobile-view">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Beverages
            </h2>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Mocktails.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Mocktails</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Refreshing non-alcoholic beverages to complement your
                      meal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Milk Shakes.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Milkshakes</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹140</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Creamy and delicious milkshakes with a variety of
                      flavours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row menus-mobile-view">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                position: "relative",
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "'Forum', serif",
                textDecoration: "underline",
                textDecorationColor: "#f8ae27",
              }}
            >
              Sundaes
            </h2>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/Faloodas.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Faloodas</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹160</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A traditional Indian dessert drink with a rich blend of
                      flavours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/images/home-menus/SIzzling Brownie.jpg"}
                    alt="menu-product-img"
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Sizzling Brownies</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹150</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Warm, gooey brownies served sizzling with a scoop of ice
                      cream.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menus;

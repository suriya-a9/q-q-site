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
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Honey Chilli Paneer.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Honey Chilli Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crisp paneer tossed in a sweet & spicy honey chili glaze
                        - a delightful explosion of flavor!.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Kadai Paneer.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kadai Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer cubes cooked in a spicy and flavorful
                        onion-tomato gravy, with a touch of bell peppers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Makhmali Paneer.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Makhmali Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Melt-in-your-mouth paneer tikka marinated in a velvety
                        cream and spice blend.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Paneer Manchurian.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer Manchurian</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crispy paneer florets tossed in a sweet and savory
                        Manchurian sauce - a crowd-pleasing favorite.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Paneer Bharta.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer Bharta</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Smoky grilled paneer mashed in a flavorful tomato-based
                        gravy - a rustic and comforting dish.
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
                        src={"assets/home-page-menus/Paneer 65 biriyani.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer 65 biriyani</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Succulent paneer marinated in aromatic spices, layered
                        with fragrant rice - a vegetarian biryani masterpiece!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Paneer Handi.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer Handi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Silky paneer simmered in a rich and flavorful gravy - a
                        vegetarian comfort food classic
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Paneer Sheek Kebab.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer Sheek Kebab</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Succulent and flavorful paneer kebabs grilled to
                        perfection - a vegetarian twist on a traditional kebab.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Paneer Veg Biriyani.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer Veg Biriyani</h4>
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
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/Paneer Pasandi.webp"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer Pasandi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹270</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A delightful medley of paneer cubes, onions, tomatoes,
                        and spices, simmered to perfection in a rich gravy.
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
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Honey Chilli Paneer.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Honey Chilli Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crisp paneer tossed in a sweet & spicy honey chili glaze -
                      a delightful explosion of flavor!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Kadai Paneer.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kadai Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer cubes cooked in a spicy and flavorful onion-tomato
                      gravy, with a touch of bell peppers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row menus-mobile-view">
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Makhmali Paneer.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Makhmali Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Melt-in-your-mouth paneer tikka marinated in a velvety
                      cream and spice blend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Paneer 65 biriyani.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer 65 biriyani</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Succulent paneer marinated in aromatic spices, layered
                      with fragrant rice - a vegetarian biryani masterpiece!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Paneer Handi.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Handi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Silky paneer simmered in a rich and flavorful gravy - a
                      vegetarian comfort food classic
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Paneer Pasandi.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Pasandi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹270</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A delightful medley of paneer cubes, onions, tomatoes, and
                      spices, simmered to perfection in a rich gravy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Paneer Veg Biriyani.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Veg Biriyani</h4>
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
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Paneer Sheek Kebab.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Sheek Kebab</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Succulent and flavorful paneer kebabs grilled to
                      perfection - a vegetarian twist on a traditional kebab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Paneer Manchurian.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Manchurian</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy paneer florets tossed in a sweet and savory
                      Manchurian sauce - a crowd-pleasing favorite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/Paneer Bharta.webp"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Bharta</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Smoky grilled paneer mashed in a flavorful tomato-based
                      gravy - a rustic and comforting dish.
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

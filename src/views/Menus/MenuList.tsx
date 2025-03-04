const MenuList = () => {
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SALADS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        HOP gourmet flavoured paneer salad
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A symphony of textures and flavors featuring three
                        house-made paneer varieties.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Mexican corn salad</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹160</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A fiesta of sweet corn, black beans, and zesty spices –
                        a taste of south of the border.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Italian Pasta salad</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹150</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A twist on a classic – flavorful pasta tossed with
                        vegetables and a light Italian dressing.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Classic green salad</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹110</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Fresh, crisp greens with a light vinaigrette, a perfect
                        starter or side.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Hawaian salad</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹160</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Tropical delight with pineapple, bell peppers, and a
                        tangy dressing.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SOUPS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Tomato dhaniya shorba</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Classic Indian comfort - tangy tomato soup flavored with
                        fresh coriander.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
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
                      <h3 className="menu-price">₹110</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Creamy indulgence with broccoli florets and a touch of
                        almond richness.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Veg clear soup</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹100</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crystal-clear broth bursting with garden-fresh flavors -
                        a light and healthy starter.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Hot & sour veg soup</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Tangy and spicy broth packed with vegetables – a
                        delightful awakening for your taste buds.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Sweet corn veg soup</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Light and wholesome – sweet corn kernels simmered with
                        vegetables in a clear broth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Veg manchow soup</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹100</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Indo-Chinese delight – spicy and flavorful vegetable
                        soup with a unique twist.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Cream of veg</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Velvety smooth and packed with creamy veggie goodness -
                        a comforting prelude to your meal.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              STARTERS
            </h1>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SOUTH INDIAN
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer aranmanai varuval</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Royal paneer cubes stir-fried with aromatic spices - a
                        taste of South Indian grandeur.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Karuveppilai paneer veppudu
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tossed in fragrant curry leaves and spices - a
                        burst of South Indian flavours.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer sukka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Dry-fried paneer with a medley of spices - a South
                        Indian classic with a rustic touch.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer milagu varuval</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer cubes stir-fried with fiery chilies - a South
                        Indian treat for spice lovers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Gobi 65</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crispy cauliflower florets coated in a tangy and spicy
                        masala.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Mushroom 65</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Spicy and flavorful mushrooms fried to perfection - a
                        vegetarian twist on a classic dish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">HOP Paneer '65</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Our signature paneer dish, infused with a unique blend
                        of spices - a must-try for paneer enthusiasts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Baby jack fruit varuval</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Tender baby jackfruit pieces stir-fried with a medley of
                        spices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Pallipalayam Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer cubes cooked in a rich and spicy gravy from the
                        Pallipalayam region of Tamil Nadu.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              CONTINENTAL STARTERS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Crispy paneer & cheese sticks
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Melty cheese and golden-fried paneer in perfect harmony
                        - a delightful appetizer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Peri Peri Paneer skewers</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Succulent paneer cubes marinated in fiery peri peri
                        spices - a flavor explosion on a stick.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
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
                        Bite-sized paneer puffs bursting with flavor - a fun and
                        addictive snack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Jalapeno cheese loaded fries
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crispy fries smothered in cheese and spicy jalapenos - a
                        cheesy, spicy indulgence.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Crunchy fried baby corn</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Baby corn florets coated in a crispy batter - a
                        delightful vegetarian finger food.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Corn cheese bites</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Creamy corn and cheese wrapped in a crispy shell - a
                        cheesy and satisfying treat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Desi tucker corn</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Sweet corn kernels tossed in Indian spices - a classic
                        and comforting side dish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        French fries - Classic / Peri peri
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹160</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Golden-fried potato perfection, available in classic or
                        fiery peri peri flavours.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Deviled Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Spicy paneer filling stuffed in crispy fried wonton
                        wrappers - a unique and flavorful appetizer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Honey chilli fries</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crispy fries tossed in a sweet and spicy honey chili
                        glaze - a sweet and spicy delight.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              CHINESE STARTERS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Dragon Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Fiery and flavorful paneer tossed in a spicy dragon
                        sauce - a fiery adventure for your taste buds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Paneer - chilli / Manchurian / Szechuan
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Classic paneer dishes prepared in your choice of styles:
                        Chilli (spicy), Manchurian (sweet & savory), or Szechuan
                        (tingling hot with Sichuan peppercorns).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
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
                        Tender paneer cooked in a Japanese-inspired soy sauce
                        and ginger marinade - a unique and flavorful experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Apollo Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crispy and spicy paneer bathed in a fiery red sauce - a
                        vegetarian take on the iconic Andhra dish.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Mushroom - Chilli / Manchurian
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Flavourful mushrooms tossed in your preferred style:
                        Chilli (spicy) or Manchurian (sweet & savory).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Baby corn salt & pepper</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crispy baby corn florets seasoned with a simple yet
                        addictive salt and pepper mix - a light and flavorful
                        side dish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Gobi - Chilli / Manchurian</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crispy cauliflower florets prepared in your choice of
                        style: Chilli (spicy) or Manchurian (sweet & savory).
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              TANDOORI STARTERS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Gourmet flavoured paneer tikka
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        An assortment of paneer tikka marinated in unique and
                        flavorful blends of spices, each bite a culinary
                        adventure.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
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
                        Soft and creamy paneer tikka marinated in a rich and
                        velvety yogurt-based marinade, a melt-in-your-mouth
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Classic paneer tikka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a classic blend of yogurt,
                        spices, and herbs, a timeless favorite.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Achari paneer tikka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a tangy and spicy pickle
                        masala, a burst of tangy flavors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Afghani paneer tikka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹250</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a creamy and aromatic
                        Afghan-inspired marinade, infused with nuts and dried
                        fruits.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Aatishi aloo</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Spicy and crispy potato wedges tossed in a fiery masala,
                        a vegetarian twist on a classic Indian snack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Chaap tikka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Soya chunks marinated in a blend of yogurt, spices, and
                        herbs, then grilled to perfection, a meaty vegan
                        alternative.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Malai Paneer tikka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a rich and creamy marinade
                        infused with cream and nuts, a luxurious and flavorful
                        experience.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Chettinadu paneer tikka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a fiery and flavorful
                        Chettinad masala, a South Indian spice explosion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer Kalimiri</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a unique blend of black
                        peppercorns and other spices, a symphony of peppery
                        flavors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Jodhpuri paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a rich and fragrant Jodhpuri
                        masala, a taste of Rajasthan's culinary heritage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer sheek kebab</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Ground paneer mixed with spices and grilled to
                        perfection, a vegetarian kebab sensation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Ajwaini Paneer tikka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a blend of carom seeds
                        (ajwain) and other spices, a unique and flavorful twist.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Baby jackfruit tikka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Tender baby jackfruit pieces marinated in a flavorful
                        blend of spices and grilled to perfection, a meaty
                        vegetarian delight.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Chukundari Kurkure kebab</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        "Beetroot tikka marinated in a tangy and spicy marinade,
                        then coated in a crispy chickpea flour batter and fried,
                        a colorful and flavorful treat.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              PIZZAS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">MARGHARITA</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A timeless favorite – a simple and delicious pizza with
                        tomato sauce and mozzarella cheese.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">DESI DUDE</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A taste of India – paneer tikka, caramelized onions, and
                        colorful bell peppers on a bed of tomato sauce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">FARMER'S CHOICE</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A vibrant medley of garden-fresh grilled vegetables,
                        olives, sweet corn, and a touch of heat from jalapenos.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">GREEK PIZZA</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Mediterranean magic – grilled paneer, sun-kissed
                        tomatoes, kalamata olives, and a touch of basil pesto.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">BBQ PANEER POP CORN</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A playful twist – our signature paneer popcorn tossed in
                        tangy BBQ sauce, with American corn for a delightful
                        textural contrast.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              PASTAS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">PENNE ARABIATA</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Spicy penne pasta tossed in a classic tomato sauce with
                        a kick of red chili flakes - a fiery and flavorful
                        favorite.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">PRIMAVERA</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹270</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Penne pasta with a vibrant mix of seasonal vegetables in
                        a light and flavorful sauce - a celebration of fresh
                        flavors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">INDIANA</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹270</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Penne pasta tossed in a creamy and flavorful
                        Indian-inspired sauce with aromatic spices - a taste of
                        Indian comfort food.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">CHETTINAD PASTA</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹270</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Penne pasta coated in a fiery Chettinad masala with bold
                        South Indian flavors - a spicy adventure for your
                        palate.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">CILANTRO PESTO</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹270</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A burst of freshness – a vibrant cilantro pesto sauce
                        coating al dente pasta, topped with a sprinkle of
                        Parmesan cheese.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">ALFREDO</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹280</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A rich and decadent classic – fettuccine pasta enveloped
                        in a creamy Alfredo sauce, with a touch of Parmesan
                        cheese for added richness.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              BIRIYANI & PULAO
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Veg biriyani</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A symphony of fragrant rice, vegetables, and aromatic
                        spices, a vegetarian delight.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        HOP Spl paneer tikka biriyani
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer tikka marinated in a blend of yogurt and spices,
                        layered with rice and cooked to perfection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        HOP Spl paneer '65 biriyani
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Crispy paneer '65 tossed with fragrant rice, a unique
                        and irresistible combination.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer pulao</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A comforting dish of rice cooked with paneer,
                        vegetables, and aromatic spices
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kashmiri pulao</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Saffron-infused rice with dried fruits and nuts, a taste
                        of Kashmiri royalty.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Makai pulao</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹170</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Sweet corn kernels cooked with rice, vegetables, and
                        spices - a vibrant and flavorful vegetarian treat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Mushroom pulao</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹170</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Earthy mushrooms, rice, and aromatic spices come
                        together in this flavorful vegetarian pulao.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kaju pulao</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Cashews, rice, vegetables, and spices create a rich and
                        nutty pulao - a vegetarian indulgence.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Jeera rice</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹150</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Simple yet flavorful basmati rice cooked with cumin
                        seeds and aromatics - a versatile side dish.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              INDIAN CURRIES
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Gourmet paneer methi malai</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹270</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A harmonious blend of creamy paneer, fragrant fenugreek
                        leaves, and a touch of cream, creating a culinary
                        masterpiece.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer pasandha</h4>
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
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Patiala shahi paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹270</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A royal indulgence – paneer cubes cooked in a creamy
                        tomato-based gravy, infused with aromatic spices and a
                        hint of sweetness.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kofta darbari</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A vegetarian's delight – flavorful potato and paneer
                        koftas swimming in a rich and creamy gravy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer tikka masala</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        paneer cubes marinated in yogurt and spices, grilled to
                        perfection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kadai paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        paneer cubes cooked in a spicy and flavorful
                        onion-tomato gravy, with a touch of bell peppers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer Qasr e pukhtan</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A culinary gem from the land of Pashtoons – paneer cubes
                        cooked in a fragrant tomato-onion gravy, seasoned with
                        Kashmiri spices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Chettinadu paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A fiery and flavorful South Indian dish – paneer cubes
                        cooked in a rich and aromatic Chettinad masala gravy,
                        with a touch of coconut.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Karuveppilai milagu paneer masala
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        paneer cubes cooked in a fragrant curry leaf and pepper
                        masala gravy, a culinary gem.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kaloonji Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        paneer cubes cooked in a black cumin-infused gravy, with
                        a touch of onions and tomatoes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer butter masala</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹260</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Paneer cubes simmered in a rich and creamy tomato-based
                        gravy, a classic and beloved dish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Himachal dhingiri dolmas</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Hollowed-out potatoes stuffed with a savory mix of
                        lentils, spices, and herbs, a unique and flavorful dish
                        from Himachal Pradesh.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Shabnami malai makhana</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Lotus seed kernels cooked in a rich and creamy sauce
                        with a touch of rose water, a delicate and fragrant
                        treat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Malai makhana aur muttar</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Lotus seed kernels and green peas cooked in a creamy
                        sauce, a comforting and flavorful vegetarian dish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Dal palak</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Lentils simmered in a creamy spinach gravy, a nutritious
                        and delicious vegetarian option.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Bhemisal paneer hundi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹250</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A Rajasthani specialty – paneer cubes cooked in a
                        yogurt-based gravy, flavored with aromatic spices and a
                        touch of besan.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer makhmali la jawab</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A velvety smooth delight – paneer cubes cooked in a
                        creamy cashew-nut gravy, infused with delicate spices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Methi chaman bahar</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A symphony of flavors – paneer cubes cooked with
                        fenugreek leaves, onions, tomatoes, and spices, creating
                        a culinary masterpiece.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer bharta</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A rustic and flavorful dish – roasted paneer mashed with
                        onions, tomatoes, and spices, a true taste of India.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Theen zaika da Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹270</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A trio of flavors – paneer cubes cooked in three
                        different gravies
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Palak Paneer</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A healthy and flavorful dish – paneer cubes cooked in a
                        creamy spinach gravy, infused with garlic and ginger.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer kolhapuri</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A spicy and flavorful Maharashtrian dish – paneer cubes
                        cooked in a fiery Kolhapuri masala gravy, with a hint of
                        tamarind.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Veg jhalfrezi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Mixed vegetables stir-fried in a spicy and tangy sauce,
                        a colorful and flavorful dish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kadai subzi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A medley of vegetables cooked in a spicy and flavorful
                        gravy, a hearty and satisfying vegetarian meal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Subzi diwani hundi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A potpourri of vegetables cooked in a rich and flavorful
                        gravy, a vegetarian feast fit for a king.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Dal bhukara</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A hearty and flavorful dal cooked with black lentils,
                        tomatoes, and spices, a Punjabi staple.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Dal tadka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Lentil soup tempered with spices and herbs, a simple yet
                        flavorful dish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Dal fry</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Fried lentils seasoned with spices and herbs, a
                        comforting and satisfying vegetarian meal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Lasooni dal</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Lentils cooked with garlic and spices, a flavorful and
                        aromatic dish.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              INDIAN BREADS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Roti</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹50</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A staple flatbread in Indian cuisine, made from whole
                        wheat flour and cooked on a tawa (griddle).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Butter roti</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹65</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A variation of roti, brushed with ghee or butter for
                        added richness and flavor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Methi roti</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹60</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A savory roti infused with the earthy aroma and flavor
                        of methi (fenugreek) leaves.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Garlic roti</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹65</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A fragrant and garlicky roti, perfect for pairing with
                        curries or as a snack.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Naan</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹50</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A leavened flatbread from North India, cooked in a
                        tandoor (clay oven) for a smoky flavor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Butter Naan</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹65</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A classic naan, brushed with butter for a rich and
                        buttery taste.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Garlic naan</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹65</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A flavorful naan infused with garlic, adding a pungent
                        and delicious twist.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Chilli cheese Naan</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹80</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A spicy and cheesy naan, filled with a blend of chilies
                        and cheese.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Amristari Naan</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹90</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A thick and fluffy naan from Amritsar, Punjab, known for
                        its soft texture.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kashmiri Naan</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹90</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A naan infused with dried fruits and nuts, adding a
                        sweet and nutty flavor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Onion kulcha</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹100</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A stuffed flatbread filled with a savory mixture of
                        onions and spices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer kulcha</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹100</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A stuffed flatbread filled with a creamy and flavorful
                        paneer (Indian cottage cheese) filling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Lacha paratha</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A flaky and layered flatbread, made by repeatedly
                        folding and rolling the dough.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer paratha</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A stuffed paratha filled with a paneer (Indian cottage
                        cheese) filling.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Methi paratha</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹110</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A savory paratha infused with the earthy aroma and
                        flavor of methi (fenugreek) leaves.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer kulcha</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A leavened flatbread from North India, stuffed with a
                        flavorful paneer
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              DOSA VARIETIES
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer kari dosa</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A crispy crepe made from fermented rice and lentil
                        batter, filled with a spicy and flavorful paneer (Indian
                        cottage cheese) curry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Chaap kari dosa</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹170</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A crispy crepe made from fermented rice and lentil
                        batter, filled with a spicy and flavorful chaap (soy
                        chunks) curry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paneer tikka masala dosa</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A crispy crepe made from fermented rice and lentil
                        batter, filled with a creamy and aromatic paneer tikka
                        masala curry.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Karuveppilai paneer dosa</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A crispy crepe made from fermented rice and lentil
                        batter, filled with a fragrant and flavorful paneer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Chilli cheese dosa</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A crispy crepe made from fermented rice and lentil
                        batter, filled with a spicy and cheesy mixture of
                        chilies and cheese.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              RICE & NOODLES
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">FRIED RICE (VEG / PANEER)</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹160/190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Classic stir-fried rice with vegetables or paneer,
                        perfect for a quick and flavorful meal.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        SCHEZWAN RICE (VEG/ PANEER)
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹170/200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Spicy and tangy fried rice flavored with Szechuan
                        peppercorns and chilies, featuring vegetables or paneer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">TERIYAKI PANEER FRIED RICE</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Savory and sweet fried rice with paneer marinated in a
                        teriyaki sauce, offering a Japanese twist.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">RAINBOW FRIED RICE</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹230</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A colorful and fun take on fried rice, featuring various
                        vegetables for a vibrant and flavorful dish.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        SINGAPORE FRIED RICE (VEG / PANEER)
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹220/250</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Fried rice with a Southeast Asian flair, featuring
                        vegetables or paneer, shrimp paste, and often a fried
                        egg.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">BURNT GARLIC FRIED RICE</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Aromatic fried rice with a smoky flavor from burnt
                        garlic, perfect for garlic lovers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">GOBI FRIED RICE</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A vegetarian fried rice featuring cauliflower (gobi) as
                        the main ingredient, offering a healthy and flavorful
                        option.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        TRIPLE SZECHUAN FRIED RICE (VEG / PANEER)
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210/240</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A fiery and flavorful fried rice packed with Szechuan
                        peppercorns, chilies, and vegetables or paneer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        VEG HAKKA NOODLES (VEG / PANEER)
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹170/200</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Stir-fried Hakka noodles with vegetables, offering a
                        classic comfort food option.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        SZECHUAN NOODLES (VEG / PANEER)
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180/210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Spicy and tangy stir-fried noodles with Szechuan
                        peppercorns and chilies, featuring vegetables or paneer.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              BEVERAGES
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Ice cream shakes - Vanila /Choco / strawberry / Butter
                        scotch
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Enjoy a creamy and delicious milkshake made with your
                        choice of ice cream flavor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Oreo Shake</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹140</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Classic vanilla ice cream blended with crushed Oreos for
                        a cookies and cream delight.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Kit kat shake</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹140</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Chocolate ice cream blended with Kit Kat pieces for a
                        crunchy and chocolatey treat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Cashew date khoa shake</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹170</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A rich and creamy shake featuring cashews, dates, and
                        khoa (reduced milk solids) for a unique Indian twist.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Paan shake</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹140</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Capture the essence of paan (betel leaf) in a refreshing
                        and flavorful shake.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Banana Peanut butter shake</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹150</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A classic combination of creamy banana and peanut butter
                        for a satisfying and nostalgic taste.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Carrot coconaka</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹140</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A healthy and delicious blend of carrots, chocolate
                        syrup, and milk for a nutritious treat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Hop special Lassi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹170</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A refreshing and creamy yogurt-based drink with a unique
                        HOP twist.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Lime soda - sweet / salt</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹80</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A refreshing and fizzy drink with a touch of sweetness.
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Mango Lassi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹150</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        The sweetness of mangoes blended with yogurt for a
                        classic and tropical beverage.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Sweet Lassi</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹140</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A delightful and creamy yogurt drink with a touch of
                        sweetness.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Mint mojito</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹110</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A refreshing twist on the classic Lassi, infused with
                        the coolness of mint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Blue Lagoon</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A vibrant blue mocktail with a sweet and citrusy flavor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Watermelon mojito</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A refreshing mocktail with watermelon, mint, and lime
                        for a summery taste.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Strawberry mojito</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A sweet and tangy mocktail featuring fresh strawberries
                        and mint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Pomegranate mojito</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A unique and flavorful mocktail with the tartness of
                        pomegranate and the coolness of mint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Blueberry mojito</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹120</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        Enjoy the sweet and juicy taste of blueberries in this
                        refreshing mocktail.
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              DESSERTS
            </h1>
            <div className="col-md-6 menus-col-6">
              <div className="menus">
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Royal Falooda</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>
                        A chilled dessert with noodles, jelly, ice cream, and
                        nuts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Gulab jamun with ice cream</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>Sweet dumplings served warm with ice cream.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Sizzling brownie</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹210</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>Warm brownie with ice cream, served sizzling hot.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Choice of ice cream with nuts Vanila /Choco / strawberry
                        / Butter scotch /mango
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹110</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>Pick your favorite ice cream flavor with nuts.</p>
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
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Hop Special Basundhi Dil pasand
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹160</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>Rich, creamy Indian dessert (nuts & cardamom).</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">Banana Toffee</h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹180</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>Caramelized bananas with ice cream & toffee sauce.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="menu-product-image">
                      <img
                        src={"assets/home-page-menus/HOP Icon.png"}
                        alt="menu-product-img"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="menu-products">
                      <h4 className="menu-title">
                        Hop special Pot Malai kulfi
                      </h4>
                      <hr className="hr1"></hr>
                      <h3 className="menu-price">₹190</h3>
                    </div>
                    <div className="menu-products-description">
                      <p>Dense Indian ice cream (nuts & cardamom) in a pot.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view code */}

          <div className="row menus-mobile-view">
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SALADS
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      HOP gourmet flavoured paneer salad
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A symphony of textures and flavors featuring three
                      house-made paneer varieties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Mexican corn salad</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹160</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A fiesta of sweet corn, black beans, and zesty spices – a
                      taste of south of the border.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Italian Pasta salad</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹150</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A twist on a classic – flavorful pasta tossed with
                      vegetables and a light Italian dressing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Classic green salad</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹110</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Fresh, crisp greens with a light vinaigrette, a perfect
                      starter or side.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Hawaian salad</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹160</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Tropical delight with pineapple, bell peppers, and a tangy
                      dressing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SOUPS
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Tomato dhaniya shorba</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Classic Indian comfort - tangy tomato soup flavored with
                      fresh coriander.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Broccoli & almond cream soup</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹110</h3>
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
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Veg clear soup</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹100</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crystal-clear broth bursting with garden-fresh flavors - a
                      light and healthy starter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Hot & sour veg soup</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Tangy and spicy broth packed with vegetables – a
                      delightful awakening for your taste buds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Cream of veg</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Velvety smooth and packed with creamy veggie goodness - a
                      comforting prelude to your meal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Veg manchow soup</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹100</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Indo-Chinese delight – spicy and flavorful vegetable soup
                      with a unique twist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Sweet corn veg soup</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
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
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              STARTERS
            </h1>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              SOUTH INDIAN
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer aranmanai varuval</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Royal paneer cubes stir-fried with aromatic spices - a
                      taste of South Indian grandeur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Karuveppilai paneer veppudu</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tossed in fragrant curry leaves and spices - a
                      burst of South Indian flavours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer sukka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Dry-fried paneer with a medley of spices - a South Indian
                      classic with a rustic touch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer milagu varuval</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer cubes stir-fried with fiery chilies - a South
                      Indian treat for spice lovers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Gobi 65</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy cauliflower florets coated in a tangy and spicy
                      masala.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Mushroom 65</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹200</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Spicy and flavorful mushrooms fried to perfection - a
                      vegetarian twist on a classic dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">HOP Paneer '65</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Our signature paneer dish, infused with a unique blend of
                      spices - a must-try for paneer enthusiasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Baby jack fruit varuval</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Tender baby jackfruit pieces stir-fried with a medley of
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
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Pallipalayam Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer cubes cooked in a rich and spicy gravy from the
                      Pallipalayam region of Tamil Nadu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              CONTINENTAL STARTERS
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      Crispy paneer & cheese sticks
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Melty cheese and golden-fried paneer in perfect harmony -
                      a delightful appetizer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Peri Peri Paneer skewers</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Succulent paneer cubes marinated in fiery peri peri spices
                      - a flavor explosion on a stick.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer popcorn</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Bite-sized paneer puffs bursting with flavor - a fun and
                      addictive snack.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Jalapeno cheese loaded fries</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹200</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy fries smothered in cheese and spicy jalapenos - a
                      cheesy, spicy indulgence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Crunchy fried baby corn</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Baby corn florets coated in a crispy batter - a delightful
                      vegetarian finger food.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Corn cheese bites</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Creamy corn and cheese wrapped in a crispy shell - a
                      cheesy and satisfying treat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Desi tucker corn</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Sweet corn kernels tossed in Indian spices - a classic and
                      comforting side dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      French fries - Classic / Peri peri
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹160</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Golden-fried potato perfection, available in classic or
                      fiery peri peri flavours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Deviled Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Spicy paneer filling stuffed in crispy fried wonton
                      wrappers - a unique and flavorful appetizer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Honey chilli fries</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy fries tossed in a sweet and spicy honey chili glaze
                      - a sweet and spicy delight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              CHINESE STARTERS
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Dragon Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Fiery and flavorful paneer tossed in a spicy dragon sauce
                      - a fiery adventure for your taste buds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      Paneer - chilli / Manchurian / Szechuan
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Classic paneer dishes prepared in your choice of styles:
                      Chilli (spicy), Manchurian (sweet & savory), or Szechuan
                      (tingling hot with Sichuan peppercorns).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Japan Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Tender paneer cooked in a Japanese-inspired soy sauce and
                      ginger marinade - a unique and flavorful experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Apollo Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy and spicy paneer bathed in a fiery red sauce - a
                      vegetarian take on the iconic Andhra dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      Mushroom - Chilli / Manchurian
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹200</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Flavourful mushrooms tossed in your preferred style:
                      Chilli (spicy) or Manchurian (sweet & savory).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Baby corn salt & pepper</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹200</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy baby corn florets seasoned with a simple yet
                      addictive salt and pepper mix - a light and flavorful side
                      dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Gobi - Chilli / Manchurian</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹200</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy cauliflower florets prepared in your choice of
                      style: Chilli (spicy) or Manchurian (sweet & savory).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              TANDOORI STARTERS
            </h1>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      Gourmet flavoured paneer tikka
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      An assortment of paneer tikka marinated in unique and
                      flavorful blends of spices, each bite a culinary
                      adventure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
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
                      Soft and creamy paneer tikka marinated in a rich and
                      velvety yogurt-based marinade, a melt-in-your-mouth
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Classic paneer tikka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a classic blend of yogurt,
                      spices, and herbs, a timeless favorite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Achari paneer tikka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a tangy and spicy pickle masala,
                      a burst of tangy flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Aatishi aloo</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Spicy and crispy potato wedges tossed in a fiery masala, a
                      vegetarian twist on a classic Indian snack.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Chaap tikka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Soya chunks marinated in a blend of yogurt, spices, and
                      herbs, then grilled to perfection, a meaty vegan
                      alternative.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Malai Paneer tikka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a rich and creamy marinade
                      infused with cream and nuts, a luxurious and flavorful
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Chettinadu paneer tikka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a fiery and flavorful Chettinad
                      masala, a South Indian spice explosion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Kalimiri</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a unique blend of black
                      peppercorns and other spices, a symphony of peppery
                      flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Jodhpuri paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a rich and fragrant Jodhpuri
                      masala, a taste of Rajasthan's culinary heritage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer sheek kebab</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Ground paneer mixed with spices and grilled to perfection,
                      a vegetarian kebab sensation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Ajwaini Paneer tikka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a blend of carom seeds (ajwain)
                      and other spices, a unique and flavorful twist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Baby jackfruit tikka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Tender baby jackfruit pieces marinated in a flavorful
                      blend of spices and grilled to perfection, a meaty
                      vegetarian delight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Chukundari Kurkure kebab</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      "Beetroot tikka marinated in a tangy and spicy marinade,
                      then coated in a crispy chickpea flour batter and fried, a
                      colorful and flavorful treat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Afghani paneer tikka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹250</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a creamy and aromatic
                      Afghan-inspired marinade, infused with nuts and dried
                      fruits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              PIZZAS
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">MARGHARITA</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A timeless favorite – a simple and delicious pizza with
                      tomato sauce and mozzarella cheese.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">DESI DUDE</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A taste of India – paneer tikka, caramelized onions, and
                      colorful bell peppers on a bed of tomato sauce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">FARMER'S CHOICE</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A vibrant medley of garden-fresh grilled vegetables,
                      olives, sweet corn, and a touch of heat from jalapenos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">GREEK PIZZA</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Mediterranean magic – grilled paneer, sun-kissed tomatoes,
                      kalamata olives, and a touch of basil pesto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">BBQ PANEER POP CORN</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A playful twist – our signature paneer popcorn tossed in
                      tangy BBQ sauce, with American corn for a delightful
                      textural contrast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              PASTAS
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">PENNE ARABIATA</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Spicy penne pasta tossed in a classic tomato sauce with a
                      kick of red chili flakes - a fiery and flavorful favorite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">PRIMAVERA</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹270</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Penne pasta with a vibrant mix of seasonal vegetables in a
                      light and flavorful sauce - a celebration of fresh
                      flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">INDIANA</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹270</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Penne pasta tossed in a creamy and flavorful
                      Indian-inspired sauce with aromatic spices - a taste of
                      Indian comfort food.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">CHETTINAD PASTA</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹270</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Penne pasta coated in a fiery Chettinad masala with bold
                      South Indian flavors - a spicy adventure for your palate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">CILANTRO PESTO</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹270</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A burst of freshness – a vibrant cilantro pesto sauce
                      coating al dente pasta, topped with a sprinkle of Parmesan
                      cheese.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">ALFREDO</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹280</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A rich and decadent classic – fettuccine pasta enveloped
                      in a creamy Alfredo sauce, with a touch of Parmesan cheese
                      for added richness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              BIRIYANI & PULAO
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Veg biriyani</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A symphony of fragrant rice, vegetables, and aromatic
                      spices, a vegetarian delight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      HOP Spl paneer tikka biriyani
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer tikka marinated in a blend of yogurt and spices,
                      layered with rice and cooked to perfection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">HOP Spl paneer '65 biriyani</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Crispy paneer '65 tossed with fragrant rice, a unique and
                      irresistible combination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer pulao</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A comforting dish of rice cooked with paneer, vegetables,
                      and aromatic spices
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kashmiri pulao</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Saffron-infused rice with dried fruits and nuts, a taste
                      of Kashmiri royalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Makai pulao</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹170</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Sweet corn kernels cooked with rice, vegetables, and
                      spices - a vibrant and flavorful vegetarian treat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Mushroom pulao</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹170</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Earthy mushrooms, rice, and aromatic spices come together
                      in this flavorful vegetarian pulao.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kaju pulao</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Cashews, rice, vegetables, and spices create a rich and
                      nutty pulao - a vegetarian indulgence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Jeera rice</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹150</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Simple yet flavorful basmati rice cooked with cumin seeds
                      and aromatics - a versatile side dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              INDIAN CURRIES
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Gourmet paneer methi malai</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹270</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A harmonious blend of creamy paneer, fragrant fenugreek
                      leaves, and a touch of cream, creating a culinary
                      masterpiece.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer pasandha</h4>
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
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Patiala shahi paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹270</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A royal indulgence – paneer cubes cooked in a creamy
                      tomato-based gravy, infused with aromatic spices and a
                      hint of sweetness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kofta darbari</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A vegetarian's delight – flavorful potato and paneer
                      koftas swimming in a rich and creamy gravy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer tikka masala</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      paneer cubes marinated in yogurt and spices, grilled to
                      perfection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kadai paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      paneer cubes cooked in a spicy and flavorful onion-tomato
                      gravy, with a touch of bell peppers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer Qasr e pukhtan</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A culinary gem from the land of Pashtoons – paneer cubes
                      cooked in a fragrant tomato-onion gravy, seasoned with
                      Kashmiri spices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Chettinadu paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A fiery and flavorful South Indian dish – paneer cubes
                      cooked in a rich and aromatic Chettinad masala gravy, with
                      a touch of coconut.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      Karuveppilai milagu paneer masala
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      paneer cubes cooked in a fragrant curry leaf and pepper
                      masala gravy, a culinary gem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kaloonji Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      paneer cubes cooked in a black cumin-infused gravy, with a
                      touch of onions and tomatoes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer butter masala</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹260</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Paneer cubes simmered in a rich and creamy tomato-based
                      gravy, a classic and beloved dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Himachal dhingiri dolmas</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Hollowed-out potatoes stuffed with a savory mix of
                      lentils, spices, and herbs, a unique and flavorful dish
                      from Himachal Pradesh.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Shabnami malai makhana</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Lotus seed kernels cooked in a rich and creamy sauce with
                      a touch of rose water, a delicate and fragrant treat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Malai makhana aur muttar</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Lotus seed kernels and green peas cooked in a creamy
                      sauce, a comforting and flavorful vegetarian dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Dal palak</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Lentils simmered in a creamy spinach gravy, a nutritious
                      and delicious vegetarian option.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Bhemisal paneer hundi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹250</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A Rajasthani specialty – paneer cubes cooked in a
                      yogurt-based gravy, flavored with aromatic spices and a
                      touch of besan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer makhmali la jawab</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A velvety smooth delight – paneer cubes cooked in a creamy
                      cashew-nut gravy, infused with delicate spices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Methi chaman bahar</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A symphony of flavors – paneer cubes cooked with fenugreek
                      leaves, onions, tomatoes, and spices, creating a culinary
                      masterpiece.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer bharta</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A rustic and flavorful dish – roasted paneer mashed with
                      onions, tomatoes, and spices, a true taste of India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Theen zaika da Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹270</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A trio of flavors – paneer cubes cooked in three different
                      gravies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Palak Paneer</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A healthy and flavorful dish – paneer cubes cooked in a
                      creamy spinach gravy, infused with garlic and ginger.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer kolhapuri</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A spicy and flavorful Maharashtrian dish – paneer cubes
                      cooked in a fiery Kolhapuri masala gravy, with a hint of
                      tamarind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Veg jhalfrezi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Mixed vegetables stir-fried in a spicy and tangy sauce, a
                      colorful and flavorful dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kadai subzi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A medley of vegetables cooked in a spicy and flavorful
                      gravy, a hearty and satisfying vegetarian meal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Subzi diwani hundi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A potpourri of vegetables cooked in a rich and flavorful
                      gravy, a vegetarian feast fit for a king.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Dal bhukara</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A hearty and flavorful dal cooked with black lentils,
                      tomatoes, and spices, a Punjabi staple.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Dal tadka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Lentil soup tempered with spices and herbs, a simple yet
                      flavorful dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Dal fry</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Fried lentils seasoned with spices and herbs, a comforting
                      and satisfying vegetarian meal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Lasooni dal</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Lentils cooked with garlic and spices, a flavorful and
                      aromatic dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              INDIAN BREADS
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Roti</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹50</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A staple flatbread in Indian cuisine, made from whole
                      wheat flour and cooked on a tawa (griddle).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Butter roti</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹65</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A variation of roti, brushed with ghee or butter for added
                      richness and flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Methi roti</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹60</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A savory roti infused with the earthy aroma and flavor of
                      methi (fenugreek) leaves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Garlic roti</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹65</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A fragrant and garlicky roti, perfect for pairing with
                      curries or as a snack.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Naan</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹50</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A leavened flatbread from North India, cooked in a tandoor
                      (clay oven) for a smoky flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Butter Naan</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹65</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A classic naan, brushed with butter for a rich and buttery
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
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Garlic naan</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹65</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A flavorful naan infused with garlic, adding a pungent and
                      delicious twist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Chilli cheese Naan</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹80</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A spicy and cheesy naan, filled with a blend of chilies
                      and cheese.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Amristari Naan</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹90</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A thick and fluffy naan from Amritsar, Punjab, known for
                      its soft texture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kashmiri Naan</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹90</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A naan infused with dried fruits and nuts, adding a sweet
                      and nutty flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Onion kulcha</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹100</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A stuffed flatbread filled with a savory mixture of onions
                      and spices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer kulcha</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹100</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A stuffed flatbread filled with a creamy and flavorful
                      paneer (Indian cottage cheese) filling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Lacha paratha</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A flaky and layered flatbread, made by repeatedly folding
                      and rolling the dough.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer paratha</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A stuffed paratha filled with a paneer (Indian cottage
                      cheese) filling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Methi paratha</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹110</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A savory paratha infused with the earthy aroma and flavor
                      of methi (fenugreek) leaves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer kulcha</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A leavened flatbread from North India, stuffed with a
                      flavorful paneer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              DOSA VARIETIES
            </h1>
            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer kari dosa</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A crispy crepe made from fermented rice and lentil batter,
                      filled with a spicy and flavorful paneer (Indian cottage
                      cheese) curry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Chaap kari dosa</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹170</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A crispy crepe made from fermented rice and lentil batter,
                      filled with a spicy and flavorful chaap (soy chunks)
                      curry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paneer tikka masala dosa</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A crispy crepe made from fermented rice and lentil batter,
                      filled with a creamy and aromatic paneer tikka masala
                      curry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Karuveppilai paneer dosa</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A crispy crepe made from fermented rice and lentil batter,
                      filled with a fragrant and flavorful paneer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Chilli cheese dosa</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A crispy crepe made from fermented rice and lentil batter,
                      filled with a spicy and cheesy mixture of chilies and
                      cheese.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              RICE & NOODLES
            </h1>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">FRIED RICE (VEG / PANEER)</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹160/190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Classic stir-fried rice with vegetables or paneer, perfect
                      for a quick and flavorful meal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">SCHEZWAN RICE (VEG/ PANEER)</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹170/200</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Spicy and tangy fried rice flavored with Szechuan
                      peppercorns and chilies, featuring vegetables or paneer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">TERIYAKI PANEER FRIED RICE</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Savory and sweet fried rice with paneer marinated in a
                      teriyaki sauce, offering a Japanese twist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">RAINBOW FRIED RICE</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹230</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A colorful and fun take on fried rice, featuring various
                      vegetables for a vibrant and flavorful dish.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      SINGAPORE FRIED RICE (VEG / PANEER)
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹220/250</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Fried rice with a Southeast Asian flair, featuring
                      vegetables or paneer, shrimp paste, and often a fried egg.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">BURNT GARLIC FRIED RICE</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹200</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Aromatic fried rice with a smoky flavor from burnt garlic,
                      perfect for garlic lovers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">GOBI FRIED RICE</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹200</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A vegetarian fried rice featuring cauliflower (gobi) as
                      the main ingredient, offering a healthy and flavorful
                      option.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      TRIPLE SZECHUAN FRIED RICE (VEG / PANEER)
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210/240</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A fiery and flavorful fried rice packed with Szechuan
                      peppercorns, chilies, and vegetables or paneer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Chilli cheese dosa</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A crispy crepe made from fermented rice and lentil batter,
                      filled with a spicy and cheesy mixture of chilies and
                      cheese.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      SZECHUAN NOODLES (VEG / PANEER)
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180/210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Spicy and tangy stir-fried noodles with Szechuan
                      peppercorns and chilies, featuring vegetables or paneer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              BEVERAGES
            </h1>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      Ice cream shakes - Vanila /Choco / strawberry / Butter
                      scotch
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Enjoy a creamy and delicious milkshake made with your
                      choice of ice cream flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Oreo Shake</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹140</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Classic vanilla ice cream blended with crushed Oreos for a
                      cookies and cream delight.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Kit kat shake</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹140</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Chocolate ice cream blended with Kit Kat pieces for a
                      crunchy and chocolatey treat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Cashew date khoa shake</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹170</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A rich and creamy shake featuring cashews, dates, and khoa
                      (reduced milk solids) for a unique Indian twist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Paan shake</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹140</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Capture the essence of paan (betel leaf) in a refreshing
                      and flavorful shake.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Banana Peanut butter shake</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹150</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A classic combination of creamy banana and peanut butter
                      for a satisfying and nostalgic taste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Carrot coconaka</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹140</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A healthy and delicious blend of carrots, chocolate syrup,
                      and milk for a nutritious treat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Hop special Lassi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹170</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A refreshing and creamy yogurt-based drink with a unique
                      HOP twist.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Lime soda - sweet / salt</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹80</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A refreshing and fizzy drink with a touch of sweetness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Mango Lassi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹150</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      The sweetness of mangoes blended with yogurt for a classic
                      and tropical beverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Sweet Lassi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹140</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A delightful and creamy yogurt drink with a touch of
                      sweetness.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Mint mojito</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹110</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A refreshing twist on the classic Lassi, infused with the
                      coolness of mint.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Blue Lagoon</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A vibrant blue mocktail with a sweet and citrusy flavor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Watermelon mojito</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A refreshing mocktail with watermelon, mint, and lime for
                      a summery taste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Strawberry mojito</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A sweet and tangy mocktail featuring fresh strawberries
                      and mint.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Pomegranate mojito</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A unique and flavorful mocktail with the tartness of
                      pomegranate and the coolness of mint.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Blueberry mojito</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹120</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      Enjoy the sweet and juicy taste of blueberries in this
                      refreshing mocktail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              DESSERTS
            </h1>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Royal Falooda</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>
                      A chilled dessert with noodles, jelly, ice cream, and
                      nuts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Gulab jamun with ice cream</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>Sweet dumplings served warm with ice cream.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Sizzling brownie</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹210</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>Warm brownie with ice cream, served sizzling hot.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      Hop Special Basundhi Dil pasand
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹160</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>Rich, creamy Indian dessert (nuts & cardamom).</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Banana Toffee</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹180</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>Caramelized bananas with ice cream & toffee sauce.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">Hop special Pot Malai kulfi</h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹190</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>Dense Indian ice cream (nuts & cardamom) in a pot.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="menu-list-mobile" style={{ display: "flex" }}>
                <div className="menu-product-image">
                  <img
                    src={"assets/home-page-menus/HOP Icon.png"}
                    alt="menu-product-img"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="menu-list-2">
                  <div className="menu-products">
                    <h4 className="menu-title">
                      Choice of ice cream with nuts Vanila /Choco / strawberry /
                      Butter scotch /mango
                    </h4>
                    <hr className="hr1"></hr>
                    <h3 className="menu-price">₹110</h3>
                  </div>
                  <div className="menu-products-description">
                    <p>Pick your favorite ice cream flavor with nuts.</p>
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

export default MenuList;

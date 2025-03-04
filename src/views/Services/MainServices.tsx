import "./MainServices.css";

const MainServices = () => {
    return (
        <>
            <h2 className="main-services-heading">Main Services</h2>
            <section className="main-services">
                <div className="container">
                    <div className="row main-service-first-row">
                        <div className="col-md-4 left-animation">
                            <div className="main-service-div">
                                <div className="main-service-image">
                                    <img src={'assets/images/adult-barber-washing-old-man-hair-backwash.jpg'} alt="img" />
                                </div>
                                <div className="main-service-text">
                                    Mens Facial
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="main-service-div">
                                <div className="main-service-image">
                                    <img src={'assets/images/man-checking-phone-while-getting-haircut.jpg'} alt="img" />
                                </div>
                                <div className="main-service-text">
                                    Mens Hair Cut
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 right-animation">
                            <div className="main-service-div">
                                <div className="main-service-image">
                                    <img src={'assets/images/medium-shot-man-getting-groomed.jpg'} alt="img" />
                                </div>
                                <div className="main-service-text">
                                    Mens Beard Set
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row main-service-second-row">
                        <div className="col-md-4 left-animation">
                            <div className="main-service-div">
                                <div className="main-service-image">
                                    <img src={'assets/images/kid-getting-haircut-front-view.jpg'} alt="img" />
                                </div>
                                <div className="main-service-text">
                                    Children Haircut
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="main-service-div">
                                <div className="main-service-image">
                                    <img src={'assets/images/hair-stylist-washing-his-client-s-hair.jpg'} alt="img" />
                                </div>
                                <div className="main-service-text">
                                    Head Massage
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 right-animation">
                            <div className="main-service-div">
                                <div className="main-service-image">
                                    <img src={'assets/images/portrait-handsome-bearded-young-man-isolated-gray-wall.jpg'} alt="img" />
                                </div>
                                <div className="main-service-text">
                                    Hair Highlights
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainServices;
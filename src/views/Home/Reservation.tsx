import React, { useState } from "react";
import "./Reservation.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

const Reservation = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phoneNumber) {
      toast.error("Name and phone number are required");
      return;
    }
    emailjs.init("PlDYeat8nnTxmjHTY");

    const emailParams = {
      name,
      phoneNumber,
      selectedOption,
      selectedDate,
      selectedTime,
      message,
    };

    emailjs
      .send(
        "service_2tcsga2",
        "template_amsx9yx",
        emailParams,
        "PlDYeat8nnTxmjHTY"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Table booked successfully!");
          setName("");
          setPhoneNumber("");
          setSelectedOption("");
          setSelectedDate("");
          setSelectedTime("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Table booking failed");
        }
      );
  };

  return (
    <>
      <>
        <section className="reservation-section" id="book-a-table">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="reservation">
                  <h1
                    className="reservation-image-header-1"
                    style={{ fontFamily: "'Forum', serif" }}
                  >
                    Online Reservation
                  </h1>
                  <h6 style={{ color: "white" }}>
                    Ready to experience the magic of House of Paneer?
                  </h6>
                  <p>
                    Reserve your table now for an unforgettable dining
                    experience with the best paneer dishes in Madurai.
                  </p>
                  <h6 style={{ color: "white" }}>
                    Can't Make It To Our Multicuisine Restaurant?
                  </h6>
                  <p>
                    Go with the trend of food near me & Enjoy our delicious
                    offerings from the comfort of your home with our convenient
                    home delivery service from our Authentic Indian Cuisine
                  </p>
                  <form onSubmit={handleSubmit} style={{ marginTop: "45px" }}>
                    <div style={{ display: "flex" }}>
                      <div className="row">
                        <div className="col-md-6">
                          <label style={{ width: "100%" }}>
                            <input
                              className="form-name"
                              type="text"
                              placeholder="Your Name"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </label>
                        </div>
                        <div className="col-md-6">
                          <label style={{ width: "100%" }}>
                            <input
                              className="form-email"
                              type="text"
                              name="phoneNumber"
                              placeholder="Phone Number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-second-div">
                      <div className="row">
                        <div className="col-md-4">
                          <label className="grape-label">
                            <BsFillPersonFill />
                            <select
                              value={selectedOption}
                              name="selectedOption"
                              onChange={(e) =>
                                setSelectedOption(e.target.value)
                              }
                              style={{ width: "80%" }}
                            >
                              <option value="No of Guests">Guests</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                            </select>
                          </label>
                        </div>
                        <div className="col-md-4">
                          <label className="laebl-date">
                            <input
                              type="date"
                              name="selectedDate"
                              placeholder="YYYY-MM-DD"
                              value={selectedDate}
                              onChange={(e) => setSelectedDate(e.target.value)}
                              style={{ color: "white" }}
                            />
                          </label>
                        </div>
                        <div className="col-md-4">
                          <label
                            className="label-select-time"
                            // style={{ marginLeft: "45px" }}
                          >
                            <BsClock />
                            <select
                              name="selectedTime"
                              value={selectedTime}
                              onChange={(e) => setSelectedTime(e.target.value)}
                            >
                              <option value="11:00 AM">11:00 AM</option>
                              <option value="12:00 PM">12:00 PM</option>
                              <option value="01:00 PM">01:00 PM</option>
                              <option value="02:00 PM">02:00 PM</option>
                              <option value="03:00 PM">03:00 PM</option>
                              <option value="06:00 PM">06:00 PM</option>
                              <option value="07:00 PM">07:00 PM</option>
                              <option value="08:00 PM">08:00 PM</option>
                              <option value="09:00 PM">09:00 PM</option>
                              <option value="10:00 PM">10:00 PM</option>
                              <option value="11:00 PM">11:00 PM</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <textarea
                        style={{ marginTop: "25px" }}
                        value={message}
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                      >
                        Message
                      </textarea>
                    </div>
                    <input type="submit" value="Book a table" />
                  </form>
                  {/* <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="toEmail"
                      placeholder="To Email"
                      value={toEmail}
                      onChange={(e) => setToEmail(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                    <textarea
                      placeholder="Message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                    <button type="submit">Send</button>
                  </form> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="reservation-image">
                  <h1
                    className="reservation-image-header"
                    style={{ fontFamily: "'Forum', serif" }}
                  >
                    Our Delivery Partners
                  </h1>
                  <a
                    href="https://www.swiggy.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={"assets/images/Swiggy-Emblem-650x366 1.webp"}
                      alt="swiggy-img"
                      style={{ marginLeft: "18%" }}
                    />
                  </a>
                  <a
                    href="https://www.zomato.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={"assets/images/Swiggy-Emblem-650x366 2.webp"}
                      alt="zomato-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </>
    </>
  );
};

export default Reservation;

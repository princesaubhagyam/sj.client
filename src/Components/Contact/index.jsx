import React from "react";
import { useState } from "react";
import { contactHandler } from "../../service/auth.service";
export default function Contact() {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNo, setPhoneNo] = useState("");

  const [msg, setMsg] = useState("");

  const [errormsg, setErrorMsg] = useState("");

  const [selected, setSelected] = useState(false);

  const validation = () => {
    let formIsValid = true;
    if (!firstName && !lastName && !email && !phoneNo && !msg) {
      formIsValid = false;
    }
    return formIsValid;
  };
  const handleSubmit = (e) => {
    setErrorMsg("");
    if (validation() === true) {
      setSelected(true);
      postData(e);
      setErrorMsg(
        "Your message has been successfully sent. We will contact you very soon!"
      );
    } else {
      setErrorMsg("Please fill in required fields !");
    }
    e.preventDefault();
  };
  const postData = async (event) => {
    event.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      phoneNo,
      msg,
    };
    const response = await contactHandler(body);
    if (response.success) {
      setSelected(false);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMsg("");
      setPhoneNo("");
    } else {
      setSelected(false);
    }
  };

  return (
    <>
      <main className="main-wrapper">
        {/* Start Breadcrumb Area  */}
        <div className="axil-breadcrumb-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-8">
                <div className="inner">
                  <ul className="axil-breadcrumb">
                    <li className="axil-breadcrumb-item">
                      <a href="index-2.html">Home</a>
                    </li>
                    <li className="separator" />
                    <li
                      className="axil-breadcrumb-item active"
                      aria-current="page"
                    >
                      Contact
                    </li>
                  </ul>
                  <h1 className="title">Contact With Us</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Area  */}
        {/* Start Contact Area  */}
        <div className="axil-contact-page-area axil-section-gap">
          <div className="container">
            <div className="axil-contact-page">
              <div className="row row--30">
                <div className="col-lg-8">
                  <div className="contact-form">
                    <h3 className="title mb--10">We're Here To Help!</h3>
                    <p>
                      If you’ve got great products your making or looking to
                      work with us then drop us a line.
                    </p>
                    <form
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                      className="axil-contact-form"
                    >
                      <div className="row row--10">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="contact-name">
                              First Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              value={firstName}
                              placeholder="Enter first name"
                              onChange={(e) => [setFirstName(e.target.value)]}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="contact-phone">
                              Last Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              value={lastName}
                              placeholder="Enter last name"
                              onChange={(e) => [setLastName(e.target.value)]}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="contact-email">
                              E-mail <span>*</span>
                            </label>
                            <input
                              type="email"
                              value={email}
                              placeholder="Enter email"
                              onChange={(e) => [setEmail(e.target.value)]}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="contact-email">
                              Phone no <span>*</span>
                            </label>
                            <input
                              type="text"
                              value={phoneNo}
                              placeholder="Enter phone no"
                              onChange={(e) => [setPhoneNo(e.target.value)]}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="contact-message">
                              Your Message
                            </label>
                            <textarea
                              cols={1}
                              rows={2}
                              value={msg}
                              placeholder="Enter message"
                              onChange={(e) => [setMsg(e.target.value)]}
                            />
                          </div>
                        </div>
                        <div className="col-12">{errormsg}</div>
                        <div className="col-12">
                          <div className="form-group mb--0">
                            <button
                              name="submit"
                              type="submit"
                              id="submit"
                              className="axil-btn btn-bg-primary"
                            >
                              {!selected ? "Send Message" : "Loading"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-location mb--40">
                    <h4 className="title mb--20">
                      We look forward to hearing from you!
                    </h4>
                    <span className="address mb--20">
                      Have a question about our services? Want to see if your
                      particular project is one we can help with? We'd love to
                      hear from you! To get a free quote, or if you have
                      questions or special requests, just drop us a line.
                    </span>
                  </div>

                  <div className="opening-hour">
                    <h4 className="title mb--20">Opening Hours:</h4>
                    <p>
                      Mon 09:00 am – 07:00 pm <br />
                      Tue 09:00 am – 07:00 pm <br />
                      Wed 09:00 am – 07:00 pm <br />
                      Thu 09:00 am – 07:00 pm <br />
                      Fri 09:00 am – 07:00 pm <br />
                      Sat 09:00 am – 07:00 pm <br />
                      Sun By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Start Google Map Area  */}
            <div className="axil-google-map-wrap axil-section-gap pb--0">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title="googlemap"
                    width={1080}
                    height={500}
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7387.9123359888235!2d70.383097!3d22.203772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4df8c215740b0d20!2sSardar%20Jewellers!5e0!3m2!1sen!2sus!4v1670655971257!5m2!1sen!2sus"
                  />
                </div>
              </div>
            </div>
            {/* End Google Map Area  */}
          </div>
        </div>
        {/* End Contact Area  */}
      </main>
    </>
  );
}

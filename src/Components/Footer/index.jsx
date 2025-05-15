import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="axil-footer-area footer-style-2">
        {/* Start Footer Top Area  */}
        <div className="footer-top separator-top">
          <div className="container">
            <div className="row">
              {/* Start Single Widget  */}
              <div className="col-lg-3 col-sm-6">
                <div className="axil-footer-widget">
                  <img src="img/logomain.png" width={200} alt="Site Logo" />
                  {/* <div class="logo mb--30">
                      <a href="index.html">
                          <img class="light-logo" src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" alt="Logo Images">
                      </a>
                  </div> */}
                  <div className="inner">
                    <p>
                      Sardar Jewellers have a more than 10 year experience and
                      expertise in wonderful worlds of jewelry.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Widget  */}
              <div className="col-lg-3 col-sm-6">
                <div className="axil-footer-widget">
                  <h5 className="widget-title">Contact us</h5>
                  <div className="inner">
                    <p>
                      Grain Market Road,
                      <br /> Opp.SBI ATM, Kalavad, Gujarat, India
                    </p>
                    <ul className="support-list-item">
                      <li>
                        Mail:{" "}
                        <a href="mailto:sardarjewellers831@gmail.com">
                          sardarjewellers831@gmail.com
                        </a>
                      </li>
                      <li>
                        Phone: <a href="tel:919377009160">(+91)9377009160</a>
                      </li>
                      {/* <li><i class="fal fa-map-marker-alt"></i> 685 Market Street,  <br> Las Vegas, LA 95820, <br> United States.</li> */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Start Single Widget  */}
              <div className="col-lg-3 col-sm-6">
                <div className="axil-footer-widget">
                  <h5 className="widget-title">Pages</h5>
                  <div className="inner">
                    <ul>
                      <li>
                        <Link to="/goldproducts">Gold Collection</Link>
                      </li>
                      <li>
                        <Link to="/sliverproducts">Sliver Collection</Link>
                      </li>
                      <li>
                        <Link to="/about">About us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Widget  */}
              {/* Start Single Widget  */}
              <div className="col-lg-3 col-sm-6">
                <div className="axil-footer-widget">
                  <h5 className="widget-title">Quick Link</h5>
                  <div className="inner">
                    <ul>
                      <li>
                        <a>Privacy Policy</a>
                      </li>
                      <li>
                        <a>Terms Of Use</a>
                      </li>
                      <li>
                        <a>FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Single Widget  */}
              {/* Start Single Widget  */}

              {/* End Single Widget  */}
            </div>
          </div>
        </div>
        {/* End Footer Top Area  */}
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-default separator-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="social-share">
                  <a href="https://www.facebook.com/sardarjewellers.kalavad">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/sardar_jewellers_kalavad/">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="copyright-left d-flex flex-wrap justify-content-center">
                  <ul className="quick-link">
                    <li>
                      © 2022. All Rights Reserved by{" "}
                      <a target="_blank" href="http://www.sardarjewellers.in/">
                        Sardar Jewellers
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="copyright-left d-flex flex-wrap justify-content-center">
                  <ul className="quick-link">
                    <li>
                      Made by{" "}
                      <a
                        target="_blank"
                        href="https://www.acquirewebsolution.com/"
                      >
                        Acquire Web Solution Pvt. Ltd.
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Copyright Area  */}
      </footer>
    </>
  );
}

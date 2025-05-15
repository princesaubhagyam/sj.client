import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  goldencategoryData,
  slivercategoryData,
} from "../../service/auth.service";
import { listBody } from "../../utils/helper";

export default function Navbar() {
  const [categoriesData, setcategoriesData] = useState([]);
  const [slivercategoriesData, setslivercategoriesData] = useState([]);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    getcategoryData();
    getslivercategoryData();
  }, []);

  const getcategoryData = async () => {
    const response = await goldencategoryData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setcategoriesData(response);
    }
  };

  const getslivercategoryData = async () => {
    const response = await slivercategoryData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setslivercategoriesData(response);
    }
  };

  const openMenu = () => {
    setMenu((prevCheck) => !prevCheck);
  };

  return (
    <>
      <header className="header axil-header header-style-5">
        {/* Start Mainmenu Area  */}
        <div id="axil-sticky-placeholder" />
        <div className="axil-mainmenu">
          <div className="container">
            <div className="header-navbar">
              <div className="header-brand">
                <Link to="/" className="logo logo-dark">
                  <img src="img/logomain.png" width={150} alt="Site Logo" />
                </Link>
                <a className="logo logo-light">
                  <img
                    src="assets/images/logo/logo-light.png"
                    width={150}
                    alt="Site Logo"
                  />
                </a>
              </div>
              <div
                className={menu ? "header-main-nav open" : "header-main-nav"}
              >
                {/* Start Mainmanu Nav */}
                <nav className="mainmenu-nav">
                  <button
                    className="mobile-close-btn mobile-nav-toggler"
                    onClick={() => openMenu()}
                  >
                    <i className="fas fa-times" />
                  </button>
                  <div className="mobile-nav-brand">
                    <a className="logo">
                      <img src="img/logomain.png" alt="Site Logo" />
                    </a>
                  </div>
                  <ul className="mainmenu">
                    <li>
                      <Link to="/" onClick={() => setMenu(false)}>
                        Home
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/goldproducts" onClick={() => setMenu(false)}>
                        Gold
                      </Link>
                      <ul className="axil-submenu">
                        {categoriesData?.map((card) => {
                          return (
                            <li key={card._id}>
                              <Link
                                to={`/goldproducts?cid=${card._id}`}
                                onClick={() => setMenu(false)}
                              >
                                {card.goldenName}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/sliverproducts" onClick={() => setMenu(false)}>
                        Sliver
                      </Link>
                      <ul className="axil-submenu">
                        {slivercategoriesData?.map((card) => {
                          return (
                            <li key={card._id}>
                              <Link
                                to={`/sliverproducts?cid=${card._id}`}
                                onClick={() => setMenu(false)}
                              >
                                {card.productName}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => setMenu(false)}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/career" onClick={() => setMenu(false)}>
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => setMenu(false)}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* End Mainmanu Nav */}
              </div>

              <div className="social-share" style={{ paddingLeft: "20px" }}>
                <a target={"_blank"} title="Facebook" href="https://www.facebook.com/sardarjewellers.kalavad">
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  target={"_blank"}
                  href="https://www.instagram.com/sardar_jewellers_kalavad/"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a className="axil-mobile-toggle">
                  <button
                    className="menu-btn mobile-nav-toggler"
                    onClick={() => openMenu()}
                  >
                    <i className="flaticon-menu-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Mainmenu Area */}
      </header>
    </>
  );
}

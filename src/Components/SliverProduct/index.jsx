import React, { useEffect, useState } from "react";
import { productsHndlerData } from "../../service/auth.service";
import { listBody } from "../../utils/helper";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function SliverProduct() {
  const [productData, setproductData] = useState([]);
  useEffect(() => {
    getcategoryData();
  }, []);

  const getcategoryData = async () => {
    // const response = await productsHndlerData(
    //   listBody({
    //     where: {
    //       isActive: true,
    //     },
    //     perPage: 1000,
    //   })
    // );
    // if (response) {
    //   setproductData(response);
    // }
  };
  return (
    <>
      <main className="main-wrapper">
        {/* Start Shop Area  */}
        <div className="axil-single-product-area axil-section-gap pb--0 bg-color-white">
          <div className="single-product-thumb mb--40">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mb--40">
                  <div className="row">
                    <div className="col-lg-10 order-lg-2">
                      <div className="single-product-thumbnail-wrap zoom-gallery">
                        <div className="single-product-thumbnail product-large-thumbnail-3 axil-product">
                          <div className="thumbnail">
                            <a
                              href="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-big-01.png"
                              className="popup-zoom"
                            >
                              <img
                                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-big-01.png"
                                alt="Product Images"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="label-block">
                          <div className="product-badget">20% OFF</div>
                        </div>
                        <div className="product-quick-view position-view">
                          <a
                            href="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-big-01.png"
                            className="popup-zoom"
                          >
                            <i className="far fa-search-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mb--40">
                  <div className="single-product-content">
                    <div className="inner">
                      <h2 className="product-title">3D™ wireless headset</h2>
                      <ul className="product-meta">
                        <li>
                          <i className="fal fa-check" />
                          In stock
                        </li>
                        <li>
                          <i className="fal fa-check" />
                          Free delivery available
                        </li>
                        <li>
                          <i className="fal fa-check" />
                          Sales 30% Off Use Code: MOTIVE30
                        </li>
                      </ul>
                      <p className="description">
                        In ornare lorem ut est dapibus, ut tincidunt nisi
                        pretium. Integer ante est, elementum eget magna.
                        Pellentesque sagittis dictum libero, eu dignissim
                        tellus.
                      </p>
                      <div className="product-variations-wrapper">
                        {/* End Product Variation  */}
                      </div>
                      {/* Start Product Action Wrapper  */}

                      {/* End Product Action Wrapper  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .single-product-thumb */}
          <div className="woocommerce-tabs wc-tabs-wrapper bg-vista-white">
            <div className="container">
              <ul className="nav tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    href="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item " role="presentation">
                  <a
                    id="additional-info-tab"
                    data-bs-toggle="tab"
                    href="#additional-info"
                    role="tab"
                    aria-controls="additional-info"
                    aria-selected="false"
                  >
                    Additional Information
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div className="product-desc-wrapper">
                    <div className="row">
                      <div className="col-lg-6 mb--30">
                        <div className="single-desc">
                          <h5 className="title">Specifications:</h5>
                          <p>
                            We’ve created a full-stack structure for our working
                            workflow processes, were from the funny the century
                            initial all the made, have spare to negatives. But
                            the structure was from the funny the century rather,
                            initial all the made, have spare to negatives.
                          </p>
                        </div>
                      </div>
                      {/* End .col-lg-6 */}
                      <div className="col-lg-6 mb--30">
                        <div className="single-desc">
                          <h5 className="title">Care &amp; Maintenance:</h5>
                          <p>
                            Use warm water to describe us as a product team that
                            creates amazing UI/UX experiences, by crafting
                            top-notch user experience.
                          </p>
                        </div>
                      </div>
                      {/* End .col-lg-6 */}
                    </div>
                    {/* End .row */}
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="pro-des-features">
                          <li className="single-features">
                            <div className="icon">
                              <img
                                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-thumb/icon-3.png"
                                alt="icon"
                              />
                            </div>
                            Easy Returns
                          </li>
                          <li className="single-features">
                            <div className="icon">
                              <img
                                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-thumb/icon-2.png"
                                alt="icon"
                              />
                            </div>
                            Quality Service
                          </li>
                          <li className="single-features">
                            <div className="icon">
                              <img
                                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-thumb/icon-1.png"
                                alt="icon"
                              />
                            </div>
                            Original Product
                          </li>
                        </ul>
                        {/* End .pro-des-features */}
                      </div>
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .product-desc-wrapper */}
                </div>
                <div
                  className="tab-pane fade"
                  id="additional-info"
                  role="tabpanel"
                  aria-labelledby="additional-info-tab"
                >
                  <div className="product-additional-info">
                    <div className="table-responsive">
                      <table>
                        <tbody>
                          <tr>
                            <th>Stand Up</th>
                            <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                          </tr>
                          <tr>
                            <th>Folded (w/o wheels) </th>
                            <td>32.5″L x 18.5″W x 16.5″H</td>
                          </tr>
                          <tr>
                            <th>Folded (w/ wheels) </th>
                            <td>32.5″L x 24″W x 18.5″H</td>
                          </tr>
                          <tr>
                            <th>Door Pass Through </th>
                            <td>24</td>
                          </tr>
                          <tr>
                            <th>Frame </th>
                            <td>Aluminum</td>
                          </tr>
                          <tr>
                            <th>Weight (w/o wheels) </th>
                            <td>20 LBS</td>
                          </tr>
                          <tr>
                            <th>Weight Capacity </th>
                            <td>60 LBS</td>
                          </tr>
                          <tr>
                            <th>Width</th>
                            <td>24″</td>
                          </tr>
                          <tr>
                            <th>Handle height (ground to handle) </th>
                            <td>37-45″</td>
                          </tr>
                          <tr>
                            <th>Wheels</th>
                            <td>Aluminum</td>
                          </tr>
                          <tr>
                            <th>Size</th>
                            <td>S, M, X, XL</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* woocommerce-tabs */}
        </div>
        {/* End Shop Area  */}

        {/* End Axil Newsletter Area  */}
      </main>
    </>
  );
}

import React, { useEffect, useState } from "react";
import {
  goldencategoryData,
  goldProductsListData,
  slivercategoryData,
  sliverProductListData,
  bannerHndlerData,
} from "../../service/auth.service";
import { listBody, URL } from "../../utils/helper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
export default function Home() {
  const [categoriesData, setcategoriesData] = useState([]);
  const [goldData, setgoldData] = useState([]);
  const [sliverData, setSliverData] = useState([]);
  const [slivercategoriesData, setSlivercategoriesData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    getcategoryData();
    getGoldData();
    getSliverData();
    getSlivercategoryData();
    getBannerData();
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
  const getSlivercategoryData = async () => {
    const response = await slivercategoryData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setSlivercategoriesData(response);
    }
  };
  const getGoldData = async () => {
    const response = await goldProductsListData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setgoldData(response);
    }
  };
  const getSliverData = async () => {
    const response = await sliverProductListData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setSliverData(response);
    }
  };
  const getBannerData = async () => {
    const response = await bannerHndlerData(
      listBody({
        where: {
          isActive: true,
        },
        perPage: 1000,
      })
    );
    if (response) {
      setBannerData(response);
    }
  };
  return (
    <>
      <div>
        <main className="main-wrapper">
          {/* Start Slider Area */}
          {/* <div className="axil-main-slider-area main-slider-style-7 bg_image--8">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-sm-8">
                  <div className="main-slider-content">
                    <span className="subtitle">
                      <i className="fas fa-fire" />
                      Hot Deal In Diamond
                    </span>
                    <h1 className="title maintitle">
                      Exclusive Design Collection
                    </h1>
                  
                    <div className="shop-btn">
                      <Link
                        className="axil-btn btn-bg-secondary right-icon"
                        to="/goldproducts"
                      >
                        Browse Item <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <Carousel
            autoPlay
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            swipeable={false}
            // transitionTime={2}
          >
            {bannerData.map((data) => {
              return (
                <div key={data._id}>
                  <img src={data.bannerImg} />
                </div>
              );
            })}
          </Carousel> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {bannerData.length > 0 &&
              bannerData.map((data, index) => (
                <SwiperSlide>
                  <img className="banner" alt="bg" src={data.bannerImg} />
                </SwiperSlide>
              ))}
          </Swiper>
          {/* End Slider Area */}

          <div className="axil-categorie-area bg-color-white axil-section-gapcommon">
            <div className="container">
              <div className="section-title-wrapper">
                <h2 className="title">New Arrivals</h2>
                <span className="title-highlighter highlighter-primary">
                  Know More About Our Latest Collection
                </span>
              </div>
              <div className="categrie-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide row">
                {categoriesData?.map((card) => {
                  return (
                    <div
                      className="slick-single-layout col col-lg-3"
                      key={card._id}
                    >
                      <div className="categrie-product">
                        <Link to={`goldproducts?cid=${card._id}`}>
                          <img
                            className="img-fluid"
                            src={URL + card.goldenImg}
                            alt="pc"
                          />
                          <h6 className="cat-title">{card.goldenName}</h6>
                        </Link>
                      </div>
                    </div>
                  );
                })}
                {slivercategoriesData?.map((card) => {
                  return (
                    <div
                      className="slick-single-layout col col-lg-3"
                      key={card._id}
                    >
                      <div className="categrie-product">
                        <Link to={`goldproducts?cid=${card._id}`}>
                          <img
                            className="img-fluid"
                            src={URL + card.productImg}
                            alt="pc"
                          />
                          <h6 className="cat-title">{card.productName}</h6>
                        </Link>
                      </div>
                    </div>
                  );
                })}

                {categoriesData?.length === 0 ? (
                  <div className="text-center pt--30">
                    <svg
                      width="80"
                      height="80"
                      fill="#0308d0"
                      viewBox="0 0 135 140"
                      xmlns="http://www.w3.org/2000/svg"
                      data-testid="bars-svg"
                    >
                      <rect y="10" width="15" height="120" rx="6">
                        <animate
                          attributeName="height"
                          begin="0.5s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="y"
                          begin="0.5s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                      <rect x="30" y="10" width="15" height="120" rx="6">
                        <animate
                          attributeName="height"
                          begin="0.25s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="y"
                          begin="0.25s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                      <rect x="60" width="15" height="140" rx="6">
                        <animate
                          attributeName="height"
                          begin="0s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="y"
                          begin="0s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                      <rect x="90" y="10" width="15" height="120" rx="6">
                        <animate
                          attributeName="height"
                          begin="0.25s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="y"
                          begin="0.25s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                      <rect x="120" y="10" width="15" height="120" rx="6">
                        <animate
                          attributeName="height"
                          begin="0.5s"
                          dur="1s"
                          values="120;110;100;90;80;70;60;50;40;140;120"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                        <animate
                          attributeName="y"
                          begin="0.5s"
                          dur="1s"
                          values="10;15;20;25;30;35;40;45;50;0;10"
                          calcMode="linear"
                          repeatCount="indefinite"
                        ></animate>
                      </rect>
                    </svg>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          {/* Start Axil Product Poster Area  */}
          <div className="axil-poster axil-section-gap pb--2">
            <div className="container">
              <div className="row g-lg-5 g-4">
                <div className="col-lg-6">
                  <div className="single-poster">
                    <Link to="/goldproducts">
                      <img
                        src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-08.png"
                        alt="eTrade promotion poster"
                      />
                      <div className="poster-content">
                        <div className="inner">
                          <h3 className="title">
                            Gold <br />
                            Collection
                          </h3>
                          <span className="sub-title">
                            Get Exclusive
                            <i className="fal fa-long-arrow-right" />
                          </span>
                        </div>
                      </div>
                      {/* End .poster-content */}
                    </Link>
                  </div>
                  {/* End .single-poster */}
                </div>
                <div className="col-lg-6">
                  <div className="single-poster">
                    <Link to="/sliverproducts">
                      <img
                        src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-09.png"
                        alt="eTrade promotion poster"
                      />
                      <div className="poster-content content-left">
                        <div className="inner">
                          <span className="sub-title">Get Exclusive</span>
                          <h3 className="title">
                            Sliver <br /> Collection
                          </h3>
                        </div>
                      </div>
                      {/* End .poster-content */}
                    </Link>
                  </div>
                  {/* End .single-poster */}
                </div>
              </div>
            </div>
          </div>
          {/* End Axil Product Poster Area  */}
          {/* Start Categorie Area  */}

          {/* End Categorie Area  */}

          {/* Start New Arrivals Product Area  */}
          {/* <div className="axil-new-arrivals-product-area fullwidth-container bg-color-white axil-section-gap pb--0">
            <div className="container ml--xxl-0">
              <div className="product-area pb--50">
                <div className="section-title-wrapper">
                  <span className="title-highlighter highlighter-primary">
                    Our Fantastic
                  </span>
                  <h2 className="title">Gold Collection</h2>
                </div>
                <div className="new-arrivals-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide row">
                  {goldData?.map((card) => {
                    return (
                      <div className="col-3" key={card._id}>
                        <div className="axil-product product-style-four">
                          <div className="thumbnail">
                            <a>
                              <img
                                src={URL + card.goldenproductImg}
                                alt="Product Images"
                              />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="inner">
                              <h5 className="title">
                                <a>{card.goldenproductName}</a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {goldData?.length === 0 ? (
                    <div className="text-center pt--30">
                      <svg
                        width="80"
                        height="80"
                        fill="#0308d0"
                        viewBox="0 0 135 140"
                        xmlns="http://www.w3.org/2000/svg"
                        data-testid="bars-svg"
                      >
                        <rect y="10" width="15" height="120" rx="6">
                          <animate
                            attributeName="height"
                            begin="0.5s"
                            dur="1s"
                            values="120;110;100;90;80;70;60;50;40;140;120"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="y"
                            begin="0.5s"
                            dur="1s"
                            values="10;15;20;25;30;35;40;45;50;0;10"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                        </rect>
                        <rect x="30" y="10" width="15" height="120" rx="6">
                          <animate
                            attributeName="height"
                            begin="0.25s"
                            dur="1s"
                            values="120;110;100;90;80;70;60;50;40;140;120"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="y"
                            begin="0.25s"
                            dur="1s"
                            values="10;15;20;25;30;35;40;45;50;0;10"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                        </rect>
                        <rect x="60" width="15" height="140" rx="6">
                          <animate
                            attributeName="height"
                            begin="0s"
                            dur="1s"
                            values="120;110;100;90;80;70;60;50;40;140;120"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="y"
                            begin="0s"
                            dur="1s"
                            values="10;15;20;25;30;35;40;45;50;0;10"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                        </rect>
                        <rect x="90" y="10" width="15" height="120" rx="6">
                          <animate
                            attributeName="height"
                            begin="0.25s"
                            dur="1s"
                            values="120;110;100;90;80;70;60;50;40;140;120"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="y"
                            begin="0.25s"
                            dur="1s"
                            values="10;15;20;25;30;35;40;45;50;0;10"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                        </rect>
                        <rect x="120" y="10" width="15" height="120" rx="6">
                          <animate
                            attributeName="height"
                            begin="0.5s"
                            dur="1s"
                            values="120;110;100;90;80;70;60;50;40;140;120"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                          <animate
                            attributeName="y"
                            begin="0.5s"
                            dur="1s"
                            values="10;15;20;25;30;35;40;45;50;0;10"
                            calcMode="linear"
                            repeatCount="indefinite"
                          ></animate>
                        </rect>
                      </svg>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="axil-new-arrivals-product-area fullwidth-container bg-color-white axil-section-gap pb--0">
            <div className="container ml--xxl-0">
              <div className="product-area pb--50">
                <div className="section-title-wrapper">
                  <span className="title-highlighter highlighter-primary">
                    Our Fantastic
                  </span>
                  <h2 className="title">Sliver Collection</h2>
                </div>
                <div className="new-arrivals-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide row">
                  {sliverData?.map((card) => {
                    return (
                      <div className="col-3" key={card._id}>
                        <div className="axil-product product-style-four">
                          <div className="thumbnail">
                            <a>
                              <img
                                src={URL + card.productImg}
                                alt="Product Images"
                              />
                            </a>
                          </div>
                          <div className="product-content">
                            <div className="inner">
                              <h5 className="title">
                                <a>{card.productName}</a>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div> */}

          {/* Start Axil Newsletter Area  */}
          <div className="axil-newsletter-area axil-section-gap pt--0">
            <div className="container">
              <div
                className="etrade-newsletter-wrapper "
                style={{ background: "bisque" }}
              >
                <div className="newsletter-content">
                  <h2 className="title mb--15 mb_sm--30">
                    Subscribe Our Newsletter
                  </h2>
                  <div className="input-group newsletter-form">
                    <div className="position-relative newsletter-inner mb--15">
                      <input placeholder="example@gmail.com" type="text" />
                    </div>
                    <button type="submit" className="axil-btn mb--15">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End .container */}
          </div>
          {/* End Axil Newsletter Area  */}
        </main>

        {/* Start Footer Area  */}
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { sliverProductListData } from "../../service/auth.service";
import { listBody, URL } from "../../utils/helper";
import { useLocation } from "react-router-dom";

export default function SliverProductList() {
  const [productData, setproductData] = useState([]);
  const location = useLocation();
  const { search } = location;
  useEffect(() => {
    let userId;
    if (search.split("=").length > 0) {
      userId = search.split("=")[1];
    } else {
      userId = "";
    }
    getcategoryData(userId);
  }, [search]);

  const getcategoryData = async (id) => {
    if (id) {
      const response = await sliverProductListData(
        listBody({
          where: {
            isActive: true,
            categoryId: id,
          },
          perPage: 1000,
        })
      );
      if (response) {
        setproductData(response);
      }
    } else {
      const response = await sliverProductListData(
        listBody({
          where: {
            isActive: true,
          },
          perPage: 1000,
        })
      );
      if (response) {
        setproductData(response);
      }
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
                      Sliver Products
                    </li>
                  </ul>
                  <h1 className="title">Explore All Sliver Products</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Area  */}
        {/* Start Shop Area  */}
        <div className="axil-shop-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="axil-shop-top">
                  <div className="row"></div>
                </div>
              </div>
            </div>
            <div className="new-arrivals-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide row pt--50">
              {productData?.map((card) => {
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
              {productData?.length === 0 ? (
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
            {/* <div className="text-center pt--30">
              <a href="#" className="axil-btn btn-bg-lighter btn-load-more">
                Load more
              </a>
            </div> */}
          </div>
          {/* End .container */}
        </div>
        {/* End Shop Area  */}
      </main>
    </>
  );
}

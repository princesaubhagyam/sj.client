import React, { useEffect, useState } from "react";
import { careerHndlerData } from "../../service/auth.service";
import { listBody } from "../../utils/helper";

export default function Career() {
  const [categoriesData, setcategoriesData] = useState([]);

  useEffect(() => {
    getcategoryData();
  }, []);

  const getcategoryData = async () => {
    const response = await careerHndlerData(
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
                      <a href="index.html">Home</a>
                    </li>
                    <li className="separator" />
                    <li
                      className="axil-breadcrumb-item active"
                      aria-current="page"
                    >
                      Pages
                    </li>
                  </ul>
                  <h1 className="title">Career</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Area  */}
        {/* Start Privacy Policy Area  */}
        <div className="axil-privacy-area axil-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                {categoriesData?.map((card) => {
                  return (
                    <>
                      <div className="axil-privacy-policy" key={card._id}>
                        <span className="policy-published">
                          Post name: {card.post}
                        </span>
                      </div>
                      <p>
                        {card.jobLocation.length === 0 ? (
                          ""
                        ) : (
                          <>
                            <strong>Job Location</strong>: {card.jobLocation}
                          </>
                        )}
                        <br />
                        {card.department.length === 0 ? (
                          ""
                        ) : (
                          <>
                            <strong>Department</strong>: {card.department}
                          </>
                        )}
                        <br />
                        {card.gender.length === 0 ? (
                          ""
                        ) : (
                          <>
                            <strong>Gender</strong>: {card.gender}
                          </>
                        )}
                        <br />
                        {card.experience.length === 0 ? (
                          ""
                        ) : (
                          <>
                            <strong>Experience</strong>: {card.experience}
                          </>
                        )}
                        <br />
                        {card.training.length === 0 ? (
                          ""
                        ) : (
                          <>
                            <strong>Training</strong>: {card.training}
                          </>
                        )}
                        <br />
                        {card.salary.length === 0 ? (
                          ""
                        ) : (
                          <>
                            <strong>Salary</strong>: {card.salary}
                          </>
                        )}
                        <br />
                        {card.otherBenefits.length === 0 ? (
                          ""
                        ) : (
                          <>
                            <strong>Other Benefits</strong>:{" "}
                            {card.otherBenefits}
                          </>
                        )}
                      </p>
                    </>
                  );
                })}
                {categoriesData.length === 0
                  ? "May be currently not open any position"
                  : ""}
              </div>
            </div>
          </div>
        </div>
        {/* End Privacy Policy Area  */}
      </main>
    </>
  );
}

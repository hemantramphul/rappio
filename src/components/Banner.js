import React from "react";

function Banner() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-7 text-md-start text-center">
          <h1 className="display-5 fw-bold mb-4">
            Driven by a commitment to life
          </h1>
          <p className="mb-3">
            Everything we do at Kyowa Kirin is driven by our mission to improve
            health, ease suffering and prolong life. It’s a mission that has
            guided our development and expansion for over 70 years.
          </p>
          <p className="mb-3">
            As well as introducing and explaining the major products in our
            portfolio, this site contains a range of materials to support
            healthcare professionals.
          </p>
          <p className="mb-3">
            These free online medical resources include overviews of specific
            therapy areas, diagnostic materials and treatment guidelines.
          </p>
          <p>
            Simply register your details to gain full access to the site and all
            the information it contains.
          </p>
        </div>
        <div className="col-md-5 text-center">
          <img
            src="/assets/Frame-1747.png"
            alt="shape"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

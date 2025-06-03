import React from "react";

function Awareness() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-md-start text-center mb-4 mb-md-0">
          <h2 className="fw-bold text-orange mb-4">
            Around 145,000 people live with
            <br />
            (Disease Y) in the UK
          </h2>
          <p className="text-muted fs-5">
            This website is intended to help people understand (Disease Y) and
            improve awareness of the condition.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="/assets/Image-space.png"
            alt="wheelchair"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awareness;

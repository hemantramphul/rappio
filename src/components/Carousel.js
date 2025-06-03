import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  {
    id: "gastro",
    category: "GASTROINTESTINAL",
    title: "Opioid-induced Constipation",
    description:
      "OIC is a common, yet frequently under-recognised, poorly managed complication of opioid therapy.",
  },
  {
    id: "onco",
    category: "ONCOLOGY",
    title: "Breakthrough Cancer Pain",
    description:
      "OIC is a common, yet frequently under-recognised, poorly managed complication of opioid therapy.",
  },
  {
    id: "injury",
    category: "INJURY",
    title: "Strain Muscle",
    description:
      "A muscle strain happens when fibers in a muscle are overstretched or torn. It often occurs during sudden.",
  },
];

function Carousel({ onLearnMoreClick }) {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "#ccc",
          border: "1px solid #aaa",
          display: "inline-block",
          margin: "0 5px",
        }}
      ></div>
    ),
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">FEATURED TOPICS</h4>
        <div>
          <button
            className="btn btn-link text-decoration-none me-2"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src="/assets/arrow-left.png" alt="Previous" width="24" />
          </button>
          <button
            className="btn btn-link text-decoration-none"
            onClick={() => sliderRef.current.slickNext()}
          >
            <img src="/assets/arrow-right.png" alt="Next" width="24" />
          </button>
        </div>
      </div>
      <Slider {...settings} ref={sliderRef}>
        {carouselData.map((item, index) => (
          <div key={index} className="p-3">
            <div
              className="card h-100 p-4 shadow-sm feature-card d-flex flex-column text-start"
              style={{ minHeight: "320px" }}
            >
              <div className="flex-grow-1">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="/assets/icon-2.png"
                    alt="icon"
                    width="20"
                    className="me-2"
                  />
                  <h6 className="mb-0 text-uppercase text-muted">
                    {item.category}
                  </h6>
                </div>
                <h3 className="fw-bold mb-3">{item.title}</h3>
                <p className="text-muted mb-3">{item.description}</p>
              </div>
              <button
                className="btn btn-link text-decoration-none p-0 mt-auto learn-more-link text-orange text-start"
                onClick={() => onLearnMoreClick(item.id)}
              >
                LEARN MORE{" "}
                <i className="fas fa-angle-right fa-lg text-orange"></i>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;

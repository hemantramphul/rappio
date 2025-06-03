import React, { useState, useEffect } from "react";

const therapyData = [
  {
    id: "gastro",
    title: "Gastrointestinal",
    icon: "/assets/icon-1.png",
    content: {
      heading: "Opioid-induced Constipation",
      description:
        "OIC is a common, yet frequently under-recognised, poorly managed complication of opioid therapy.",
      links: [
        {
          title: "Medical Education",
          text: "Here you will find educational resources focused on the diagnosis and treatment of OIC.",
        },
        {
          title: "Disease Pages",
          text: "Expert medical resources delving into pathology and impact of OIC.",
        },
        {
          title: "Medical Resources",
          text: "Published data, clinical expertise and treatment guidance.",
        },
      ],
    },
  },
  {
    id: "onco",
    title: "Oncology",
    icon: "/assets/icon-2.png",
    content: {
      heading: "Breakthrough Cancer Pain",
      description:
        "Transient exacerbations of pain, known as BtCP, are a common problem in cancer patients, as a direct or indirect result of the cancer itself, or the cancer treatment.",
      links: [
        {
          title: "Medical Education",
          text: "Focused on diagnosis and treatment of BtCP.",
        },
        {
          title: "Disease Pages",
          text: "Medical resources on pathology and epidemiology of BtCP.",
        },
        {
          title: "Medical Resources",
          text: "Clinical guidance and published data for BtCP.",
        },
      ],
    },
  },
  {
    id: "injury",
    title: "Injury",
    icon: "/assets/icon-2.png",
    content: {
      heading: "Strain Muscle",
      description:
        "A muscle strain happens when fibers in a muscle are overstretched or torn. It often occurs during sudden movements, like sprinting or jumping.",
      links: [
        {
          title: "Medical Education",
          text: "Diagnosis and treatment of muscle strain.",
        },
        {
          title: "Disease Pages",
          text: "Information on pathology and recovery.",
        },
        {
          title: "Medical Resources",
          text: "Treatment options and rehabilitation guidance.",
        },
      ],
    },
  },
];

function Therapy({ expandTarget }) {
  const [openPanels, setOpenPanels] = useState({
    gastro: true,
    onco: true,
    injury: true,
  });

  const togglePanel = (id, forceOpen = false) => {
    setOpenPanels((prev) => ({
      ...prev,
      [id]: forceOpen ? true : !prev[id],
    }));
  };

  useEffect(() => {
    if (expandTarget) {
      togglePanel(expandTarget, true);
      const target = document.getElementById(`${expandTarget}-section`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [expandTarget]);

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-orange mb-4">Therapy Areas</h2>

      {therapyData.map((section) => (
        <div
          key={section.id}
          id={`${section.id}-section`}
          className="mb-4 border-0 rounded"
        >
          {/* Header Bar */}
          <div
            className="d-flex justify-content-between align-items-center p-3 mb-3"
            onClick={() => togglePanel(section.id)}
            style={{ backgroundColor: "#fff3ec", cursor: "pointer" }}
          >
            <div className="d-flex align-items-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{
                  backgroundColor: "#f15a24",
                  width: "32px",
                  height: "32px",
                }}
              >
                <img src={section.icon} alt="icon" width="16" />
              </div>
              <h4 className="mb-0 text-orange p-1">{section.title}</h4>
            </div>
            <i
              className={`fas fa-chevron-${
                openPanels[section.id] ? "up" : "down"
              } text-orange`}
            ></i>
          </div>

          {/* Panel Body */}
          {openPanels[section.id] && (
            <div className="p-4 rounded border-orange mt-0">
              <div className="row">
                <div className="col-md-4 mb-4 px-5">
                  <h3 className="fw-bold">{section.content.heading}</h3>
                  <p className="text-muted">{section.content.description}</p>
                </div>

                <div className="col-md-4">
                  {section.content.links.slice(0, 2).map((link, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="fw-bold text-uppercase text-orange mb-1">
                        {link.title}{" "}
                        <i className="fas fa-angle-right text-orange ms-1"></i>
                      </div>
                      <small className="text-muted d-block">{link.text}</small>
                    </div>
                  ))}
                </div>

                <div className="col-md-4 mb-4">
                  {section.content.links.slice(2, 3).map((link, idx) => (
                    <div key={idx}>
                      <div className="fw-bold text-uppercase text-orange mb-1">
                        {link.title}{" "}
                        <i className="fas fa-angle-right text-orange ms-1"></i>
                      </div>
                      <small className="text-muted d-block">{link.text}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Therapy;

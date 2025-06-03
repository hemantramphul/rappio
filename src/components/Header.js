import React from "react";

function Header() {
  return (
    <div className="bg-light py-3 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="fw-bolder text-orange fs-5 text-upper">
          KYOWA KIRIN <span className="fw-light text-muted">HUB</span>
        </div>

        <div className="d-none d-md-flex col-md-6 justify-content-center">
          <nav>
            <a href="#" className="me-4 text-dark text-decoration-none">
              Therapy Areas
            </a>
            <a href="#" className="text-dark text-decoration-none">
              Our Products
            </a>
          </nav>
        </div>

        <div className="d-none d-md-flex col-md-3 justify-content-end align-items-center">
          <input
            type="text"
            placeholder="Search"
            className="form-control me-3"
            style={{ width: "180px" }}
          />
          <span>
            Mary <i className="bi bi-person-circle"></i>
          </span>
        </div>

        <div className="col-6 d-md-none text-end">
          <button
            className="btn"
            onClick={() =>
              document.getElementById("mobileMenu").classList.toggle("d-none")
            }
          >
            <i className="fas fa-bars fa-lg text-dark"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="d-md-none d-none pt-3 px-3 text-center" id="mobileMenu">
        <nav className="mb-2">
          <a href="#" className="d-block mb-2 text-dark text-decoration-none">
            Therapy Areas
          </a>
          <a href="#" className="d-block mb-2 text-dark text-decoration-none">
            Our Products
          </a>
        </nav>
        <input type="text" placeholder="Search" className="form-control mb-2" />
        <span className="d-block mb-2">
          Mary <i className="bi bi-person-circle"></i>
        </span>
      </div>
    </div>
  );
}

export default Header;

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-sticky");
      } else {
        navbar.classList.remove("navbar-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-custom">
        <div className="container">
          <NavLink to={"/"} className="navbar-brand btn btn-primary fw-bold">
            Cars-Rental
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a href={"#OurService"} className="nav-link">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a href={"#WhyUs"} className="nav-link">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a href={"#testimoni"} className="nav-link">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a href={"#faq"} className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;

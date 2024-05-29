import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaRegEnvelope,
  FaTwitch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container my-7">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h6>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
            <p className="fw-bold">binarcarrental@gmail.com</p>
            <p className="fw-bold">081-233-334-808</p>
          </div>
          <div className="col-md-2 mb-3">
            <p>Our Services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="col-md-3 mb-3">
            <h6>Connect with us</h6>
            <div className="row ">
              <div className="col-12">
                <i className="bg-primary p-2 me-3 rounded-circle align-item-center">
                  <FaFacebook className="text-white my-3" />
                </i>
                <i className="bg-primary p-2 me-3 rounded-circle align-item-center">
                  <FaInstagram className="text-white my-3" />
                </i>
                <i className="bg-primary p-2 me-3 rounded-circle align-item-center">
                  <FaTwitter className="text-white my-3" />
                </i>
                <i className="bg-primary p-2 me-3 rounded-circle align-item-center">
                  <FaRegEnvelope className="text-white my-3" />
                </i>
                <i className="bg-primary p-2 me-3 rounded-circle align-item-center">
                  <FaTwitch className="text-white my-3" />
                </i>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6>Copyright Binar 2024</h6>
            <Link to="/cars" className="btn btn-primary fw-bold">
              BINAR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

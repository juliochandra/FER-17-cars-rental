import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="banner" className="container-fluid bg-body-custom pt-7">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="lead">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link to="/cars" className="btn btn-success fw-bold">
              Mulai Sewa Mobil
            </Link>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid mt-5"
              src="/src/assets/images/img_car.png"
              alt="img_car"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;

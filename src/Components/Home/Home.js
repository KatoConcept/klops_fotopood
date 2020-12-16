import { Link } from "react-router-dom";

function Home() {
  document.title = "Klõps | Avaleht";
  return (
    <section className="main-page">
      <div className="main-container view-width">
        <div className="text-area">
          <h1>Kõik Sinule ja Sinu fotode jaoks vajalik ühest kohast!</h1>
          <div className="slideshow-wrapper">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Link to="/products/nikon_z7"><img className="d-block w-100" src="../img/product-1.jpg" alt="1 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/sigma_35mm_f_1_4"><img className="d-block w-100" src="../img/product-2.jpg" alt="2 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/en-el15_lithium-ion_battery_pack_7_0V_1900mah"><img className="d-block w-100" src="../img/product-3.jpg" alt="3 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/delkin_devices_64gb_premium_xqd_malukaart"><img className="d-block w-100" src="../img/product-4.jpg" alt="4 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/nikon_nikkor_z_50mm_f_1_8_s"><img className="d-block w-100" src="../img/product-5.jpg" alt="5 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/nikon_ftz_lens_adapter_f_f-lens_to_z-kamera"><img className="d-block w-100" src="../img/product-6.jpg" alt="6 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/kata_lite-433_dl_fotokott"><img className="d-block w-100" src="../img/product-7.jpg" alt="7 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/sony_xqd_sd_kaardilugeja"><img className="d-block w-100" src="../img/product-8.jpg" alt="8 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/nikon_akulaadija_mh-25a_en-el15a"><img className="d-block w-100" src="../img/product-9.jpg" alt="9 slide" /></Link>
                </div>
                <div className="carousel-item">
                <Link to="/products/nikon_valklamp_sb-700"><img className="d-block w-100" src="../img/product-10.jpg" alt="10 slide" /></Link>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <Link to="/products" className="btn check-products">Vaata tooteid</Link>
        </div>
      </div>
      <div className="spacer"></div>
    </section>
  );
}

export default Home;

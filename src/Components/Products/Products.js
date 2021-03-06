import { Link } from "react-router-dom";

function Products() {
  document.title = "Klõps | Tooted";
  return (
    <section className="products-page">
      <div className="main-container view-width">
        <div className="spacer"></div>
        <div className="top-wrapper">
          <div className="top-left">
            <h1 className="page-title">Tooted</h1>
          </div>
          <div className="top-right">
            <div className="search-container">
              <form className="form-inline d-flex md-form form-sm mt-0">
                <i className="fa fa-search" id="search-icon" aria-hidden="true"></i>
                <input className="form-control form-control-sm ml-3 w-75" id="search-form" type="text" placeholder="Otsing..." aria-label="Otsing" />
              </form>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="filter-wrapper">
          <button className="btn" id="reset-filter-btn">Taasta filtrid</button>
        </div>



        <div className="accordion-wrapper">



          <div class="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">


            <div class="card">


              <div class="card-header" role="tab" id="headingTwo1">
                <a class="collapsed accordion-link" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo1"
                  aria-expanded="false" aria-controls="collapseTwo1">
                  <h5 class="mb-0 accordion-title">
                    Vali kategooria <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>


              <div id="collapseTwo1" class="collapse" role="tabpanel" aria-labelledby="headingTwo1"
                data-parent="#accordionEx1">
                <div class="card-body">
                  <div className="custom-control custom-radio checkbox">
                    <input type="checkbox" id="filter-check-btn-100" name="filter-check-btn-100" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-100">Objektiivid</label>
                  </div>
                  <div className="custom-control custom-radio checkbox">
                    <input type="checkbox" id="filter-check-btn-200" name="filter-check-btn-200" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-200">Kaamerad</label>
                  </div>
                  <div className="custom-control custom-radio checkbox">
                    <input type="checkbox" id="filter-check-btn-300" name="filter-check-btn-300" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-300">Fotokotid</label>
                  </div>
                  <div className="custom-control custom-radio checkbox">
                    <input type="checkbox" id="filter-check-btn-400" name="filter-check-btn-400" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-400">Mälukaardid</label>
                  </div>
                  <div className="custom-control custom-radio checkbox">
                    <input type="checkbox" id="filter-check-btn-500" name="filter-check-btn-500" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-500">Välklambid</label>
                  </div>
                  <div className="custom-control custom-radio checkbox">
                    <input type="checkbox" id="filter-check-btn-600" name="filter-check-btn-600" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-600">Akud</label>
                  </div>
                  <div className="custom-control custom-radio checkbox">
                    <input type="checkbox" id="filter-check-btn-700" name="filter-check-btn-700" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-700">Akulaadijad</label>
                  </div>
                  <div className="custom-control custom-radio checkbox">
                    <input type="checkbox" id="filter-check-btn-800" name="filter-check-btn-800" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-800">Muud tarvikud</label>
                  </div>
                </div>
              </div>

            </div>

            <div class="card">


              <div class="card-header" role="tab" id="headingTwo2">
                <a class="collapsed  accordion-link" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo21"
                  aria-expanded="false" aria-controls="collapseTwo21">
                  <h5 class="mb-0 accordion-title">
                    Liik <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>


              <div id="collapseTwo21" class="collapse" role="tabpanel" aria-labelledby="headingTwo21"
                data-parent="#accordionEx1">
                <div class="card-body">
                  <div className="custom-control custom-radio custom-control-inline checkbox">
                    <input type="checkbox" id="filter-check-btn-900" name="filter-check-btn-900" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-900">Peegelkaamerad</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline checkbox">
                    <input type="checkbox" id="filter-check-btn-1000" name="filter-check-btn-1000" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-1000">Hübriidkaamerad</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline checkbox">
                    <input type="checkbox" id="filter-check-btn-1100" name="filter-check-btn-1100" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-1100">Kompaktkaamerad</label>
                  </div>
                </div>
              </div>

            </div>

            <div class="card">

              <div class="card-header" role="tab" id="headingThree31">
                <a class="collapsed accordion-link" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree31"
                  aria-expanded="false" aria-controls="collapseThree31">
                  <h5 class="mb-0 accordion-title">
                    Kaamera tootja <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>

              <div id="collapseThree31" class="collapse" role="tabpanel" aria-labelledby="headingThree31"
                data-parent="#accordionEx1">
                <div class="card-body">
                  <div className="custom-control custom-radio custom-control-inline checkbox">
                    <input type="checkbox" id="filter-check-btn-1200" name="filter-check-btn-1200" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-1200">Canon</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline checkbox">
                    <input type="checkbox" id="filter-check-btn-1300" name="filter-check-btn-1300" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-1300">Nikon</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline checkbox">
                    <input type="checkbox" id="filter-check-btn-1400" name="filter-check-btn-1400" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-1400">Panasonic</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline checkbox">
                    <input type="checkbox" id="filter-check-btn-1500" name="filter-check-btn-1500" className="custom-control-input" />
                    <label className="custom-control-label" for="filter-check-btn-1500">Pentax</label>
                  </div>
                </div>
              </div>

            </div>
            <div class="card">

              <div class="card-header" role="tab" id="headingFrour41">
                <a class="collapsed accordion-link" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseFour41"
                  aria-expanded="false" aria-controls="collapseFour41">
                  <h5 class="mb-0 accordion-title">
                    Järjesta <i class="fa fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>

              <div id="collapseFour41" class="collapse" role="tabpanel" aria-labelledby="headingFour41"
                data-parent="#accordionEx1">
                <div class="card-body">
                <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="radio" id="filter-check-btn-1600" name="filter-check-btn-1600" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-1600">Hinna järgi kasvavalt</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="radio" id="filter-check-btn-1700" name="filter-check-btn-1600" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-1700">Hinna järgi kahanevalt</label>
              </div>
                </div>
              </div>

            </div>

          </div>


        </div>






        <div className="filter-box-wrapper-top">
          <div className="top-left-filter">
            <div className="top-left-filter-wrapper">
              <h1 className="filter-title">Vali kategooria</h1>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-1" name="filter-check-btn-1" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-1">Objektiivid</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-2" name="filter-check-btn-2" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-2">Kaamerad</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-3" name="filter-check-btn-3" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-3">Fotokotid</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-4" name="filter-check-btn-4" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-4">Mälukaardid</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-5" name="filter-check-btn-5" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-5">Välklambid</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-6" name="filter-check-btn-6" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-6">Akud</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-7" name="filter-check-btn-7" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-7">Akulaadijad</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-8" name="filter-check-btn-8" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-8">Muud tarvikud</label>
              </div>
            </div>
          </div>
          <div className="top-right-filter">
            <div className="top-right-filter-wrapper">
              <h1 className="filter-title">Liik</h1>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-9" name="filter-check-btn-9" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-9">Peegelkaamerad</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-10" name="filter-check-btn-10" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-10">Hübriidkaamerad</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-11" name="filter-check-btn-11" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-11">Kompaktkaamerad</label>
              </div>
            </div>
          </div>
        </div>



        <div className="filter-box-wrapper-bottom">
          <div className="bottom-left-filter">
            <div className="bottom-left-filter-wrapper">
              <h1 className="filter-title">Kaamera tootja</h1>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-12" name="filter-check-btn-12" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-12">Canon</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-13" name="filter-check-btn-13" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-13">Nikon</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-14" name="filter-check-btn-14" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-14">Panasonic</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-15" name="filter-check-btn-15" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-15">Pentax</label>
              </div>
            </div>
          </div>
          <div className="bottom-right-filter">
            <div className="bottom-right-filter-wrapper">
              <h1 className="filter-title">Järjesta</h1>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="radio" id="filter-check-btn-16" name="filter-check-btn-16" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-16">Hinna järgi kasvavalt</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="radio" id="filter-check-btn-17" name="filter-check-btn-16" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-17">Hinna järgi kahanevalt</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer"></div>

      <div className="products-container">
        <div className="products">
          <div className="product-card">
            <Link to="/products/nikon_z7">
              <div className="product-card-thumbnail" id="product-1-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Nikon Z7</h2>
                <h1 className="product-card-price">2799.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/sigma_35mm_f_1_4">
              <div className="product-card-thumbnail" id="product-2-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Sigma 35mm f/1.4</h2>
                <h1 className="product-card-price">749.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/en-el15_lithium-ion_battery_pack_7_0V_1900mah">
              <div className="product-card-thumbnail" id="product-3-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">EN-EL15 Lithium-Ion Battery Pack (7.0V, 1900mAh)</h2>
                <h1 className="product-card-price">29.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/delkin_devices_64gb_premium_xqd_malukaart">
              <div className="product-card-thumbnail" id="product-4-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Delkin Devices 64GB Premium XQD Mälukaart</h2>
                <h1 className="product-card-price">119.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/nikon_nikkor_z_50mm_f_1_8_s">
              <div className="product-card-thumbnail" id="product-5-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Nikon Nikkor Z 50mm f/1.8 S</h2>
                <h1 className="product-card-price">499.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/nikon_ftz_lens_adapter_f_f-lens_to_z-kamera">
              <div className="product-card-thumbnail" id="product-6-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Nikon FTZ Lens Adapter f. F-Lens to Z-Kamera</h2>
                <h1 className="product-card-price">429.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/kata_lite-433_dl_fotokott">
              <div className="product-card-thumbnail" id="product-7-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Kata Lite-433 DL Fotokott</h2>
                <h1 className="product-card-price">39.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/sony_xqd_sd_kaardilugeja">
              <div className="product-card-thumbnail" id="product-8-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Sony MRW-E90 XQD & SD Kaardilugeja</h2>
                <h1 className="product-card-price">109.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/nikon_akulaadija_mh-25a_en-el15a">
              <div className="product-card-thumbnail" id="product-9-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Nikon akulaadija MH-25a EN-EL15a</h2>
                <h1 className="product-card-price">74.90€</h1>
              </div>
            </Link>
          </div>
          <div className="product-card">
            <Link to="/products/nikon_valklamp_sb-700">
              <div className="product-card-thumbnail" id="product-10-thumbnail"></div>
              <div className="product-info-wrap">
                <h2 className="product-card-title">Nikon välklamp SB-700</h2>
                <h1 className="product-card-price">329.90€</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </section>
  );
}

export default Products;

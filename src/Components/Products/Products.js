import { Link } from "react-router-dom";

function Products() {
  document.title = "Klõps | Tooted";
  return (
      <section className="products-page">
        <div className="main-container">
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
          <div className="filter-box-wrapper">
            <div className="top-left-filter">
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
                <input type="checkbox" id="filter-check-btn-4" name="filter-check-btn-3" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-4">Mälukaardid</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-5" name="filter-check-btn-3" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-5">Välklambid</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-6" name="filter-check-btn-3" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-6">Akud</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-7" name="filter-check-btn-3" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-7">Akulaadijad</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline checkbox">
                <input type="checkbox" id="filter-check-btn-8" name="filter-check-btn-3" className="custom-control-input" />
                <label className="custom-control-label" for="filter-check-btn-8">Filtrid</label>
              </div>
            </div>
            <div className="top-right-filter">

            </div>
            <div className="bottom-left-filter">

            </div>
            <div className="bottom-right-filter">

            </div>
          </div>
        </div>
      </section>
  );
}

export default Products;

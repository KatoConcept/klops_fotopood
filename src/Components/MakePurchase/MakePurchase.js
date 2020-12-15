// import { Link } from "react-router-dom";

function MakePurchase() {
    document.title = "Klõps | Ostu vormistamine";
    return (
      <section className="purchase-page">
        <div className="main-container view-width">
        <div className="spacer"></div>
            <h1 className="page-title">Ostu vormistamine</h1>
            <div className="spacer"></div>
            <div className="row-wrapper">
                <div className="row">
                    <div className="col-6 shop-sub-title">Tooted</div>
                    <div className="col shop-sub-title">Hind</div>
                    <div className="col shop-sub-title">Kogus</div>
                    <div className="col shop-sub-title text-right">Summa</div>
                </div>
            </div>
            <div className="row-wrapper-2">
              <div className="row">
                  <div className="col-6 purchase-sub-title">
                    <a href="/" className="purchase-item-link"><p className="purchase-item-name">Nikon Z7</p></a>
                    <p className="purchase-item-name">Sigma 35mm f/1.4</p>
                    <p className="purchase-item-name">Delkin Devices 64GB Premium XQD Mälukaart</p>
                  </div>
                  <div className="col purchase-sub-title">
                    <p className="purchase-item-price">2799.90€</p>
                    <p className="purchase-item-price">749.90€</p>
                    <p className="purchase-item-price">119.90€</p>
                  </div>
                  <div className="col purchase-sub-title">
                    <p className="purchase-item-quantity">1</p>
                    <p className="purchase-item-quantity">3</p>
                    <p className="purchase-item-quantity">2</p>
                  </div>
                  <div className="col purchase-sub-title text-right">
                    <p className="purchase-item-price">2799.90€</p>
                    <p className="purchase-item-price">2249.90€</p>
                    <p className="purchase-item-price">239.80€</p>
                  </div>
              </div>
            </div>
        </div>
      </section>
    );
  }
  
  export default MakePurchase;
  
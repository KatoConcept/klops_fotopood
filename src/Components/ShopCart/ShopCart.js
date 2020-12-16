// import { Link } from "react-router-dom";

function ShopCart() {
  document.title = "Klõps | Ostukorv";
  return (
    <section className="shopping-cart-page">
        <div className="main-container view-width">
            <div className="spacer"></div>
            <h1 className="page-title">Sinu ostukorv</h1>
            <div className="spacer"></div>
            <div className="row-wrapper">
                <div className="row">
                    <div className="col-6 shop-sub-title">Tooted</div>
                    <div className="col shop-sub-title">Hind</div>
                    <div className="col shop-sub-title">Kogus</div>
                    <div className="col shop-sub-title">Summa</div>
                </div>
            </div>
            <div className="row-wrapper-2">
                <div className="row margin-top">
                    <div className="col-6 shop-sub-title">
                        <a href="/products/nikon_z7"><div className="product-thumbnail" id="product-thumbnail-1"></div></a>
                        <a href="/products/nikon_z7" className="product-link"><h1 className="product-name">Nikon Z7</h1></a>

                    </div>
                    <div className="col shop-sub-title">
                        <h1 className="product-price"><span className="mobile-price">Hind:</span> 2799.90€</h1>
                    </div>
                    <div className="col shop-sub-title">
                        <div className="minus-btn d-flex justify-content-center">-</div>
                        <p className="quantity-number">1</p>
                        <div className="plus-btn d-flex justify-content-center">+</div>
                    </div>
                    <div className="col shop-sub-title">
                        <h1 className="product-price"><span className="mobile-price">Summa:</span> 2799.90€</h1>
                    </div>
                </div>
                <div className="row margin-top">
                    <div className="col-6 shop-sub-title">
                        <a href="/products/sigma_35mm_f_1_4"><div className="product-thumbnail" id="product-thumbnail-2"></div></a>
                        <a href="/products/sigma_35mm_f_1_4" className="product-link"><h1 className="product-name">Sigma 35mm f/1.4</h1></a>

                    </div>
                    <div className="col shop-sub-title">
                        <h1 className="product-price"><span className="mobile-price">Hind:</span> 749.90€</h1>
                    </div>
                    <div className="col shop-sub-title">
                        <div className="minus-btn d-flex justify-content-center">-</div>
                        <p className="quantity-number">3</p>
                        <div className="plus-btn d-flex justify-content-center">+</div>
                    </div>
                    <div className="col shop-sub-title">
                        <h1 className="product-price"><span className="mobile-price">Summa:</span> 2249.70€</h1>
                    </div>
                </div>
                <div className="row margin-top">
                    <div className="col-6 shop-sub-title">
                        <a href="/products/delkin_devices_64gb_premium_xqd_malukaart"><div className="product-thumbnail" id="product-thumbnail-3"></div></a>
                        <a href="/products/delkin_devices_64gb_premium_xqd_malukaart" className="product-link"><h1 className="product-name">Delkin Devices 64GB Premium XQD Mälukaart</h1></a>

                    </div>
                    <div className="col shop-sub-title">
                        <h1 className="product-price"><span className="mobile-price">Hind:</span> 119.90€</h1>
                    </div>
                    <div className="col shop-sub-title">
                        <div className="minus-btn d-flex justify-content-center">-</div>
                        <p className="quantity-number">2</p>
                        <div className="plus-btn d-flex justify-content-center">+</div>
                    </div>
                    <div className="col shop-sub-title">
                        <h1 className="product-price"><span className="mobile-price">Summa:</span> 239.80€</h1>
                    </div>
                </div>
            </div>
            <div className="row-wrapper-mobile">
                <div className="title-wrap justify-content-between">
                    <h1 className="product-name-mobile">Nikon Z7</h1>
                    <a href="" className="close-icon-link"><i className="fa fa-times close-icon"></i></a>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="purchase-wrap">
                <div className="price-wrap">
                    <h1 className="total-price">Kokku: 5280.40€</h1>
                    <a href="/make_purchase" className="btn purchase-btn">Vormista ost</a>
                </div>
            </div>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="spacer"></div>
        </div>
    </section>
  );
}

export default ShopCart;

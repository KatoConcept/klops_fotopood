// import { Link } from "react-router-dom";

function Product3() {
    document.title = "Klõps | EN-EL15 Lithium-Ion Battery Pack (7.0V, 1900mAh)";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-3.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-3-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-3-3.jpg" alt="Third slide" />
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
                <div className="product-main-info-wrap">
                    <h1 className="product-name">EN-EL15 Lithium-Ion Battery Pack (7.0V, 1900mAh)</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        Kvaliteetne liitium-ioon aku <br/>
                        Nikoni hübriid- ja peegelkaameratele<br/>
                        Suur 1900 mAh mahutavus<br/>
                        Vastupidav ka pika kasutamise järel<br/>
                        Kasuta tagavara- või asendusakuna<br/>
                    </p>
                    <h2 className="product-price">Hind: 29.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>
                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                        Kvaliteetne liitium-ioon aku Nikon hübriid- ja peegelkaameratele, mis püsib ka pikaaegse kasutamise järel sama võimekana kui uuena. <br/>
                        Sobib järgnevatele kaameratele: D600, D610, D800, D7000, D7100, D7200, Nikon 1 V1 <br/>
                        Sobib järgnevatele tarvikutele: MB-D11 akutald, MB-D12 akutald, MB-D14 akutald, MB-D15 akutald
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Sobivus <br/>
                                Aku tüüp<br/>
                                Mahutavus<br/>
                                Väljundpinge<br/>
                                Sobiv laadija<br/>
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                Nikon <br/>
                                Liitium-ioon<br/>
                                1900 mAh<br/>
                                7,0 V<br/>
                                MH-25<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product3;
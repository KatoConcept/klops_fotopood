// import { Link } from "react-router-dom";

function Product3() {
    document.title = "Klõps | EN-EL15 Lithium-Ion Battery Pack (7.0V, 1900mAh)";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
            <h1 className="page-title">EN-EL15 Lithium-Ion Battery Pack (7.0V, 1900mAh)</h1>
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











                <div className="product-price-btn-wrap-mobile">
                    <h2 className="product-price">Hind: 29.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>


                <div className="accordion-wrapper">
                    <div class="accordion md-accordion" id="accordionEx1" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingTwo1">
                                <a class="collapsed accordion-link" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo1"
                                    aria-expanded="false" aria-controls="collapseTwo1">
                                    <h5 class="mb-0 accordion-title">
                                        Toote põhiinfo <i class="fa fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>
                            <div id="collapseTwo1" class="collapse" role="tabpanel" aria-labelledby="headingTwo1"
                                data-parent="#accordionEx1">
                                <div class="card-body">
                                    <p className="product-description">
                                        Kvaliteetne liitium-ioon aku <br/>
                                        Nikoni hübriid- ja peegelkaameratele<br/>
                                        Suur 1900 mAh mahutavus<br/>
                                        Vastupidav ka pika kasutamise järel<br/>
                                        Kasuta tagavara- või asendusakuna<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingTwo2">
                                <a class="collapsed  accordion-link" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseTwo21"
                                    aria-expanded="false" aria-controls="collapseTwo21">
                                    <h5 class="mb-0 accordion-title">
                                        Toote ülevaade <i class="fa fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>
                            <div id="collapseTwo21" class="collapse" role="tabpanel" aria-labelledby="headingTwo21"
                                data-parent="#accordionEx1">
                                <div class="card-body">
                                    <p className="overview-description">
                                        Kvaliteetne liitium-ioon aku Nikon hübriid- ja peegelkaameratele, mis püsib ka pikaaegse kasutamise järel sama võimekana kui uuena. <br/>
                                        Sobib järgnevatele kaameratele: D600, D610, D800, D7000, D7100, D7200, Nikon 1 V1 <br/>
                                        Sobib järgnevatele tarvikutele: MB-D11 akutald, MB-D12 akutald, MB-D14 akutald, MB-D15 akutald
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="headingThree31">
                                <a class="collapsed accordion-link" data-toggle="collapse" data-parent="#accordionEx1" href="#collapseThree31"
                                    aria-expanded="false" aria-controls="collapseThree31">
                                    <h5 class="mb-0 accordion-title">
                                        Toote andmed <i class="fa fa-angle-down rotate-icon"></i>
                                    </h5>
                                </a>
                            </div>
                            <div id="collapseThree31" class="collapse" role="tabpanel" aria-labelledby="headingThree31"
                                data-parent="#accordionEx1">
                                <div class="card-body">
                                    <h1 className="product-info-title-mobile">Sobivus</h1>
                                    <h1 className="product-info-subtitle-mobile">Nikon</h1>
                                    <h1 className="product-info-title-mobile">Aku tüüp </h1>
                                    <h1 className="product-info-subtitle-mobile">Liitium-ioon</h1>
                                    <h1 className="product-info-title-mobile">Mahutavus </h1>
                                    <h1 className="product-info-subtitle-mobile">1900 mAh </h1>
                                    <h1 className="product-info-title-mobile">Väljundpinge</h1>
                                    <h1 className="product-info-subtitle-mobile">7,0 V</h1>
                                    <h1 className="product-info-title-mobile">Sobiv laadija</h1>
                                    <h1 className="product-info-subtitle-mobile">MH-25</h1>
                                </div>
                            </div>
                        </div>
                    </div>
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
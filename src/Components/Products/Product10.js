// import { Link } from "react-router-dom";

function Product10() {
    document.title = "Klõps | Nikon välklamp SB-700";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
            <h1 className="page-title">Nikon välklamp SB-700</h1>
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-10.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-10-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-10-3.jpg" alt="Third slide" />
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
                    <h1 className="product-name">Nikon välklamp SB-700</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        Täiendatud funktsionaalsusega kompaktne välklamp
                    </p>
                    <h2 className="product-price">Hind: 329.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>

















                <div className="product-price-btn-wrap-mobile">
                    <h2 className="product-price">Hind: 329.90€</h2>
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
                                        Täiendatud funktsionaalsusega kompaktne välklamp
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
                                        Mitmekülgne, lihtsalt kasutatav välk, mis ühildub Nikoni FX- ja DX-formaadis peegelkaameratega ja Nikoni Creative Lightning. SB-700 kasutamine on lihtne ja intuitiivne ning valgustuse tugevuse ja suuna kontrollimine äärmiselt mugav.
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
                                    <h1 className="product-info-title-mobile">Juhtarv</h1>
                                    <h1 className="product-info-subtitle-mobile">28 (m, ISO 100)</h1>
                                    <h1 className="product-info-title-mobile">Valguse temperatuur </h1>
                                    <h1 className="product-info-subtitle-mobile">5600 K</h1>
                                    <h1 className="product-info-title-mobile">Sobivus</h1>
                                    <h1 className="product-info-subtitle-mobile">Nikon</h1>
                                    <h1 className="product-info-title-mobile">Fookuskauguste katvus</h1>
                                    <h1 className="product-info-subtitle-mobile">24 - 120 mm</h1>
                                    <h1 className="product-info-title-mobile">Automaatne suum</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Integreeritud reflektorkaart</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Liikumine vertikaalselt</h1>
                                    <h1 className="product-info-subtitle-mobile">-7° - +90°</h1>
                                    <h1 className="product-info-title-mobile">Liikumine horisontaalselt</h1>
                                    <h1 className="product-info-subtitle-mobile">360°</h1>
                                    <h1 className="product-info-title-mobile">Modelleeriv valgus</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Teravustamise abivalgus</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Ekraani tüüp</h1>
                                    <h1 className="product-info-subtitle-mobile">Punkt-maatriks</h1>
                                    <h1 className="product-info-title-mobile">Taustvalgus </h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Välgu tööulatuse näit</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Välgu valmisoleku näit</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Automaatne särijuhtimine</h1>
                                    <h1 className="product-info-subtitle-mobile">i-TTL </h1>
                                    <h1 className="product-info-title-mobile">TTL välgurežiim </h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">TTL orjarežiim</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Manuaalne välgurežiim </h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Automaatne täitevälk</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Välgu kahveldus </h1>
                                    <h1 className="product-info-subtitle-mobile">Ei</h1>
                                    <h1 className="product-info-title-mobile">Vastupidavus</h1>
                                    <h1 className="product-info-subtitle-mobile">230 välgatust</h1>
                                    <h1 className="product-info-title-mobile">Laadimisaeg </h1>
                                    <h1 className="product-info-subtitle-mobile">0,1 – 3,5 sekundit</h1>
                                    <h1 className="product-info-title-mobile">Energiasäästurežiim </h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Automaatne väljalülitus</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Mõõdud </h1>
                                    <h1 className="product-info-subtitle-mobile">71 × 126 × 104,5 mm</h1>
                                    <h1 className="product-info-title-mobile">Kaal</h1>
                                    <h1 className="product-info-subtitle-mobile">360 g</h1>
                                    <h1 className="product-info-title-mobile">Korpuse materjal</h1>
                                    <h1 className="product-info-subtitle-mobile">Plastik</h1>
                                    <h1 className="product-info-title-mobile">Välgukinga materjal</h1>
                                    <h1 className="product-info-subtitle-mobile">Metall</h1>
                                    <h1 className="product-info-title-mobile">Ilmastikukindlus </h1>
                                    <h1 className="product-info-subtitle-mobile">Puudub</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

















                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                    Mitmekülgne, lihtsalt kasutatav välk, mis ühildub Nikoni FX- ja DX-formaadis peegelkaameratega ja Nikoni Creative Lightning. SB-700 kasutamine on lihtne ja intuitiivne ning valgustuse tugevuse ja suuna kontrollimine äärmiselt mugav.
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Juhtarv <br/>
                                Valguse temperatuur<br/>
                                Sobivus<br/>
                                Fookuskauguste katvus<br/>
                                Automaatne suum<br/>
                                Integreeritud reflektorkaart<br/>
                                Liikumine vertikaalselt<br/>
                                Liikumine horisontaalselt<br/>
                                Modelleeriv valgus<br/>
                                Teravustamise abivalgus<br/>
                                Ekraani tüüp<br/>
                                Taustvalgus<br/>
                                Välgu tööulatuse näit<br/>
                                Välgu valmisoleku näit<br/>
                                Automaatne särijuhtimine<br/>
                                TTL välgurežiim<br/>
                                TTL orjarežiim<br/>
                                Manuaalne välgurežiim<br/>
                                Automaatne täitevälk<br/>
                                Välgu kahveldus<br/>
                                Vastupidavus<br/>
                                Laadimisaeg<br/>
                                Energiasäästurežiim<br/>
                                Automaatne väljalülitus<br/>
                                Mõõdud<br/>
                                Kaal<br/>
                                Korpuse materjal<br/>
                                Välgukinga materjal<br/>
                                Ilmastikukindlus<br/>
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                28 (m, ISO 100)<br/>
                                5600 K<br/>
                                Nikon<br/>
                                24 - 120 mm<br/>
                                Jah<br/>
                                Jah<br/>
                                -7° - +90°<br/>
                                360°<br/>
                                Jah<br/>
                                Jah<br/>
                                Punkt-maatriks<br/>
                                Jah<br/>
                                Jah<br/>
                                Jah<br/>
                                i-TTL<br/>
                                Jah<br/>
                                Jah<br/>
                                Jah<br/>
                                Jah<br/>
                                Ei<br/>
                                230 välgatust<br/>
                                0,1 – 3,5 sekundit<br/>
                                Jah<br/>
                                Jah<br/>
                                71 × 126 × 104,5 mm<br/>
                                360 g<br/>
                                Plastik<br/>
                                Metall<br/>
                                Puudub<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product10;
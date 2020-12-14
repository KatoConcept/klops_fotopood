// import { Link } from "react-router-dom";

function Product10() {
    document.title = "Klõps | Nikon välklamp SB-700";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
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
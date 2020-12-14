// import { Link } from "react-router-dom";

function Product9() {
    document.title = "Klõps | Nikon akulaadija MH-25a EN-EL15a";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-9.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-9-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-9-3.jpg" alt="Third slide" />
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
                    <h1 className="product-name">Nikon akulaadija MH-25a EN-EL15a</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        Nikoni EN-EL15 või EN-EL15a akude jaoks
                    </p>
                    <h2 className="product-price">Hind: 74.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>
                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                        Nikoni MH-25A akulaadija on liitiumioonaku EN-EL15 ja EN-EL15a seinalaadija.
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Tüüp <br/>
                                Sisendpinge<br/>
                                Väljundpinge<br/>
                                Aku tehnoloogia<br/>
                                Laadimisaeg<br/>
                                Laadimisruumid<br/>
                                Kaabli pikkus<br/>
                                Värvus<br/>
                                Mõõtmed<br/>
                                Kaal<br/>
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                Laadija<br/>
                                100 - 240V<br/>
                                8,4 V<br/>
                                Liitium-ioon<br/>
                                155 minutit<br/>
                                1<br/>
                                1,5m<br/>
                                Must<br/>
                                95 x 33,5 x 71 mm<br/>
                                155 g<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product9;
// import { Link } from "react-router-dom";

function Product8() {
    document.title = "Klõps | Sony MRW-E90 XQD & SD Kaardilugeja";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-8.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-8-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-8-3.jpg" alt="Third slide" />
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
                    <h1 className="product-name">Sony MRW-E90 XQD & SD Kaardilugeja</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        Kompaktse käekaamera / peeglita kaamera jaoks <br/>
                        Reguleeritav Elasto-Guard õlarihm<br/>
                        Vööaas, ülemine käepide<br/>
                        Polsterdatud eraldaja / vihmakate<br/>
                    </p>
                    <h2 className="product-price">Hind: 109.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>
                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                        Sony MRW-E90 võimaldab SD- ja XQD-kaardi andmete otsest ülekandmist arvutisse, vabastades kaameraseadmed selleks, milleks nad olid mõeldud - pildistamiseks. Ühildub XQD seeria ja UHS-I / II SD mälukaartidega, see MRW-E90 on USB-bussi toide ja ei vaja eraldi toiteallikat. <br/> <br/>
                        Ühilduvus: XQD mälukaardi ver. 1,0 / 2,0; SDXC / SDHC UHS-II mälukaart; SDXC / SDHC UHS-I mälukaart; SDXC / SDHC / SD mälukaart
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Liides <br/>
                                Töötemperatuur<br/>
                                Nõuded võimsusele<br/>
                                Mõõtmed<br/>
                                Kaal<br/>
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                USB 3.1<br/>
                                5-40°C<br/>
                                USB-bussi toide<br/>
                                5 x 1.42 x 9.8cm<br/>
                                51.88 g<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product8;
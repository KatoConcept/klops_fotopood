// import { Link } from "react-router-dom";

function Product7() {
    document.title = "Klõps | Kata Lite-433 DL Fotokott";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-7.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-7-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-7-3.jpg" alt="Third slide" />
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
                    <h1 className="product-name">Kata Lite-433 DL Fotokott</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        Kompaktse käekaamera / peeglita kaamera jaoks <br/>
                        Reguleeritav Elasto-Guard õlarihm<br/>
                        Vööaas, ülemine käepide<br/>
                        Polsterdatud eraldaja / vihmakate<br/>
                    </p>
                    <h2 className="product-price">Hind: 39.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>
                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                        Katalt pärit must Lite-433 DL õlakott kompaktse peegelkaamera, peeglita kaamera või Handycami jaoks on veidi suurem kui Lite-431 DL, kuid on siiski kompaktne viis oma foto- või videotarbe ümber kandmiseks. See on kortsutamata kott, kus on piisavalt ruumi nii esmatarbekaupade jaoks kui ka mõned väikesed tarvikud, nagu patareid ja mälukaardid. <br/><br/>

                        Välispind on valmistatud vastupidavast kombinatsioonist 75% Ripstop nailonist ja 25% tavalisest nailonist. Sees on Kata erkkollane polsterdatud kangas ja eraldajad, mis kaitsevad nii teie käiku kui ka hõlbustavad selle leidmist madalama valguse tingimustes pildistades. Ülemise kaane sees on korraldaja tasku väikeste asjade jaoks, nagu meediumikaardid ja patareid.<br/><br/>

                        Kott pakub kolme kandmisvõimalust. Komplektis olev Elasto-Guard õlarihm on reguleeritav ja eemaldatav. Pärast eemaldamist saate käed-vabad reisimiseks kasutada käepäraseid vööaasasid. Ülemine kandekäepide on ainulaadne selle poolest, et see on ette nähtud ülejäänud kotiga risti kulgema. Selline disain annab kotile kõndimise ajal õhukese profiili. Lihtne visata topelt tõmblukud avada esiklapp. Kui ilm pöördub teie vastu, kasutage käiku elementide eest kaitsmiseks kaasasolevat vihmakatet. <br/><br/>
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Materjal <br/>
                                Sulgemise tüüp <br/>
                                Välismõõdud <br/>
                                Sisemõõdud <br/>
                                Statiivi hoidja <br/>
                                Kandmisvõimalused <br/>
                                Raskus <br/>
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                75% Ripstop nailon, 25% nailon <br/>
                                Tõmblukud <br/>
                                14.5 x 15.5 x 17.5 cm <br/>
                                10.9 x 14.0 x 16.0 cm <br/>
                                Puudub <br/>
                                Õlarihm, kandesang, vööaasad <br/>
                                Max: 272,2 g Min: 181,4 g <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product7;
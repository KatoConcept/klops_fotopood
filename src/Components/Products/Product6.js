// import { Link } from "react-router-dom";

function Product6() {
    document.title = "Klõps | Nikon Nikkor Z 50mm f/1.8 S";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-6.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-6-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-6-3.jpg" alt="Third slide" />
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
                    <h1 className="product-name">Nikon FTZ Lens Adapter f. F-Lens to Z-Kamera</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        Objektiivi adapter <br/>
                        F-objektiivide ühendamine Z-kaameratega <br/>
                        Toetab pildistabilisaatoriga (VR) objektiive <br/>
                    </p>
                    <h2 className="product-price">Hind: 429.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>
                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                        Suurepärane klaas peab vastu. Sellepärast on Nikoni kaamerad - alates Nikon F-st 1959. aastal kuni D850-ni - püsinud ühilduvad peaaegu kõigi F-tüüpi NIKKOR-objektiividega. Miks peaksid Nikon Z-ga asjad teisiti olema? Mount Adapter FTZ võimaldab jätkata tuttavate ja armastatud objektiivide pildistamist, saades samal ajal ka uue Z-süsteemi eeliseid. Ühilduvuse pärand jätkub. <br/> <br/>
                        Z-kaameral, millel on Mount Adapter FTZ, säilitavad ühilduvad F-Mount NIKKOR objektiivid kogu oma teravuse ja suurepärase renderdusvõime. Lisaks saavad nad nii palju - sujuv, kiire Hybrid-AF *, vaikne pildistamine, läbimurre vähese valguse korral, kaamerasisese VR-pildistabilisaatori eelised, kui neid kasutatakse Z-kaameratega, millel on kaamerasisene VR ja palju muud. <br/> <br/>
                        Esimest korda saate kogeda kiire avaga NIKKORi esiplaane nagu AF-S NIKKOR 105mm f / 1.4E ED või AF-S NIKKOR 24mm f / 1.4G ED kuni 5-astmelise 3-teljelise VR-pildistabilisaatoriga. NIKKORi objektiivid, millel on juba VR, nagu AF-S NIKKOR 70-200mm f / 2.8E FL ED VR, saavad rullitelje lisakasu kokku 3-teljelise VR-i jaoks. Lisage lihtsalt lisavarustusse kuuluv adapteri adapter FTZ ja kõik on korras. <br/> <br/>
                        Tugevast magneesiumisulamist valmistatud ja ilmastiku eest kaitstud tolmu ja niiskuse eest kaitstud Mount Adapter FTZ kaitseb teie kaamera korpuse ja objektiivi vastupidavust. Integreeritud statiivikinnitus hoiab pikkade läätsede pinge kaamera korpuselt eemal. <br/> <br/>
                        Mount Adapter FTZ on ainus Nikoni Z-seeria kaamerate jaoks loodud adapter. See hoolikalt läbimõeldud adapter on loodud Nikoni F-kinnitusega DSLR-i ääriku kauguse ja kinnitusläbimõõdu taastamiseks, tagades, et ühilduvate F-kinnitusega objektiividega autofookus toimiks ootuspäraselt. * Adapteris pole klaasi, mis ei kaota pildikvaliteet ning kaamera kinnituse ja objektiivi vaheline ühendus on täpselt paralleelne, kriitiline teravuse jaoks väljaspool pildi keskosa. <br/> <br/>
                        Mount Adapter FTZ töötab u. Kokku 360 objektiivi, millest 90 on AF-S, AF-P või AF-I tüüpi ja täieliku AF / AE võimalusega. <br/> <br/>
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Objektiivikinnitus <br/>
                                Kaamera ühendus <br/>
                                Värvus <br/>
                                Kaal <br/>
                                Pakendi laius<br/>
                                Pakendi kõrgus<br/>
                                Pakendi pikkus<br/>
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                Nikon F<br/>
                                Nikon Z<br/>
                                Must / hõbedane<br/>
                                0.11 kg<br/>
                                11 cm<br/>
                                10 cm <br/>
                                11 cm<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product6;
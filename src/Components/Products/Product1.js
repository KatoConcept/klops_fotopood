// import { Link } from "react-router-dom";

function Product1() {
    document.title = "Klõps | Nikon Z7";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
            <h1 className="page-title">Nikon Z7</h1>
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-1.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-1-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-1-3.jpg" alt="Third slide" />
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
                    <h1 className="product-name">Nikon Z7</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        24,5-megapiksline täiskaader BSI CMOS sensor <br />
                        4K UHD 3840 × 2160 30p videosalvestus <br />
                        273 faasitituvastusega teravustamispunkti <br />
                        5-suunaline keresisene stabilisaator <br />
                        Foto sarivõte kuni 12 kaadrit sekundis
                    </p>
                    <h2 className="product-price">Hind: 2799.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>
                













                
                <div className="product-price-btn-wrap-mobile">
                    <h2 className="product-price">Hind: 2799.90€</h2>
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
                                        24,5-megapiksline täiskaader BSI CMOS sensor <br />
                                        4K UHD 3840 × 2160 30p videosalvestus <br />
                                        273 faasitituvastusega teravustamispunkti <br />
                                        5-suunaline keresisene stabilisaator <br />
                                        Foto sarivõte kuni 12 kaadrit sekundis
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
                                        Nikoni peeglita. Meie visioon on alati olnud luua kaameraid ja objektiive, mis haaraksid rohkem valgust. Rohkem valgust tähendab rohkem üksikasju. Rohkem kiirust. Rohkem võimalusi. Z 7 äratab selle nägemuse (ja siis ka mõne) ellu. Kombineerides kerge peeglita disaini, revolutsioonilise uue täiskaaderliku objektiivi kinnituse ja sobitatud objektiividega eelised, on Nikoni kujundatud 45,7 MP pildisensor ja sujuv integreerimine Nikoni DSLR-süsteemiga - sealhulgas NIKKORi armastatud objektiividega - Z 7 on kaamera erinevalt mis tahes enne seda. Ja ometi on see eksimatult Nikon. See on peeglita uuesti leiutatud. Tundub nagu Nikon Sama mugav ja tuttav kui vana sõber.
                                        Uued NIKKOR Z objektiivid NIKKORi järgmise põlvkonna klaasid.
                                        Suurema Z-kinnituse ja lühema 16 mm ääriku fookuskauguse abil saavad NIKKOR Z-objektiivid rohkem valgust ja rikuvad traditsioonilisi „magusa koha“ reegleid. Maksimaalse teravuse saavutamiseks unustage peatumine - NIKKOR Z on parimad ja tagab teravuse nurgast nurka isegi kõige laiema ava korral.
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
                                    <h1 className="product-info-title-mobile">Toote tüüp</h1>
                                    <h1 className="product-info-subtitle-mobile">Digitaalsed fotokaamerad</h1>
                                    <h1 className="product-info-title-mobile">Kaubamärk </h1>
                                    <h1 className="product-info-subtitle-mobile">Nikon</h1>
                                    <h1 className="product-info-title-mobile">Kaal</h1>
                                    <h1 className="product-info-subtitle-mobile">585 g </h1>
                                    <h1 className="product-info-title-mobile">Megapikslite arv</h1>
                                    <h1 className="product-info-subtitle-mobile">46.89</h1>
                                    <h1 className="product-info-title-mobile">Maksimaalne eraldusvõime</h1>
                                    <h1 className="product-info-subtitle-mobile">8256 x 5504</h1>
                                    <h1 className="product-info-title-mobile">Anduri tüüp </h1>
                                    <h1 className="product-info-subtitle-mobile">CMOS</h1>
                                    <h1 className="product-info-title-mobile">Kaamera tundlikkus (ISO)</h1>
                                    <h1 className="product-info-subtitle-mobile">64 - 25600</h1>
                                    <h1 className="product-info-title-mobile">Valge värvi bilanss</h1>
                                    <h1 className="product-info-subtitle-mobile">Auto, 8 positsiooni + 1 käsitsi</h1>
                                    <h1 className="product-info-title-mobile">Pildi formaadid</h1>
                                    <h1 className="product-info-subtitle-mobile">Linear PCM</h1>
                                    <h1 className="product-info-title-mobile">Katiku kiirus</h1>
                                    <h1 className="product-info-subtitle-mobile">30 sek. - 1/8000 sek.</h1>
                                    <h1 className="product-info-title-mobile">Optika</h1>
                                    <h1 className="product-info-subtitle-mobile">Ei ole komplektis</h1>
                                    <h1 className="product-info-title-mobile">Käsitsi fokuseerimine </h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Käsitsi fokuseerimine </h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Autofokuseerimise tüüp</h1>
                                    <h1 className="product-info-subtitle-mobile">TTL Autofokuseerimine</h1>
                                    <h1 className="product-info-title-mobile">Diafragma</h1>
                                    <h1 className="product-info-subtitle-mobile">Sõltub valitud objektiivist </h1>
                                    <h1 className="product-info-title-mobile">Videootsija </h1>
                                    <h1 className="product-info-subtitle-mobile">On (elektrooniline pildiotsija)</h1>
                                    <h1 className="product-info-title-mobile">Puutetundlik ekraan</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Ekraani diagonaal </h1>
                                    <h1 className="product-info-subtitle-mobile">3.2 "</h1>
                                    <h1 className="product-info-title-mobile">Ekraani eraldusvõime punktides</h1>
                                    <h1 className="product-info-subtitle-mobile">210000</h1>
                                    <h1 className="product-info-title-mobile">Välk </h1>
                                    <h1 className="product-info-subtitle-mobile">Puudub</h1>
                                    <h1 className="product-info-title-mobile">Võimalus ühendada väline välk</h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Särituse kompenseerimine </h1>
                                    <h1 className="product-info-subtitle-mobile">- 5 EV kuni + 5 EV sammuga 1/2 EV või 1/3 EV</h1>
                                    <h1 className="product-info-title-mobile">Pildistamisrežiimid  </h1>
                                    <h1 className="product-info-subtitle-mobile">4K</h1>
                                    <h1 className="product-info-title-mobile">Videoproportsioon</h1>
                                    <h1 className="product-info-subtitle-mobile">16:9, 1:1, 3:2, 4:5 </h1>
                                    <h1 className="product-info-title-mobile">Videosalvestuse kiirus </h1>
                                    <h1 className="product-info-subtitle-mobile">1080p@24fps - 1080p@120fps, 2160p@24fps - 2160p@30fps</h1>
                                    <h1 className="product-info-title-mobile">Mikrofon </h1>
                                    <h1 className="product-info-subtitle-mobile">On (Stereo)</h1>
                                    <h1 className="product-info-title-mobile">Sisemälu </h1>
                                    <h1 className="product-info-subtitle-mobile">Ei</h1>
                                    <h1 className="product-info-title-mobile">Liidesed </h1>
                                    <h1 className="product-info-subtitle-mobile">Mini HDMI, USB, USB 3.0</h1>
                                    <h1 className="product-info-title-mobile">Navigatsiooni (GPS) funktsioon </h1>
                                    <h1 className="product-info-subtitle-mobile">Ei</h1>
                                    <h1 className="product-info-title-mobile">WiFi-liides </h1>
                                    <h1 className="product-info-subtitle-mobile">Jah</h1>
                                    <h1 className="product-info-title-mobile">Toide </h1>
                                    <h1 className="product-info-subtitle-mobile">Aku</h1>
                                    <h1 className="product-info-title-mobile">3D-pildistamine </h1>
                                    <h1 className="product-info-subtitle-mobile">Ei</h1>
                                    <h1 className="product-info-title-mobile">Täiendav info </h1>
                                    <h1 className="product-info-subtitle-mobile">Bluetooth</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>















                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">Nikoni peeglita. Meie visioon on alati olnud luua kaameraid ja objektiive, mis haaraksid rohkem valgust. Rohkem valgust tähendab rohkem üksikasju. Rohkem kiirust. Rohkem võimalusi. Z 7 äratab selle nägemuse (ja siis ka mõne) ellu. Kombineerides kerge peeglita disaini, revolutsioonilise uue täiskaaderliku objektiivi kinnituse ja sobitatud objektiividega eelised, on Nikoni kujundatud 45,7 MP pildisensor ja sujuv integreerimine Nikoni DSLR-süsteemiga - sealhulgas NIKKORi armastatud objektiividega - Z 7 on kaamera erinevalt mis tahes enne seda. Ja ometi on see eksimatult Nikon. See on peeglita uuesti leiutatud. Tundub nagu Nikon Sama mugav ja tuttav kui vana sõber.
                    Uued NIKKOR Z objektiivid NIKKORi järgmise põlvkonna klaasid.
                    Suurema Z-kinnituse ja lühema 16 mm ääriku fookuskauguse abil saavad NIKKOR Z-objektiivid rohkem valgust ja rikuvad traditsioonilisi „magusa koha“ reegleid. Maksimaalse teravuse saavutamiseks unustage peatumine - NIKKOR Z on parimad ja tagab teravuse nurgast nurka isegi kõige laiema ava korral.
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Toote tüüp <br />
                                Kaubamärk  <br />
                                Kaal  <br />
                                Megapikslite arv <br />
                                Maksimaalne eraldusvõime  <br />
                                Anduri tüüp <br />
                                Kaamera tundlikkus (ISO) <br />
                                Valge värvi bilanss  <br />
                                Pildi formaadid <br />
                                Katiku kiirus <br />
                                Optika <br />
                                Käsitsi fokuseerimine <br />
                                Käsitsi fokuseerimine <br />
                                Autofokuseerimise tüüp <br />
                                Diafragma <br />
                                Videootsija  <br />
                                Puutetundlik ekraan <br />
                                Ekraani diagonaal <br />
                                Ekraani eraldusvõime punktides <br />
                                Välk <br />
                                Võimalus ühendada väline välk<br />
                                Särituse kompenseerimine <br />
                                Pildistamisrežiimid <br />
                                Videoproportsioon<br />
                                Videosalvestuse kiirus<br />
                                Mikrofon <br />
                                Sisemälu <br />
                                Liidesed<br />
                                Navigatsiooni (GPS) funktsioon<br />
                                WiFi-liides<br />
                                Toide <br />
                                3D-pildistamine<br />
                                Täiendav info <br />
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                Digitaalsed fotokaamerad<br />
                                Nikon<br />
                                585 g <br />
                                46.89<br />
                                8256 x 5504<br />
                                CMOS<br />
                                64 - 25600 <br />
                                Auto, 8 positsiooni + 1 käsitsi <br />
                                Linear PCM <br />
                                30 sek. - 1/8000 sek. <br />
                                Ei ole komplektis <br />
                                Jah <br />
                                Jah  	<br />
                                TTL Autofokuseerimine <br />
                                Sõltub valitud objektiivist <br />
                                On (elektrooniline pildiotsija)<br />
                                Jah <br />
                                3.2 "<br />
                                210000 <br />
                                Puudub <br />
                                Jah <br />
                                - 5 EV kuni + 5 EV sammuga 1/2 EV või 1/3 EV <br />
                                4K<br />
                                16:9, 1:1, 3:2, 4:5 <br />
                                1080p@24fps - 1080p@120fps, 2160p@24fps - 2160p@30fps<br />
                                On (Stereo) <br />
                                Ei <br />
                                Mini HDMI, USB, USB 3.0<br />
                                Ei <br />
                                Jah <br />
                                Aku<br />
                                Ei <br />
                                Bluetooth <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product1;
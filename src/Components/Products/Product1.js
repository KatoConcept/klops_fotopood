// import { Link } from "react-router-dom";

function Product1() {
    document.title = "Klõps | Nikon Z7";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
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
                        24,5-megapiksline täiskaader BSI CMOS sensor <br/>
                        4K UHD 3840 × 2160 30p videosalvestus <br/>
                        273 faasitituvastusega teravustamispunkti <br/>
                        5-suunaline keresisene stabilisaator <br/>
                        Foto sarivõte kuni 12 kaadrit sekundis
                    </p>
                    <h2 className="product-price">Hind: 2799.90€</h2>
                    <button class="btn add-cart-btn">Lisa ostukorvi</button>
                </div>
                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">Nikoni peeglita. Meie visioon on alati olnud luua kaameraid ja objektiive, mis haaraksid rohkem valgust. Rohkem valgust tähendab rohkem üksikasju. Rohkem kiirust. Rohkem võimalusi. Z 7 äratab selle nägemuse (ja siis ka mõne) ellu. Kombineerides kerge peeglita disaini, revolutsioonilise uue täiskaaderliku objektiivi kinnituse ja sobitatud objektiividega eelised, on Nikoni kujundatud 45,7 MP pildisensor ja sujuv integreerimine Nikoni DSLR-süsteemiga - sealhulgas NIKKORi armastatud objektiividega - Z 7 on kaamera erinevalt mis tahes enne seda. Ja ometi on see eksimatult Nikon. See on peeglita uuesti leiutatud. Tundub nagu Nikon Sama mugav ja tuttav kui vana sõber.
                        Uued NIKKOR Z objektiivid NIKKORi järgmise põlvkonna klaasid.
                        Suurema Z-kinnituse ja lühema 16 mm ääriku fookuskauguse abil saavad NIKKOR Z-objektiivid rohkem valgust ja rikuvad traditsioonilisi „magusa koha“ reegleid. Maksimaalse teravuse saavutamiseks unustage peatumine - NIKKOR Z on parimad ja tagab teravuse nurgast nurka isegi kõige laiema ava korral.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Product1;
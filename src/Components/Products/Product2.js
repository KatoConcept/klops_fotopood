// import { Link } from "react-router-dom";

function Product2() {
    document.title = "Klõps | Sigma 35mm f/1.4";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-2.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-2-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-2-3.jpg" alt="Third slide" />
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
                    <h1 className="product-name">Sigma 35mm f/1.4 DG HSM Art</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        35 mm lainurkobjektiiv <br/>
                        Valgusjõuline - f/1.4 maksimaalne ava<br/>
                        Perfektne kaaslane tänavafotograafile<br/>
                        Vaikne ning kiire HSM teravustamismootor<br/>
                        Canoni poolkaader- ja täiskaader peegelkaameratele<br/>
                    </p>
                    <h2 className="product-price">Hind: 749.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>











                <div className="product-price-btn-wrap-mobile">
                    <h2 className="product-price">Hind: 749.90€</h2>
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
                                        35 mm lainurkobjektiiv <br/>
                                        Valgusjõuline - f/1.4 maksimaalne ava<br/>
                                        Perfektne kaaslane tänavafotograafile<br/>
                                        Vaikne ning kiire HSM teravustamismootor<br/>
                                        Canoni poolkaader- ja täiskaader peegelkaameratele<br/>
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
                                        Uus Sigma 35mm f/1.4 objektiiv on valgusjõuline objektiiv, mis on disainitud küll täiskaadersensoriga kasutamiseks, kuid sobib ka poolkaaderkaamera ette. Objektiiv on varustatud kiire ning täpse HSM (Hyper Sonic Motor) teravustamismootoriga, mis ei jäta sind ka kiirelt mööduvatel hetkedel hätta. Objektiiv kasutab sisemist teravustamismehhanismi ning parima pildikvaliteedi tagamiseks on kasutusel nii SLD kui FLD elemendid. 
                                        Sigma AF 35mm f/1.4 DG HSM A on ühilduv Sigma USB dokiga, võimaldades kasutajal endal uuendada nii objektiivi püsivara kui ka seadistada teravustamist.
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
                                    <h1 className="product-info-title-mobile">Sobivus kaamerale</h1>
                                    <h1 className="product-info-subtitle-mobile">Canon täis-ja poolkaader peegelkaamerad</h1>
                                    <h1 className="product-info-title-mobile">Objektiivi bajonett </h1>
                                    <h1 className="product-info-subtitle-mobile">Canon EF</h1>
                                    <h1 className="product-info-title-mobile">Suum / fiks </h1>
                                    <h1 className="product-info-subtitle-mobile">Fiksobjektiiv </h1>
                                    <h1 className="product-info-title-mobile">Objektiivi tüüp</h1>
                                    <h1 className="product-info-subtitle-mobile">Lainurk</h1>
                                    <h1 className="product-info-title-mobile">Fookuskaugus</h1>
                                    <h1 className="product-info-subtitle-mobile">35 mm</h1>
                                    <h1 className="product-info-title-mobile">Maksimaalne ava </h1>
                                    <h1 className="product-info-subtitle-mobile">f/1.4</h1>
                                    <h1 className="product-info-title-mobile">Minimaalne ava</h1>
                                    <h1 className="product-info-subtitle-mobile">f/16</h1>
                                    <h1 className="product-info-title-mobile">Optiline konstruktsioon</h1>
                                    <h1 className="product-info-subtitle-mobile">13 elementi 11 grupis </h1>
                                    <h1 className="product-info-title-mobile">Teravustamine</h1>
                                    <h1 className="product-info-subtitle-mobile">Autofookus, Manuaalne fookus</h1>
                                    <h1 className="product-info-title-mobile">Teravustamismootor</h1>
                                    <h1 className="product-info-subtitle-mobile">HSM (Hyper Sonic Motor) mootor</h1>
                                    <h1 className="product-info-title-mobile">Pildistabilisaator</h1>
                                    <h1 className="product-info-subtitle-mobile">Puudub</h1>
                                    <h1 className="product-info-title-mobile">Lähim teravustamiskaugus </h1>
                                    <h1 className="product-info-subtitle-mobile">30 cm</h1>
                                    <h1 className="product-info-title-mobile">Diafragma labade arv </h1>
                                    <h1 className="product-info-subtitle-mobile">9</h1>
                                    <h1 className="product-info-title-mobile">Maksimaalne suurendus</h1>
                                    <h1 className="product-info-subtitle-mobile">0,19×</h1>
                                    <h1 className="product-info-title-mobile">Läbimõõt</h1>
                                    <h1 className="product-info-subtitle-mobile">77 mm </h1>
                                    <h1 className="product-info-title-mobile">Pikkus</h1>
                                    <h1 className="product-info-subtitle-mobile">94 mm</h1>
                                    <h1 className="product-info-title-mobile">Kaal </h1>
                                    <h1 className="product-info-subtitle-mobile">665 g</h1>
                                    <h1 className="product-info-title-mobile">Filtrikeere </h1>
                                    <h1 className="product-info-subtitle-mobile">67 mm</h1>
                                    <h1 className="product-info-title-mobile">Komplekti sisu</h1>
                                    <h1 className="product-info-subtitle-mobile">Objektiiv, Objektiivikorgid, Pehme vutlar, Päikesevarjuk</h1>
                                    <h1 className="product-info-title-mobile">Sobiv päikesevarjuk</h1>
                                    <h1 className="product-info-subtitle-mobile">LH730-03</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
















                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                        Uus Sigma 35mm f/1.4 objektiiv on valgusjõuline objektiiv, mis on disainitud küll täiskaadersensoriga kasutamiseks, kuid sobib ka poolkaaderkaamera ette. Objektiiv on varustatud kiire ning täpse HSM (Hyper Sonic Motor) teravustamismootoriga, mis ei jäta sind ka kiirelt mööduvatel hetkedel hätta. Objektiiv kasutab sisemist teravustamismehhanismi ning parima pildikvaliteedi tagamiseks on kasutusel nii SLD kui FLD elemendid. 
                        Sigma AF 35mm f/1.4 DG HSM A on ühilduv Sigma USB dokiga, võimaldades kasutajal endal uuendada nii objektiivi püsivara kui ka seadistada teravustamist.
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Sobivus kaamerale <br/>
                                Objektiivi bajonett <br/>
                                Suum / fiks <br/>
                                Objektiivi tüüp <br/>
                                Fookuskaugus <br/>
                                Maksimaalne ava <br/>
                                Minimaalne ava <br/>
                                Optiline konstruktsioon <br/>
                                Teravustamine <br/>
                                Teravustamismootor <br/>
                                Pildistabilisaator <br/>
                                Lähim teravustamiskaugus <br/>
                                Diafragma labade arv <br/>
                                Maksimaalne suurendus <br/>
                                Läbimõõt <br/>
                                Pikkus <br/>
                                Kaal <br/>
                                Filtrikeere <br/>
                                Komplekti sisu <br/>
                                Sobiv päikesevarjuk <br/>
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                Canon täis-ja poolkaader peegelkaamerad <br/>
                                Canon EF <br/>
                                Fiksobjektiiv<br/>
                                Lainurk <br/>
                                35 mm<br/>
                                f/1.4 <br/>
                                f/16<br/>
                                13 elementi 11 grupis <br/>
                                Autofookus, Manuaalne fookus <br/>
                                HSM (Hyper Sonic Motor) mootor <br/>
                                Puudub <br/>
                                30 cm <br/>
                                9 <br/>
                                0,19× <br/>
                                77 mm <br/>
                                94 mm <br/>
                                665 g <br/>
                                67 mm <br/>
                                Objektiiv, Objektiivikorgid, Pehme vutlar, Päikesevarjuk<br/>
                                LH730-03 <br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product2;
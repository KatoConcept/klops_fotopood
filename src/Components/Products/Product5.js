// import { Link } from "react-router-dom";

function Product5() {
    document.title = "Klõps | Nikon Nikkor Z 50mm f/1.8 S";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
            <h1 className="page-title">Nikon Nikkor Z 50mm f/1.8 S</h1>
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-5.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-5-2.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-5-3.jpg" alt="Third slide" />
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
                    <h1 className="product-name">Nikon Nikkor Z 50mm f/1.8 S</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        50 mm kvaliteetne normaalfiksobjektiiv <br/>
                        Valgusjõuline - f/1.8 maksimaalne ava<br/>
                        Vaikne ning kiire SM teravustamismootor<br/>
                        Ilmastikukindel konstruktsioon<br/>
                        Nikon Z bajonetiga kaameratele<br/>
                    </p>
                    <h2 className="product-price">Hind: 499.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>


















                <div className="product-price-btn-wrap-mobile">
                    <h2 className="product-price">Hind: 499.90€</h2>
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
                                        50 mm kvaliteetne normaalfiksobjektiiv <br/>
                                        Valgusjõuline - f/1.8 maksimaalne ava<br/>
                                        Vaikne ning kiire SM teravustamismootor<br/>
                                        Ilmastikukindel konstruktsioon<br/>
                                        Nikon Z bajonetiga kaameratele<br/>
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
                                        Tantsige valgusega. Selle täiskaadrilise S-seeria NIKKORi Z-süsteemi objektiivi silmapaistev optiline suutlikkus kehtestab f/1,8 objektiividele uue standardi. Varasemaid f/1,4 avaga fikseeritud fookuskaugusega objektiive ületava ereduse ja detailsusega on see midagi enamat kui vaid uutmoodi 50 mm objektiiv. See on imepärase fotograafia uus tulevik. <br/><br/>
                                        Sujuv, vaikne, täpne <br/>
                                        Kuna automaatne teravustamine on sujuv ja praktiliselt hääletu, on objektiiv ühtviisi ideaalne nii videote kui fotode tegemiseks. Objektiivi elektrooniline ava tagab kiire pildistamise ajal täpse särituse.<br/><br/>
                                        Imepärane bokeh-efekt<br/>
                                        f/1.8 ava ja 9 labaga ümar objektiiviava võimaldavad kreemjat, loomulikuna paistvat bokeh-efekti. Saate kaunilt sujuvad tulemused, isegi ava natuke vähendades.<br/><br/>
                                        Igal tänaval. Iga ilmaga. <br/>
                                        Teie Nikon Z kaamera ja see kompaktne fikseeritud fookuskaugusega objektiiv on ehitatud tänavamelu tabamiseks. Objektiivitoru iga liikuv osa on tihendatud, kaitseks tolmu ja veepiiskade eest.
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
                                    <h1 className="product-info-subtitle-mobile">Nikon täiskaader hübriidkaamerad</h1>
                                    <h1 className="product-info-title-mobile">Objektiivi bajonett</h1>
                                    <h1 className="product-info-subtitle-mobile">Nikon Z</h1>
                                    <h1 className="product-info-title-mobile">Suum / fiks</h1>
                                    <h1 className="product-info-subtitle-mobile">Fiksobjektiiv</h1>
                                    <h1 className="product-info-title-mobile">Objektiivi tüüp</h1>
                                    <h1 className="product-info-subtitle-mobile">Normaal</h1>
                                    <h1 className="product-info-title-mobile">Fookuskaugus</h1>
                                    <h1 className="product-info-subtitle-mobile">50 mm</h1>
                                    <h1 className="product-info-title-mobile">Maksimaalne ava</h1>
                                    <h1 className="product-info-subtitle-mobile">f/1.8</h1>
                                    <h1 className="product-info-title-mobile">Minimaalne ava</h1>
                                    <h1 className="product-info-subtitle-mobile">f/16</h1>
                                    <h1 className="product-info-title-mobile">Optiline konstruktsioon</h1>
                                    <h1 className="product-info-subtitle-mobile">12 elementi 9 grupis</h1>
                                    <h1 className="product-info-title-mobile">Teravustamine</h1>
                                    <h1 className="product-info-subtitle-mobile">Auto ja manuaalne fookus</h1>
                                    <h1 className="product-info-title-mobile">Teravustamismootor</h1>
                                    <h1 className="product-info-subtitle-mobile">Samm-mootor</h1>
                                    <h1 className="product-info-title-mobile">Pildistabilisaator</h1>
                                    <h1 className="product-info-subtitle-mobile">Puudub</h1>
                                    <h1 className="product-info-title-mobile">Lähim teravustamiskaugus </h1>
                                    <h1 className="product-info-subtitle-mobile">40 cm</h1>
                                    <h1 className="product-info-title-mobile">Diafragma labade arv </h1>
                                    <h1 className="product-info-subtitle-mobile">9</h1>
                                    <h1 className="product-info-title-mobile">Läbimõõt</h1>
                                    <h1 className="product-info-subtitle-mobile">76 mm</h1>
                                    <h1 className="product-info-title-mobile">Pikkus</h1>
                                    <h1 className="product-info-subtitle-mobile">86,5 mm</h1>
                                    <h1 className="product-info-title-mobile">Kaal</h1>
                                    <h1 className="product-info-subtitle-mobile">415 g</h1>
                                    <h1 className="product-info-title-mobile">Filtrikeere</h1>
                                    <h1 className="product-info-subtitle-mobile">62 mm</h1>
                                    <h1 className="product-info-title-mobile">Ilmastikukindlus </h1>
                                    <h1 className="product-info-subtitle-mobile">Ilmastiku- ja tolmukindel</h1>
                                    <h1 className="product-info-title-mobile">Komplekti sisu</h1>
                                    <h1 className="product-info-subtitle-mobile">Objektiiv, objektiivikorgid, päikesevarjuk, vutlar</h1>
                                    <h1 className="product-info-title-mobile">Sobiv päikesevarjuk</h1>
                                    <h1 className="product-info-subtitle-mobile">HB-90</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
















                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                        Tantsige valgusega. Selle täiskaadrilise S-seeria NIKKORi Z-süsteemi objektiivi silmapaistev optiline suutlikkus kehtestab f/1,8 objektiividele uue standardi. Varasemaid f/1,4 avaga fikseeritud fookuskaugusega objektiive ületava ereduse ja detailsusega on see midagi enamat kui vaid uutmoodi 50 mm objektiiv. See on imepärase fotograafia uus tulevik. <br/><br/>
                        Sujuv, vaikne, täpne <br/>
                        Kuna automaatne teravustamine on sujuv ja praktiliselt hääletu, on objektiiv ühtviisi ideaalne nii videote kui fotode tegemiseks. Objektiivi elektrooniline ava tagab kiire pildistamise ajal täpse särituse.<br/><br/>
                        Imepärane bokeh-efekt<br/>
                        f/1.8 ava ja 9 labaga ümar objektiiviava võimaldavad kreemjat, loomulikuna paistvat bokeh-efekti. Saate kaunilt sujuvad tulemused, isegi ava natuke vähendades.<br/><br/>
                        Igal tänaval. Iga ilmaga. <br/>
                        Teie Nikon Z kaamera ja see kompaktne fikseeritud fookuskaugusega objektiiv on ehitatud tänavamelu tabamiseks. Objektiivitoru iga liikuv osa on tihendatud, kaitseks tolmu ja veepiiskade eest.
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info">
                            <p className="info-description line-height" id="left-text">
                                Sobivus kaamerale <br/>
                                Objektiivi bajonett<br/>
                                Suum / fiks<br/>
                                Objektiivi tüüp<br/>
                                Fookuskaugus<br/>
                                Maksimaalne ava<br/>
                                Minimaalne ava<br/>
                                Optiline konstruktsioon<br/>
                                Teravustamine<br/>
                                Teravustamismootor<br/>
                                Pildistabilisaator<br/>
                                Lähim teravustamiskaugus<br/>
                                Diafragma labade arv<br/>
                                Läbimõõt<br/>
                                Pikkus<br/>
                                Kaal<br/>
                                Filtrikeere<br/>
                                Ilmastikukindlus<br/>
                                Komplekti sisu<br/>
                                Sobiv päikesevarjuk<br/>
                            </p>
                        </div>
                        <div className="right-info">
                            <p className="info-description line-height">
                                Nikon täiskaader hübriidkaamerad <br/>
                                Nikon Z<br/>
                                Fiksobjektiiv<br/>
                                Normaal<br/>
                                50 mm<br/>
                                f/1.8<br/>
                                f/16<br/>
                                12 elementi 9 grupis<br/>
                                Auto ja manuaalne fookus<br/>
                                Samm-mootor<br/>
                                Puudub<br/>
                                40 cm<br/>
                                9<br/>
                                76 mm<br/>
                                86,5 mm<br/>
                                415 g<br/>
                                62 mm<br/>
                                Ilmastiku- ja tolmukindel<br/>
                                Objektiiv, objektiivikorgid, päikesevarjuk, vutlar<br/>
                                HB-90<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product5;
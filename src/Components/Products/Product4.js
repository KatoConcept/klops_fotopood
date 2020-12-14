// import { Link } from "react-router-dom";

function Product4() {
    document.title = "Klõps | Delkin Devices 64GB Premium XQD Mälukaart";
    return (
        <section className="product-page">
            <div className="spacer"></div>
            <div className="main-container view-width">
                <div className="image-slider-wrapper">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="../img/product-4.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="../img/product-4-2.jpg" alt="Second slide" />
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
                    <h1 className="product-name">Delkin Devices 64GB Premium XQD Mälukaart</h1>
                    <h1 className="description-title">Toote põhiinfo</h1>
                    <p className="product-description">
                        Ühendab tööstusliku tugevuse ja töökindluse <br/>
                        Võrreldamatu jõudlusega <br/>
                        Kvaliteetne garantii  <br/>
                        Versioon 2.0 - ühilduv kiirus <br/>
                        Sobib professionaalse fotograafi jaoks <br/>
                    </p>
                    <h2 className="product-price">Hind: 119.90€</h2>
                    <button className="btn add-cart-btn">Lisa ostukorvi</button>
                </div>
                <div className="spacer"></div>
                <div className="product-overview-wrap">
                    <h1 className="overview-title">Toote ülevaade</h1>
                    <p className="overview-description">
                        Delkin Premium 2933X XQD mälukaart ühendab tööstusliku tugevuse ja töökindluse võrreldamatu jõudlusega ning lisaks kvaliteedi garantii nagu ükski teine ​​kaart. <br/> <br/>

                        Premium XQD-kaart on versioon 2.0, mis sobib professionaalsetele fotograafidele ja videograafidele sobiva kiirusega ning on spetsiaalselt välja töötatud nii Sony kui ka Nikoni uusima põlvkonna kinematograafide hostide jaoks. <br/> <br/>

                        Lisaboonusena toetab igat XQD-kaarti meie 48-tunnine asendusgarantii põhimõte, et tagada ülim katvus. <br/> <br/>

                        Täiustatud XQD salvestuskiirus <br/>
                        Kasutades 2. põlvkonna PCI Expressi liidest, saab Premium XQD-kaardi salvestuskiirus ületada 400 MB / s veatu kinokvaliteediga videote jäädvustamiseks, sealhulgas DCI 4K ja Full HD video 180 kaadrit sekundis. Samuti toetab see kuni 200 RAW-pildi pidevat sarivõtet viivitamata - ärge jätke neid väärtuslikke sekundi murdosa hetki kasutamata! <br/> <br/>

                        Sujuv töövoog <br/>
                        XQD-kaart, mis on võimeline andmeid lugema ja välja laadima kiirusega kuni 440 MB / s, tagab kiireima ja tõhusaima andmeedastuse kaardilt arvutisse, et pääseda kohe juurde teie failidele ja kiiremini pärast tootmise algusaega. See sobib ideaalselt fotograafidele ja videograafidele, kellel on vaja suur hulk andmeid kiiresti maha laadida ja uuesti pildistamise juurde asuda. <br/> <br/>

                        Testitud ühilduvuse osas <br/>
                        Iga XQD-kaart on läbinud ulatusliku testimise, et tagada tänapäevaste tippklassi XQD-hostide täielik funktsionaalsus ja jõudlus, sealhulgas Nikoni tippklassi süsteemikaamerad ja mitmed Sony XDCAM Super 35 ringhäälingukaamerad. Premium XQD mälukaart on kaart, mida saate kiireks ja usaldusväärseks foto- ja videolõikamiseks usaldada. <br/> <br/>

                        Vastupidav disain <br/>
                        Ehitatud ka kõige raskemate pildistamiskeskkondade talumiseks, on Premium XQD-kaart vastupidavalt loodud löögikindlaks, magnetikindlaks, röntgenikindlaks, antistaatiliseks, UV-kaitsega ja äärmuslikele temperatuuridele vastupidavaks. <br/> <br/>

                        Maailma parim garantii <br/>
                        Kusagil mujal ei pakuta, lisaks Delkin XQD-mälukaartidele ja „48HR-i logoga“ mälukaartidele on lisaks meie eluaegse garantii poliitikale ka 48-tunnine lisagarantii. Vastupidavus: põrutuskindel, veekindel, äärmuslik temperatuur <br/> <br/>
                    </p>
                </div>
                <div className="spacer"></div>
                <div className="product-info-wrap">
                    <h1 className="overview-title">Toote andmed</h1>
                    <div className="product-info-sides">
                        <div className="left-info box-except">
                            <p className="info-description line-height info-except" id="left-text">
                            2933X kiirusreiting <br/>
                            Maksimaalne lugemiskiirus: 440 MB / s<br/>
                            Maksimaalne kirjutamiskiirus: 400 MB / s<br/>
                            Vastab XQD-vormingu 2. versioonile<br/>
                            Ideaalne jõudlus nõudliku 4K video ja kiire RAW-sarivõtte jaoks<br/>
                            Äärmiselt vastupidav disain<br/>
                            48-tunnine asendusgarantii<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product4;
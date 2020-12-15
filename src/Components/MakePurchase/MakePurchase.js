import { Link } from "react-router-dom";

function MakePurchase() {
  document.title = "Klõps | Ostu vormistamine";
  return (
    <section className="purchase-page">
      <div className="main-container view-width">
        <div className="spacer"></div>
        <h1 className="page-title">Ostu vormistamine</h1>
        <div className="spacer"></div>
        <div className="row-wrapper">
          <div className="row">
            <div className="col-6 shop-sub-title">Tooted</div>
            <div className="col shop-sub-title">Hind</div>
            <div className="col shop-sub-title quantity-show">Kogus</div>
            <div className="col shop-sub-title text-right">Summa</div>
          </div>
        </div>
        <div className="row-wrapper-2">
          <div className="row">
            <div className="col-6 purchase-sub-title">
              <Link to="/products/nikon_z7" className="purchase-item-link">
                <p className="purchase-item-name"><span>1x</span> Nikon Z7</p>
              </Link>
              <Link to="/products/sigma_35mm_f_1_4" className="purchase-item-link">
                <p className="purchase-item-name"><span>3x</span> Sigma 35mm f/1.4</p>
              </Link>
              <Link to="/products/delkin_devices_64gb_premium_xqd_malukaart" className="purchase-item-link">
                <p className="purchase-item-name"><span>2x</span> Delkin Devices 64GB Premium XQD Mälukaart</p>
              </Link>
            </div>
            <div className="col purchase-sub-title">
              <p className="purchase-item-price">2799.90€</p>
              <p className="purchase-item-price">749.90€</p>
              <p className="purchase-item-price">119.90€</p>
            </div>
            <div className="col purchase-sub-title">
              <p className="purchase-item-quantity quantity-show">1</p>
              <p className="purchase-item-quantity quantity-show">3</p>
              <p className="purchase-item-quantity quantity-show">2</p>
            </div>
            <div className="col purchase-sub-title text-right">
              <p className="purchase-item-price">2799.90€</p>
              <p className="purchase-item-price">2249.90€</p>
              <p className="purchase-item-price">239.80€</p>
            </div>
          </div>
        </div>
        <div className="total-price-wrap">
          <h1 className="total-price text-right">Kokku: 5280.40€</h1>
        </div>
        <div className="spacer"></div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail"><h1 className="form-title">E-posti aadress <span className="color-red">*</span></h1></label>
              <input type="email" class="form-control" id="inputEmail" placeholder="teetmargna@gmail.com" required="true" />
            </div>
            <div class="form-group col-md-6">
              <h1 class="form-title custom-form-title">Arve saaja</h1>
              <div class="custom-control custom-radio custom-control-inline custom-radio-margin">
                <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input" checked="checked" />
                <label class="custom-control-label" for="customRadioInline1">Eraisik</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input" checked="checked" />
                <label class="custom-control-label" for="customRadioInline2">Ettevõte</label>
              </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputFirstname"><h1 className="form-title">Eesnimi <span className="color-red">*</span></h1></label>
              <input type="name" class="form-control" id="inputFirstName" placeholder="" required="true" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputLastName"><h1 className="form-title">Perekonnanimi <span className="color-red">*</span></h1></label>
              <input type="name" class="form-control" id="inputLastName" placeholder="" required="true" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputHouse"><h1 className="form-title">Tänav, maja <span className="color-red">*</span></h1></label>
              <input type="name" class="form-control form-multiple" id="inputHouse" placeholder="" required="true" />
              <input type="name" class="form-control form-multiple" id="inputHouse2" placeholder="" />
              <input type="name" class="form-control" id="inputHouse3" placeholder="" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity"><h1 className="form-title">Linn <span className="color-red">*</span></h1></label>
              <input type="name" class="form-control" id="inputCity" placeholder="" required="true" />
              <label for="inputCounty"><h1 className="form-title">Maakond <span className="color-red">*</span></h1></label>
              <select class="form-control">
                <option value="" disabled selected>Vali maakond</option>
                <option>Mango</option>
                <option>Mingo</option>
                <option>Bongo</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPostalCode"><h1 className="form-title">Postiindeks <span className="color-red">*</span></h1></label>
              <input type="name" class="form-control" id="inputPostalCode" placeholder="" required="true" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputCountry"><h1 className="form-title">Riik <span className="color-red">*</span></h1></label>
              <select class="form-control">
                <option>Eesti</option>
                <option>Läti</option>
                <option>Leedu</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPhoneNumber"><h1 className="form-title">Telefoninumber <span className="color-red">*</span></h1></label>
              <input type="name" class="form-control" id="inputPhoneNumber" placeholder="" required="true" />
              <h1 class="form-title custom-form-title-3">Makseviis</h1>
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio4" name="customRadio2" class="custom-control-input" checked="checked" />
                <label class="custom-control-label delivery-label d-flex justify-content-between" for="customRadio4">
                  <h1 className="payment-method">Arve alusel</h1>
                </label>
              </div>
            </div>
            <div class="form-group col-md-6">
              <h1 class="form-title custom-form-title-2">Tarneviis</h1>
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" checked="checked" />
                <label class="custom-control-label delivery-label d-flex justify-content-between" for="customRadio1">
                  <h1 className="delivery-left">0.00€</h1><h1 className="text-right delivery-right">Pakiautomaat DPD</h1>
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" checked="checked" />
                <label class="custom-control-label delivery-label d-flex justify-content-between" for="customRadio2">
                  <h1 className="delivery-left">0.00€</h1><h1 className="text-right delivery-right">Pakiautomaat Itella</h1>
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" checked="checked" />
                <label class="custom-control-label delivery-label d-flex justify-content-between" for="customRadio3">
                  <h1 className="delivery-left">0.00€</h1><h1 className="text-right delivery-right">Pakiautomaat Omniva</h1>
                </label>
              </div>
              <select class="form-control">
                <option value="" disabled selected>Vali asukoht</option>
                <option>Eesti</option>
                <option>Läti</option>
                <option>Leedu</option>
              </select>
            </div>
          </div>

          <div className="place-order-wrap">
            <div class="form-group float-right">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" required="true" />
                <label class="form-check-label" for="gridCheck">
                  <h1 className="agree-terms">Nõustun Klõps OÜ e-poe kasutustingimustega</h1>
                </label>
              </div>
              <button type="submit" class="btn float-right">Esita tellimus</button>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="spacer"></div>
        </form>
      </div>
    </section>
  );
}

export default MakePurchase;

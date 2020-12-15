import Header from "./Components/Header/Header";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Home from "./Components/Home/Home";
import MakePurchase from "./Components/MakePurchase/MakePurchase";
import ShopCart from "./Components/ShopCart/ShopCart";
import Products from "./Components/Products/Products";
import Product1 from "./Components/Products/Product1";
import Product2 from "./Components/Products/Product2";
import Product3 from "./Components/Products/Product3";
import Product4 from "./Components/Products/Product4";
import Product5 from "./Components/Products/Product5";
import Product6 from "./Components/Products/Product6";
import Product7 from "./Components/Products/Product7";
import Product8 from "./Components/Products/Product8";
import Product9 from "./Components/Products/Product9";
import Product10 from "./Components/Products/Product10";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <SideDrawer />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shopping_cart">
            <ShopCart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/make_purchase">
            <MakePurchase />
          </Route>
          <Route exact path="/products/nikon_z7">
            <Product1 />
          </Route>
          <Route exact path="/products/sigma_35mm_f_1_4">
            <Product2 />
          </Route>
          <Route exact path="/products/en-el15_lithium-ion_battery_pack_7_0V_1900mah">
            <Product3 />
          </Route>
          <Route exact path="/products/delkin_devices_64gb_premium_xqd_malukaart">
            <Product4 />
          </Route>
          <Route exact path="/products/nikon_nikkor_z_50mm_f_1_8_s">
            <Product5 />
          </Route>
          <Route exact path="/products/nikon_ftz_lens_adapter_f_f-lens_to_z-kamera">
            <Product6 />
          </Route>
          <Route exact path="/products/kata_lite-433_dl_fotokott">
            <Product7 />
          </Route>
          <Route exact path="/products/sony_xqd_sd_kaardilugeja">
            <Product8 />
          </Route>
          <Route exact path="/products/nikon_akulaadija_mh-25a_en-el15a">
            <Product9 />
          </Route>
          <Route exact path="/products/nikon_valklamp_sb-700">
            <Product10 />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
            <h1>Broken 4040</h1>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

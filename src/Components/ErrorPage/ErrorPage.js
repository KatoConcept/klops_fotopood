import { Link } from "react-router-dom";

function ErrorPage() {
  document.title = "Klõps | Lehte ei leitud";
  return (
    <section className="error-page">
        <div className="error-page-wrapper view-width">
            <Link to="/">
                <img src="./img/logo1_png.png" height="80px" alt="" />
            </Link>
            <h1 className="text-center">
                See leht ei ole kahjuks saadaval. <br/>
                <Link to="/"><span>Tagasi avalehele</span></Link>
            </h1>
        </div>
    </section>
  );
}

export default ErrorPage;

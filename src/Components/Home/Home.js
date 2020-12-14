import { Link } from "react-router-dom";

function Home() {
  document.title = "Klõps | Avaleht";
  return (
    <section className="main-page">
      <div className="main-container view-width">
        <div className="text-area">
          <h1>Kõik Sinule ja Sinu fotode jaoks vajalik ühest kohast!</h1>
          <Link to="/products" className="btn">Vaata tooteid</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;

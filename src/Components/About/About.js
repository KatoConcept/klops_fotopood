// import { Link } from "react-router-dom";

function About() {
  document.title = "Klõps | Meie kohta";
  return (
    <div className="about-page">
      <div className="about-page-wrapper view-width">
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div>
          <div class="row">
            <div class="colr-lg-3 col-md6 col-sm-12 d-flex justify-content-center mission-wrapper">
              <div class="mission">
                <div class="text-center">
                </div>
                <h4 class="sub-title text-center">Meie missioon</h4>
                <p class="para-text-2 text-center">Usume, et kõik on loojad. Meie missioon on inspireerida, harida ja varustada unistusi reaalsuseks.</p>
              </div>
              <div class="mission">
                <div class="text-center">
                </div>
                <h4 class="sub-title text-center">Meie visioon</h4>
                <p class="para-text-2 text-center">Olge iga looja eduloo lahutamatu osa.</p>
              </div>
              <div class="mission">
                <div class="text-center">
                </div>
                <h4 class="sub-title text-center">Meie tagatis</h4>
                <p class="para-text-2 text-center">Hoiame teid inspireerituna ja ühenduses meie proffide ja kaaslastega.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="group-photo-wrapper">
          <img src="../img/about-7.jpg" width="50%" alt="" className="group-photo center-img"/>
        </div>
        <div className="spacer"></div>
        <div className="employees-wrapper">
          <div className="employee-card">
            <div className="employee-photo" id="employee-1"></div>
            <div className="employee-info">
              <h1 className="employee-name">Mart Sander</h1>
              <h2 className="employee-job">Fotograaf</h2>
            </div>
          </div>
          <div className="employee-card">
            <div className="employee-photo" id="employee-2"></div>
            <div className="employee-info">
              <h1 className="employee-name">Mart Sander</h1>
              <h2 className="employee-job">Fotograaf</h2>
            </div>
          </div>
          <div className="employee-card">
            <div className="employee-photo" id="employee-3"></div>
            <div className="employee-info">
              <h1 className="employee-name">Mart Sander</h1>
              <h2 className="employee-job">Fotograaf</h2>
            </div>
          </div>
          <div className="employee-card">
            <div className="employee-photo" id="employee-4"></div>
            <div className="employee-info">
              <h1 className="employee-name">Mart Sander</h1>
              <h2 className="employee-job">Fotograaf</h2>
            </div>
          </div>
          <div className="employee-card">
            <div className="employee-photo" id="employee-5"></div>
            <div className="employee-info">
              <h1 className="employee-name">Mart Sander</h1>
              <h2 className="employee-job">Fotograaf</h2>
            </div>
          </div>
          <div className="employee-card">
            <div className="employee-photo" id="employee-6"></div>
            <div className="employee-info">
              <h1 className="employee-name">Mart Sander</h1>
              <h2 className="employee-job">Fotograaf</h2>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default About;
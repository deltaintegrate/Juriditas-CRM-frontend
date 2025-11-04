import FooterLandingPage from "../../layout/partials/Landing/FooterLandingPage";
import HeaderLandingPage from "../../layout/partials/Landing/HeaderLandingPage";
import deskIcon from "./desk_icon.png";
import iconBank from "./5972613_bank_business_cash_finance_house_icon 1.png";
import iconGavel from "./gavel-solid 2.png";
import iconChart from "./465076_statistic_analytics_charts_diagram_graph_icon 1.png";
import iconScale from "./scale-balanced-solid 1.png";
import build from "./build.png";
import database from "./database.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="content-full">
      <HeaderLandingPage />
      <div className="landing-page">
        <div>
          <img src={iconBank} alt="Bank Icon" className="icon top-left" />
          <img src={iconScale} alt="Scale Icon" className="icon top-right" />
          <img src={iconGavel} alt="Gavel Icon" className="icon bottom-left" />
          <img src={iconChart} alt="Chart Icon" className="icon bottom-right" />
          <div className="initial-content">
            <div className="mid-content">
              <h1>Gestiona Tus Clientes legales en un solo lugar</h1>
              <div className="initial-component">
                <img
                  src={deskIcon}
                  alt="desk alternative"
                  className="desk-image"
                />
                <button className="primary-button">
                  Conoce más sobre nosotros
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mid-upper-content">
          <img src={build} alt="desk alternative" className="desk-image" />
          < div className= 'content'>
          <h1>Construye</h1>
          <p>
          Somos la plataforma que brinda estrecha relacion entre firmas de abogados y sus clientes, con todo un ecosistema digital para ello.
          </p>
          </div>
        </div>
        <div className="mid-content-term">
        <div className="mid-upper-content">
          <h1>Administra</h1>
          <p>
          Toma el control de tus casos, mira el flujo de los procesos, administra tus documentos, administra tu agenda
          </p>
        </div>
          <img src={database} alt="database alternative" className="icon database-image" />
        </div>
        <div className="mid-upper-content">
          <img src={build} alt="desk alternative" className="desk-image" />
          < div className= "content">
          <h1>Construye</h1>
          <p>
          Somos la plataforma que brinda estrecha relacion entre firmas de abogados y sus clientes, con todo un ecosistema digital para ello.
          </p>
          </div>
        </div>
      </div>
      <FooterLandingPage />
    </div>
  );
}

export default LandingPage;
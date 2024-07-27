import FooterLandingPage from "../../layout/partials/Landing/FooterLandingPage"
import HeaderLandingPage from "../../layout/partials/Landing/HeaderLandingPage"
import './LandingPage.css';

function LandingPage() {
  return (
  <>
  <HeaderLandingPage />
  <div>
    <div>
      <h1>
        Gestiona Tus Clientes   legales en un solo lugar
      </h1>
      <div className="initial-component">
        <img src="" alt="desk alternative" className="desk-image"/>
      </div>
      <button>Conoce más sobre nosotros</button>
    </div>
    <div>
        <img />
        <div>Construye</div>
        <p>Somos la plataforma que brinda estrecha relacion entre firmas de abogados y sus clientes, con todo un ecosistema digital para ello.</p>
    </div>
  </div>
  <FooterLandingPage />
  </>)
}

export default LandingPage
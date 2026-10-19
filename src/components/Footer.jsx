import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="nexo-footer">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <div className="footer-logo">NEXO</div>
          <p>
            La plataforma oficial de pedidos de comida pensada para estudiantes de colegios en Colombia. 
            Conectamos los mejores restaurantes con tu institución educativa.
          </p>
          <div className="footer-badges">
            <span>🎒 100% Para Colegios</span>
            <span>🔒 Entrega Segura</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">🏠 Inicio</Link></li>
            <li><Link to="/comidas">🍔 Comidas</Link></li>
            <li><Link to="/restaurantes">🍽 Restaurantes</Link></li>
            <li><Link to="/carrito">🛒 Carrito</Link></li>
            <li><Link to="/mis-pedidos">🍴 Mis Pedidos</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Restaurantes</h4>
          <ul>
            <li><Link to="/frisby">🍗 Frisby</Link></li>
            <li><Link to="/mcdonalds">🍔 McDonald&apos;s</Link></li>
            <li><Link to="/kfc">🍗 KFC</Link></li>
            <li><Link to="/pizza-hut">🍕 Pizza Hut</Link></li>
            <li><Link to="/subway">🥪 Subway</Link></li>
            <li><Link to="/santa-rosa">🍦 Santa Rosa</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Cuenta Estudiantil</h4>
          <ul>
            <li><Link to="/perfil">👤 Mi Perfil</Link></li>
            <li><Link to="/certificado">📄 Certificado de Estudio</Link></li>
            <li><Link to="/configuracion">⚙️ Configuración</Link></li>
            <li><Link to="/login">🔐 Iniciar Sesión</Link></li>
            <li><Link to="/registro">📝 Registrarse</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NEXO - Plataforma Estudiantil de Domicilios. Desarrollado con React y Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;

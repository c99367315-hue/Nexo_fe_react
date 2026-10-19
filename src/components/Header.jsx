import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="barra-superior">
      <Link to="/" className="logo" onClick={closeMenu}>
        NEXO
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Abrir menú"
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      <nav className={`menu ${mobileMenuOpen ? "menu-open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "activo" : "")}
          end
          onClick={closeMenu}
        >
          🏠 Inicio
        </NavLink>

        <NavLink
          to="/comidas"
          className={({ isActive }) => (isActive ? "activo" : "")}
          onClick={closeMenu}
        >
          🍔 Comida
        </NavLink>

        <NavLink
          to="/restaurantes"
          className={({ isActive }) => (isActive ? "activo" : "")}
          onClick={closeMenu}
        >
          🍽 Restaurantes
        </NavLink>

        <NavLink
          to="/carrito"
          className={({ isActive }) => (isActive ? "activo" : "")}
          onClick={closeMenu}
        >
          🛒 Carrito
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>

        <NavLink
          to="/perfil"
          className={({ isActive }) => (isActive ? "activo" : "")}
          onClick={closeMenu}
        >
          👤 Perfil
        </NavLink>

        <NavLink
          to="/mis-pedidos"
          className={({ isActive }) => (isActive ? "activo" : "")}
          onClick={closeMenu}
        >
          🍴 Mis Pedidos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

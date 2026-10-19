import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export function Layout() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Pages with full immersive layout (login, register, welcome)
  const isAuthOrWelcome =
    path === "/login" ||
    path === "/inicio-sesion" ||
    path === "/inicio-sesion.html" ||
    path === "/registro" ||
    path === "/registrarse" ||
    path === "/registro.html" ||
    path === "/registrarse.html" ||
    path === "/bienvenido" ||
    path === "/bienvenidso.html" ||
    path === "/portada" ||
    path === "/portada.html";

  if (isAuthOrWelcome) {
    return <Outlet />;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

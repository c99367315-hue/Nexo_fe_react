import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import "../styles/configuracion.css";

export function Configuracion() {
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [notificaciones, setNotificaciones] = useState(true);
  const [idioma, setIdioma] = useState("Español");

  const handleToggleNotificaciones = () => {
    setNotificaciones(!notificaciones);
    showToast(!notificaciones ? "Notificaciones activadas." : "Notificaciones pausadas.");
  };

  const handleLogout = () => {
    logout();
    showToast("Sesión cerrada con éxito.");
    navigate("/login");
  };

  return (
    <main className="configuracion-page">
      <div className="configuracion-contenedor">
        {/* PERFIL */}
        <section className="config-perfil-card">
          <div className="config-foto">
            {user.avatarImage ? (
              <img src={user.avatarImage} alt={user.name} />
            ) : (
              <span>{user.avatar || "👤"}</span>
            )}
          </div>

          <div className="config-datos">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <Link to="/perfil">Editar perfil</Link>
          </div>
        </section>

        {/* CONFIGURACIÓN */}
        <section className="configuracion-seccion">
          <h2>Configuración</h2>

          <div className="config-opciones-list">
            {/* INFORMACIÓN PERSONAL */}
            <div
              className="config-opcion-item"
              onClick={() => navigate("/perfil")}
            >
              <div className="config-icono-circulo">👤</div>
              <div className="config-opcion-info">
                <h3>Información personal</h3>
                <p>Cambia tu nombre, colegio, grado y datos personales</p>
              </div>
              <span style={{ color: "#888", fontSize: "18px" }}>→</span>
            </div>

            {/* NOTIFICACIONES */}
            <div className="config-opcion-item">
              <div className="config-icono-circulo">🔔</div>
              <div className="config-opcion-info">
                <h3>Notificaciones</h3>
                <p>Alertas de estado de pedidos en el colegio</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={notificaciones}
                  onChange={handleToggleNotificaciones}
                />
                <span className="slider-switch"></span>
              </label>
            </div>

            {/* PRIVACIDAD */}
            <div
              className="config-opcion-item"
              onClick={() => showToast("Tu cuenta estudiantil está protegida con cifrado SHA-256.")}
            >
              <div className="config-icono-circulo">🔒</div>
              <div className="config-opcion-info">
                <h3>Privacidad y seguridad</h3>
                <p>Contraseñas seguras y verificación institucional</p>
              </div>
              <span style={{ color: "#888", fontSize: "14px" }}>Verificada</span>
            </div>

            {/* IDIOMA */}
            <div
              className="config-opcion-item"
              onClick={() => {
                const nextLang = idioma === "Español" ? "English" : "Español";
                setIdioma(nextLang);
                showToast(`Idioma configurado en: ${nextLang}`);
              }}
            >
              <div className="config-icono-circulo">🌐</div>
              <div className="config-opcion-info">
                <h3>Idioma</h3>
                <p>Lenguaje predeterminado de la plataforma</p>
              </div>
              <span style={{ fontWeight: "bold", color: "#e50914" }}>{idioma}</span>
            </div>

            {/* CERRAR SESIÓN */}
            <div className="config-opcion-item cerrar" onClick={handleLogout}>
              <div className="config-icono-circulo">🚪</div>
              <div className="config-opcion-info">
                <h3>Cerrar sesión</h3>
                <p>Salir de tu cuenta escolar en este dispositivo</p>
              </div>
              <span style={{ color: "#e50914", fontWeight: "bold" }}>Salir</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Configuracion;

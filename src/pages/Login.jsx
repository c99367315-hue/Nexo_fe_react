import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import "../styles/auth.css";

export function Login() {
  const [email, setEmail] = useState("Jeronimo1724@gmail.com");
  const [password, setPassword] = useState("nexo2026");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      showToast("¡Bienvenido a NEXO!");
      navigate("/perfil");
    } catch (err) {
      setError(err.message || "Error al iniciar sesión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <main className="auth-card">
        <div className="auth-logo">
          <Link to="/">NEXO</Link>
        </div>

        <h1>Iniciar sesión</h1>
        <p className="auth-subtitulo">Ingresa a tu cuenta para continuar</p>

        {error && <div className="auth-error-banner">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-campo">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-campo">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="auth-btn-submit"
            disabled={loading}
          >
            {loading ? "Iniciando..." : "Iniciar sesión"}
          </button>
        </form>

        <div className="auth-footer-link">
          <span>¿No tienes una cuenta?</span>
          <Link to="/registro">Registrarse</Link>
        </div>
      </main>
    </div>
  );
}

export default Login;

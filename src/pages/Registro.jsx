import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import "../styles/auth.css";

export function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [colegio, setColegio] = useState("");
  const [grado, setGrado] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [certificateFile, setCertificateFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);
  const { register } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setCertificateFile({
        name: file.name,
        type: file.type,
        size: file.size,
        dataUrl: event.target.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (!certificateFile) {
      setError("Por favor adjunta tu certificado de estudio escolar.");
      return;
    }

    setLoading(true);

    try {
      await register({
        nombre,
        apellido,
        email,
        colegio,
        grado,
        password,
        certificateFile
      });

      showToast("¡Cuenta escolar creada con éxito!");
      navigate("/perfil");
    } catch (err) {
      setError(err.message || "Error al crear la cuenta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <main className="auth-card register-card">
        <div className="auth-logo">
          <Link to="/">NEXO</Link>
        </div>

        <h1>Crear cuenta</h1>
        <p className="auth-subtitulo">Regístrate para comenzar a usar NEXO en tu colegio</p>

        {error && <div className="auth-error-banner">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* NOMBRE Y APELLIDO */}
          <div className="auth-fila">
            <div className="auth-campo">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="auth-campo">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                placeholder="Tu apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
          </div>

          {/* CORREO */}
          <div className="auth-campo">
            <label htmlFor="correo">Correo electrónico *</label>
            <input
              type="email"
              id="correo"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* COLEGIO */}
          <div className="auth-campo">
            <label htmlFor="colegio">Institución Educativa / Colegio *</label>
            <input
              type="text"
              id="colegio"
              placeholder="Nombre de tu colegio"
              value={colegio}
              onChange={(e) => setColegio(e.target.value)}
              required
            />
          </div>

          {/* GRADO */}
          <div className="auth-campo">
            <label htmlFor="grado">Grado *</label>
            <select
              id="grado"
              value={grado}
              onChange={(e) => setGrado(e.target.value)}
              required
            >
              <option value="">Selecciona tu grado</option>
              <option value="6">6°</option>
              <option value="7">7°</option>
              <option value="8">8°</option>
              <option value="9">9°</option>
              <option value="10">10°</option>
              <option value="11">11°</option>
            </select>
          </div>

          {/* CONTRASEÑA Y CONFIRMAR */}
          <div className="auth-fila">
            <div className="auth-campo">
              <label htmlFor="contrasena">Contraseña *</label>
              <input
                type="password"
                id="contrasena"
                placeholder="Crea una contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="auth-campo">
              <label htmlFor="confirmar">Confirmar contraseña *</label>
              <input
                type="password"
                id="confirmar"
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* CERTIFICADO */}
          <div className="auth-certificado-box">
            <div className="auth-certificado-texto">
              <div className="auth-icono-certificado">📄</div>
              <div>
                <h3>
                  Certificado de estudio <span>*</span>
                </h3>
                <p>
                  Debes adjuntar un certificado oficial que demuestre que actualmente eres estudiante activo.
                </p>
              </div>
            </div>

            <input
              type="file"
              ref={fileInputRef}
              id="archivo-certificado"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            <button
              type="button"
              className="auth-btn-subir"
              onClick={() => fileInputRef.current?.click()}
            >
              📎 {certificateFile ? "Cambiar archivo adjunto" : "Subir certificado"}
            </button>

            {certificateFile && (
              <div className="auth-file-selected">
                <span>✓ {certificateFile.name}</span>
                <span style={{ fontSize: "11px" }}>
                  ({Math.round(certificateFile.size / 1024)} KB)
                </span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="auth-btn-submit"
            disabled={loading}
          >
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>

        <div className="auth-footer-link">
          <span>¿Ya tienes una cuenta?</span>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </main>
    </div>
  );
}

export default Registro;

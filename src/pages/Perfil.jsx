import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import "../styles/perfil.css";

export function Perfil() {
  const { user, updateProfile, updateAvatar, logout } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  // Editing state for each field
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const fileInputRef = useRef(null);

  const startEdit = (field, currentValue) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const saveEdit = (field) => {
    if (!tempValue.trim()) {
      showToast("El campo no puede estar vacío.", "error");
      return;
    }
    updateProfile({ [field]: tempValue.trim() });
    setEditingField(null);
    showToast("Datos actualizados correctamente.");
  };

  const handleAvatarFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast("Por favor selecciona una imagen válida.", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      updateAvatar(event.target.result, true);
      showToast("Foto de perfil actualizada.");
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    logout();
    showToast("Sesión cerrada.");
    navigate("/login");
  };

  return (
    <main className="perfil-page">
      <div className="perfil-container">
        {/* =========================
             CABECERA DEL PERFIL
        ========================= */}
        <section className="perfil-header">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleAvatarFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />

          <button
            type="button"
            className="foto-perfil"
            title="Cambiar foto de perfil"
            onClick={() => fileInputRef.current?.click()}
          >
            {user.avatarImage ? (
              <img src={user.avatarImage} alt={user.name} />
            ) : (
              <span>{user.avatar || "👤"}</span>
            )}
            <span className="icono-cambiar">✎</span>
          </button>

          <div className="perfil-titulo">
            <h1>Mi perfil</h1>
            <p>Administra tu información personal y escolar</p>
          </div>
        </section>

        {/* =========================
             BOTONES DE SECCIÓN
        ========================= */}
        <div className="secciones-perfil">
          <button type="button" className="seccion-tab activa">
            Detalles
          </button>

          <Link to="/perfil2" className="seccion-tab">
            Mis actividades
          </Link>
        </div>

        {/* =========================
             DETALLES
        ========================= */}
        <section className="detalles-container">
          {/* NOMBRE */}
          <div className="dato-item">
            <div className="dato-informacion">
              <span>Nombre</span>
              {editingField === "name" ? (
                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <input
                    type="text"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    autoFocus
                  />
                  <button
                    className="btn-nexo-primary"
                    style={{ padding: "6px 14px", fontSize: "13px" }}
                    onClick={() => saveEdit("name")}
                  >
                    Guardar
                  </button>
                  <button
                    className="btn-nexo-secondary"
                    style={{ padding: "6px 12px", fontSize: "13px" }}
                    onClick={() => setEditingField(null)}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <p>{user.name}</p>
              )}
            </div>

            {editingField !== "name" && (
              <button
                type="button"
                className="btn-editar-dato"
                title="Editar nombre"
                onClick={() => startEdit("name", user.name)}
              >
                ✎
              </button>
            )}
          </div>

          {/* CORREO */}
          <div className="dato-item">
            <div className="dato-informacion">
              <span>Correo electrónico</span>
              {editingField === "email" ? (
                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <input
                    type="email"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    autoFocus
                  />
                  <button
                    className="btn-nexo-primary"
                    style={{ padding: "6px 14px", fontSize: "13px" }}
                    onClick={() => saveEdit("email")}
                  >
                    Guardar
                  </button>
                  <button
                    className="btn-nexo-secondary"
                    style={{ padding: "6px 12px", fontSize: "13px" }}
                    onClick={() => setEditingField(null)}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <p>{user.email}</p>
              )}
            </div>

            {editingField !== "email" && (
              <button
                type="button"
                className="btn-editar-dato"
                title="Editar correo"
                onClick={() => startEdit("email", user.email)}
              >
                ✎
              </button>
            )}
          </div>

          {/* COLEGIO */}
          <div className="dato-item">
            <div className="dato-informacion">
              <span>Colegio</span>
              {editingField === "colegio" ? (
                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <input
                    type="text"
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    autoFocus
                  />
                  <button
                    className="btn-nexo-primary"
                    style={{ padding: "6px 14px", fontSize: "13px" }}
                    onClick={() => saveEdit("colegio")}
                  >
                    Guardar
                  </button>
                  <button
                    className="btn-nexo-secondary"
                    style={{ padding: "6px 12px", fontSize: "13px" }}
                    onClick={() => setEditingField(null)}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <p>{user.colegio}</p>
              )}
            </div>

            {editingField !== "colegio" && (
              <button
                type="button"
                className="btn-editar-dato"
                title="Editar colegio"
                onClick={() => startEdit("colegio", user.colegio)}
              >
                ✎
              </button>
            )}
          </div>

          {/* GRADO */}
          <div className="dato-item">
            <div className="dato-informacion">
              <span>Grado</span>
              {editingField === "grado" ? (
                <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                  <select
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    style={{ padding: "8px 12px", borderRadius: "6px" }}
                  >
                    <option value="6">6°</option>
                    <option value="7">7°</option>
                    <option value="8">8°</option>
                    <option value="9">9°</option>
                    <option value="10">10°</option>
                    <option value="11">11°</option>
                  </select>
                  <button
                    className="btn-nexo-primary"
                    style={{ padding: "6px 14px", fontSize: "13px" }}
                    onClick={() => saveEdit("grado")}
                  >
                    Guardar
                  </button>
                  <button
                    className="btn-nexo-secondary"
                    style={{ padding: "6px 12px", fontSize: "13px" }}
                    onClick={() => setEditingField(null)}
                  >
                    Cancelar
                  </button>
                </div>
              ) : (
                <p>{user.grado}°</p>
              )}
            </div>

            {editingField !== "grado" && (
              <button
                type="button"
                className="btn-editar-dato"
                title="Editar grado"
                onClick={() => startEdit("grado", user.grado)}
              >
                ✎
              </button>
            )}
          </div>

          {/* =========================
               CERTIFICADO
          ========================= */}
          <Link to="/certificado" className="btn-perfil-certificado">
            <div className="certificado-left">
              <span style={{ fontSize: "20px" }}>📄</span>
              <span>Certificado de estudio</span>
            </div>
            <span style={{ fontSize: "20px" }}>→</span>
          </Link>

          {/* =========================
               CERRAR SESIÓN
          ========================= */}
          <button
            type="button"
            className="btn-perfil-cerrar-sesion"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </section>
      </div>
    </main>
  );
}

export default Perfil;

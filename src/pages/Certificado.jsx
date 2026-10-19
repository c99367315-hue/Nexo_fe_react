import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import "../styles/certificado.css";

export function Certificado() {
  const { certificate, user, uploadCertificate, removeCertificate } = useAuth();
  const { showToast } = useToast();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowed = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
    if (!allowed.includes(file.type)) {
      showToast("Formato no compatible. Por favor sube PDF, JPG o PNG.", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      uploadCertificate({
        fileName: file.name,
        fileType: file.type,
        fileSize: `${Math.round(file.size / 1024)} KB`,
        fileData: event.target.result
      });
      showToast("Certificado actualizado con éxito.");
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    if (!certificate) return;

    if (certificate.fileData) {
      const a = document.createElement("a");
      a.href = certificate.fileData;
      a.download = certificate.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("Descargando certificado de estudio...");
    } else {
      // Create a downloadable mock text/pdf certificate
      const docText = `====================================\nNEXO - CERTIFICADO DE ESTUDIO OFICIAL\n====================================\nEstudiante: ${user.name}\nInstitución: ${user.colegio}\nGrado: ${user.grado}°\nFecha de expedición: ${certificate.uploadDate}\nEstado: Matrícula Activa y Verificada\n====================================`;
      const blob = new Blob([docText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${user.name.replace(/\s+/g, "_")}_Certificado.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Descargando certificado...");
    }
  };

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar tu certificado de estudio?")) {
      removeCertificate();
      showToast("Certificado eliminado.");
    }
  };

  return (
    <main className="certificado-page">
      <div className="certificado-contenido">
        {/* ENCABEZADO */}
        <div className="certificado-encabezado">
          <h1>Certificado de estudio</h1>
          <p>Aquí puedes consultar y actualizar tu certificado de estudio escolar.</p>
        </div>

        {/* INPUT OCULTO DE ARCHIVO */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          style={{ display: "none" }}
        />

        {/* TARJETA DEL CERTIFICADO */}
        <section className="certificado-card">
          <div className="certificado-titulo-seccion">
            <div className="icono-documento">📄</div>
            <div>
              <h2>Certificado de estudio</h2>
              <p>Documento registrado en tu perfil estudiantil NEXO</p>
            </div>
          </div>

          {/* VISTA PREVIA DEL DOCUMENTO */}
          <div className="vista-certificado">
            {certificate ? (
              <div className="documento-simulado">
                <div className="documento-contenido-borde">
                  <div className="documento-logo-marca">NEXO</div>
                  <h3>CERTIFICADO DE ESTUDIO</h3>
                  <div className="linea-documento-roja"></div>

                  <p>
                    La institución educativa certifica que el siguiente estudiante se encuentra formalmente matriculado y activo.
                  </p>

                  <div className="datos-documento-grid">
                    <div>
                      <span>Estudiante</span>
                      <strong>{certificate.studentName || user.name}</strong>
                    </div>

                    <div>
                      <span>Institución</span>
                      <strong>{certificate.institution || user.colegio}</strong>
                    </div>

                    <div>
                      <span>Grado</span>
                      <strong>{certificate.grade || `${user.grado}°`}</strong>
                    </div>
                  </div>

                  <div className="firma-sello">
                    <div>
                      <span>Secretaría Académica</span>
                    </div>
                    <div>
                      <span>Rectoría y Sello Oficial</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
                <span style={{ fontSize: "40px", display: "block", marginBottom: "10px" }}>📄</span>
                <p>No tienes ningún certificado de estudio adjuntado.</p>
                <button
                  type="button"
                  className="btn-nexo-primary"
                  onClick={() => fileInputRef.current?.click()}
                  style={{ marginTop: "15px" }}
                >
                  Subir certificado ahora
                </button>
              </div>
            )}
          </div>

          {/* INFORMACIÓN DEL ARCHIVO */}
          {certificate && (
            <div className="informacion-archivo-box">
              <div className="info-dato">
                <span>📎 Archivo</span>
                <strong>{certificate.fileName}</strong>
              </div>

              <div className="info-dato">
                <span>📅 Fecha de subida</span>
                <strong>{certificate.uploadDate}</strong>
              </div>

              <div className="info-dato">
                <span>💾 Peso aproximado</span>
                <strong>{certificate.fileSize || "245 KB"}</strong>
              </div>
            </div>
          )}

          {/* ACCIONES */}
          <div className="certificado-acciones">
            <button
              type="button"
              className="btn-cambiar-cert"
              onClick={() => fileInputRef.current?.click()}
            >
              🔄 {certificate ? "Cambiar certificado" : "Subir certificado"}
            </button>

            {certificate && (
              <>
                <button
                  type="button"
                  className="btn-descargar-cert"
                  onClick={handleDownload}
                >
                  ⬇️ Descargar
                </button>

                <button
                  type="button"
                  className="btn-eliminar-cert"
                  onClick={handleDelete}
                >
                  🗑️ Eliminar
                </button>
              </>
            )}
          </div>
        </section>

        {/* NOTA */}
        <div className="certificado-nota">
          <span>💡</span>
          <div>
            <strong>Ten en cuenta</strong>
            <p>
              Puedes actualizar tu certificado cuando lo necesites. Asegúrate de subir un documento legible y actualizado expedido por tu colegio para mantener activa tu cuenta con beneficios de entrega estudiantil.
            </p>
          </div>
        </div>

        <Link to="/perfil" className="btn-volver-perfil">
          ← Volver al perfil
        </Link>
      </div>
    </main>
  );
}

export default Certificado;

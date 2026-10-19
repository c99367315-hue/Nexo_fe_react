import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";
import { useToast } from "../context/ToastContext";
import "../styles/perfil.css";

export function PerfilActividades() {
  const { user } = useAuth();
  const { orders, deleteOrder, clearAllOrders } = useOrders();
  const { showToast } = useToast();

  const handleDeleteOne = (orderId) => {
    deleteOrder(orderId);
    showToast("Pedido eliminado de tus actividades.");
  };

  const handleClearAll = () => {
    if (window.confirm("¿Seguro que deseas eliminar todo tu historial de actividades?")) {
      clearAllOrders();
      showToast("Historial de actividades vaciado.");
    }
  };

  return (
    <main className="perfil-page">
      <div className="perfil-container">
        {/* =========================
             CABECERA DEL PERFIL
        ========================= */}
        <section className="perfil-header">
          <div className="foto-perfil">
            {user.avatarImage ? (
              <img src={user.avatarImage} alt={user.name} />
            ) : (
              <span>{user.avatar || "👤"}</span>
            )}
          </div>

          <div className="perfil-titulo">
            <h1>Mi perfil</h1>
            <p>Administra tu información personal y escolar</p>
          </div>
        </section>

        {/* =========================
             BOTONES DE SECCIÓN
        ========================= */}
        <div className="secciones-perfil">
          <Link to="/perfil" className="seccion-tab">
            Detalles
          </Link>

          <button type="button" className="seccion-tab activa">
            Mis actividades
          </button>
        </div>

        {/* =========================
             MIS ACTIVIDADES
        ========================= */}
        <section className="actividades-container">
          <div className="actividades-titulo">
            <h2>Mis actividades</h2>
            <p>Revisa tus pedidos realizados recientemente en tu colegio.</p>
          </div>

          <div className="pedidos-header">
            <h3>Pedidos completados</h3>
            <span>{orders.length} {orders.length === 1 ? "pedido" : "pedidos"}</span>
          </div>

          {orders.length === 0 ? (
            <div style={{ textAlign: "center", padding: "50px 20px", color: "#777777" }}>
              <span style={{ fontSize: "40px", display: "block", marginBottom: "10px" }}>📦</span>
              <p>No tienes actividades o pedidos en tu historial.</p>
              <Link to="/comidas" className="btn-nexo-primary" style={{ marginTop: "15px" }}>
                Pedir ahora
              </Link>
            </div>
          ) : (
            <>
              {orders.map((order) => (
                <article key={order.id} className="actividad-pedido-card">
                  <div className="pedido-imagen">
                    <img src={order.image} alt={order.productName} />
                  </div>

                  <div className="pedido-informacion">
                    <div className="pedido-superior">
                      <div>
                        <h3>{order.productName}</h3>
                        <span className="estado-pill">
                          {order.status === "entregado" ? "Pedido completado" : order.statusLabel}
                        </span>
                      </div>

                      <button
                        type="button"
                        className="btn-eliminar-pedido"
                        title="Eliminar pedido"
                        onClick={() => handleDeleteOne(order.id)}
                      >
                        🗑 Eliminar
                      </button>
                    </div>

                    <p>{order.description}</p>

                    <strong>{order.formattedTotal}</strong>

                    <div className="pedido-separador"></div>

                    <small>
                      {order.school} • {order.grade} • {order.date}
                    </small>
                  </div>
                </article>
              ))}

              <div className="eliminar-todo-container">
                <button
                  type="button"
                  className="btn-eliminar-todo"
                  onClick={handleClearAll}
                >
                  🗑 Eliminar todo
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default PerfilActividades;

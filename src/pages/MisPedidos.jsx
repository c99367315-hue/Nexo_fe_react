import { Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import "../styles/misPedidos.css";

export function MisPedidos() {
  const { orders } = useOrders();

  return (
    <main className="mis-pedidos-page">
      <div className="mis-pedidos-contenido">
        <div className="mis-pedidos-encabezado">
          <h1>Mis pedidos</h1>
          <p>Aquí puedes ver el estado de tus pedidos escolares actuales.</p>
        </div>

        {orders.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", background: "white", borderRadius: "14px" }}>
            <span style={{ fontSize: "44px", display: "block", marginBottom: "12px" }}>🍴</span>
            <h3>No tienes pedidos activos</h3>
            <p style={{ color: "#777", margin: "10px 0 20px" }}>
              Explora las opciones de comida disponibles y haz tu primer pedido escolar.
            </p>
            <Link to="/comidas" className="btn-nexo-primary">
              Ver Comidas
            </Link>
          </div>
        ) : (
          <section className="pedidos-list">
            {orders.map((order) => {
              const isDelivered = order.status === "entregado";

              return (
                <article key={order.id} className="pedido-card-item">
                  <div className="pedido-superior-row">
                    <div>
                      <h2>Pedido #{order.id}</h2>
                      <p className="pedido-restaurante-nombre">
                        {order.restaurantIcon || "🍽"} {order.restaurant}
                      </p>
                    </div>

                    <span
                      className={`pedido-estado-badge ${
                        isDelivered ? "entregado" : order.status === "preparacion" ? "preparacion" : "enviado"
                      }`}
                    >
                      {order.statusLabel}
                    </span>
                  </div>

                  <div className="linea-divisoria"></div>

                  <div className="pedido-info-row">
                    <div className="pedido-producto-detalles">
                      <span className="prod-icon">{order.icon || "🍔"}</span>
                      <div>
                        <h3>{order.productName}</h3>
                        <p>{order.description}</p>
                      </div>
                    </div>

                    <div className="col-cantidad">
                      <p>Cantidad</p>
                      <strong>{order.quantity}</strong>
                    </div>

                    <div className="col-total">
                      <p>Total</p>
                      <strong>{order.formattedTotal}</strong>
                    </div>
                  </div>

                  {isDelivered ? (
                    <div className="pedido-entregado-footer">
                      <div className="estado-info-banner">
                        <span className="icono-circulo">✓</span>
                        <div>
                          <strong>{order.statusMessage || "Pedido entregado"}</strong>
                          <p>{order.statusDescription || "Esperamos que hayas disfrutado tu comida."}</p>
                        </div>
                      </div>

                      {order.rated ? (
                        <span className="calificado-badge">
                          ⭐ Repartidor calificado ({order.rating}★)
                        </span>
                      ) : (
                        <Link
                          to={`/calificar-repartidor?pedido=${order.id}`}
                          className="boton-calificar-link"
                        >
                          ⭐ Calificar al repartidor
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="estado-info-banner">
                      <span className="icono-circulo">🚚</span>
                      <div>
                        <strong>{order.statusMessage || "Tu pedido está en camino"}</strong>
                        <p>
                          {order.statusDescription || "El repartidor lleva tu pedido hacia tu ubicación escolar."}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
}

export default MisPedidos;

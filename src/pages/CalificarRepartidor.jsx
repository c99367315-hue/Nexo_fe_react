import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import { useToast } from "../context/ToastContext";
import "../styles/calificarRepartidor.css";

export function CalificarRepartidor() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("pedido") || "002";
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const { rateDriver } = useOrders();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    rateDriver(orderId, rating, comment);
    showToast(`¡Gracias! Has calificado el servicio con ${rating} estrellas.`);
    navigate("/mis-pedidos");
  };

  return (
    <main className="calificar-repartidor-page">
      <section className="calificar-contenido">
        <Link to="/mis-pedidos" className="btn-volver-comidas">
          ← Volver a Mis Pedidos
        </Link>

        <div className="calificar-titulo">
          <h1>Calificar repartidor</h1>
          <p>Cuéntanos cómo fue tu experiencia con el servicio de entrega escolar</p>
        </div>

        <div className="zona-calificacion">
          <div className="repartidor-col">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Foto repartidor"
            />
            <h2>Carlos Rodríguez</h2>
            <span>Repartidor NEXO • Entrega Escolar</span>
          </div>

          <form className="calificar-col" onSubmit={handleSubmit}>
            <h3>¿Cómo calificas el servicio?</h3>

            <div className="estrellas-rating-selector">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{
                    color: star <= (hoverRating || rating) ? "#ffc107" : "#e0e0e0"
                  }}
                  title={`${star} estrellas`}
                >
                  ★
                </span>
              ))}
            </div>

            <textarea
              placeholder="Escribe un comentario sobre la puntualidad, amabilidad o entrega en portería..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />

            <button type="submit" className="btn-enviar-calificacion">
              Enviar calificación
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default CalificarRepartidor;

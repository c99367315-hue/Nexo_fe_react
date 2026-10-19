import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductByIdOrSlug } from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import "../styles/productDetail.css";

export function ProductDetail({ productSlug: propProductSlug }) {
  const { slug: paramSlug } = useParams();
  const currentSlug = propProductSlug || paramSlug;
  const product = getProductByIdOrSlug(currentSlug);

  const [selectedRating, setSelectedRating] = useState(5);
  const [comment, setComment] = useState("");
  const { addToCart, formatCurrency } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  if (!product) {
    return (
      <main className="product-detail-page">
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h2>Producto no encontrado</h2>
          <p style={{ margin: "15px 0 25px" }}>El plato solicitado no existe o fue retirado del menú.</p>
          <Link to="/comidas" className="btn-nexo-primary">
            Explorar todas las comidas
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    showToast(`¡${product.name} agregado al carrito!`);
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate("/carrito");
  };

  const handleSendRating = (e) => {
    e.preventDefault();
    showToast(`¡Gracias por calificar ${product.name} con ${selectedRating} estrellas!`);
    setComment("");
  };

  return (
    <main className="product-detail-page">
      <section className="product-detail-contenido">
        <Link to="/comidas" className="btn-volver-comidas">
          ← Volver al catálogo de comidas
        </Link>

        <div className="product-detail-titulo">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>

        <div className="zona-producto">
          {/* INFORMACIÓN DEL PRODUCTO (IZQUIERDA) */}
          <div className="producto-col-izq">
            {/* ESTRELLAS INTERACTIVAS */}
            <div className="estrellas-producto">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setSelectedRating(star)}
                  style={{ opacity: star <= selectedRating ? 1 : 0.35 }}
                  title={`${star} estrellas`}
                >
                  ⭐
                </span>
              ))}
            </div>

            <textarea
              placeholder="Escribe tu opinión sobre este producto..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <img src={product.image} alt={product.name} />

            <h2>{product.restaurantName}</h2>

            <span className="producto-precio-destacado">
              {formatCurrency(product.price)}
            </span>

            <div className="acciones-producto-detalle">
              <button
                type="button"
                className="boton-carrito"
                onClick={handleAddToCart}
              >
                Agregar al carrito
              </button>

              <button
                type="button"
                className="boton-comprar"
                onClick={handleBuyNow}
              >
                Comprar ahora
              </button>
            </div>
          </div>

          {/* DETALLES DEL PRODUCTO (DERECHA) */}
          <div className="detalles-col-der">
            <h3>Detalles Del Producto</h3>

            <ul>
              {product.details && product.details.length > 0 ? (
                product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))
              ) : (
                <>
                  <li>Elaborado con ingredientes frescos y seleccionados diariamente.</li>
                  <li>Preparado bajo estrictas normas de higiene y calidad.</li>
                  <li>Ideal para recargar energía durante la jornada académica.</li>
                  <li>Porción individual completa para estudiante.</li>
                </>
              )}
            </ul>

            <div className="botones">
              <button
                type="button"
                className="boton-calificar"
                onClick={handleSendRating}
              >
                Enviar calificación
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CheckoutModal } from "../components/CheckoutModal";
import "../styles/cart.css";

export function Cart() {
  const { items, updateQuantity, removeFromCart, subtotal, deliveryFee, total, formatCurrency } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <main className="cart-page">
      {/* TÍTULO HERO */}
      <section className="cart-header-title">
        <h1>Carrito de compras</h1>
        <p>Revisa tus productos antes de realizar tu pedido</p>
      </section>

      {items.length === 0 ? (
        <div className="cart-empty-box">
          <span>🛒</span>
          <h2>Tu carrito está vacío</h2>
          <p>Explora nuestras comidas y combos favoritos para agregar tus platos favoritos.</p>
          <Link to="/comidas" className="btn-nexo-primary">
            Explorar Comidas
          </Link>
        </div>
      ) : (
        <section className="carrito-contenido">
          {/* =========================
               PRODUCTOS
          ========================== */}
          <div className="cart-products-list">
            <h2>Tus productos</h2>

            {items.map(({ product, quantity }) => (
              <article key={product.id} className="cart-item-card">
                <div className="cart-item-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="cart-item-info">
                  <span className="item-restaurant">{product.restaurantName}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <strong className="item-price">
                    {formatCurrency(product.price * quantity)}
                  </strong>
                </div>

                <div className="cart-item-actions">
                  <div className="cantidad-control">
                    <button
                      type="button"
                      className="cantidad-btn"
                      onClick={() => updateQuantity(product.id, -1)}
                      aria-label="Disminuir cantidad"
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      className="cantidad-btn"
                      onClick={() => updateQuantity(product.id, 1)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="btn-eliminar-item"
                    onClick={() => removeFromCart(product.id)}
                  >
                    🗑 Eliminar
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* =========================
               RESUMEN
          ========================== */}
          <aside className="cart-summary">
            <h2>Resumen del pedido</h2>

            <div className="resumen-linea">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>

            <div className="resumen-linea">
              <span>Domicilio</span>
              <span>{formatCurrency(deliveryFee)}</span>
            </div>

            <div className="separador-resumen"></div>

            <div className="resumen-total">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>

            <button
              type="button"
              className="btn-finalizar"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Finalizar compra
            </button>

            <p className="mensaje-seguridad">🔒 Compra segura y fácil para estudiantes</p>
          </aside>
        </section>
      )}

      {/* CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </main>
  );
}

export default Cart;

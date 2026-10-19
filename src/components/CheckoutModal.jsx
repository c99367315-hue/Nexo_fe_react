import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";
import { useToast } from "../context/ToastContext";

export function CheckoutModal({ isOpen, onClose }) {
  const { items, subtotal, deliveryFee, total, clearCart, formatCurrency } = useCart();
  const { user } = useAuth();
  const { createOrder } = useOrders();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [colegio, setColegio] = useState(user?.colegio || "I. E. LA SALLE DE CAMPOAMOR");
  const [grado, setGrado] = useState(user?.grado || "11");
  const [salon, setSalon] = useState("Salón 11-A");
  const [telefono, setTelefono] = useState("312 456 7890");
  const [notas, setNotas] = useState("Entregar en la portería principal durante el descanso.");
  const [paymentMethod, setPaymentMethod] = useState("Efectivo");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    if (!colegio.trim() || !grado.trim() || !telefono.trim()) {
      showToast("Por favor completa los datos de entrega escolar.", "error");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder = createOrder({
        items,
        subtotal,
        deliveryFee,
        total,
        school: colegio,
        grade: `${grado}° (${salon})`,
        phone: telefono,
        paymentMethod,
        notes: notas
      });

      clearCart();
      setIsSubmitting(false);
      onClose();
      showToast(`¡Pedido #${newOrder.id} creado con éxito! Ya viene en camino.`);
      navigate("/mis-pedidos");
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>🎒 Datos de entrega escolar</h2>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmitOrder}>
          <div className="checkout-form-group">
            <label>Institución Educativa / Colegio *</label>
            <input
              type="text"
              value={colegio}
              onChange={(e) => setColegio(e.target.value)}
              placeholder="Nombre del colegio"
              required
            />
          </div>

          <div className="checkout-row">
            <div className="checkout-form-group">
              <label>Grado *</label>
              <select value={grado} onChange={(e) => setGrado(e.target.value)} required>
                <option value="6">6°</option>
                <option value="7">7°</option>
                <option value="8">8°</option>
                <option value="9">9°</option>
                <option value="10">10°</option>
                <option value="11">11°</option>
              </select>
            </div>

            <div className="checkout-form-group">
              <label>Salón / Bloque</label>
              <input
                type="text"
                value={salon}
                onChange={(e) => setSalon(e.target.value)}
                placeholder="Ej. Salón 11-B"
              />
            </div>
          </div>

          <div className="checkout-form-group">
            <label>Teléfono de contacto estudiantil *</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej. 312 456 7890"
              required
            />
          </div>

          <div className="checkout-form-group">
            <label>Instrucciones de entrega</label>
            <textarea
              rows="2"
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
              placeholder="Ej. Dejar con el vigilante en portería, avisar por WhatsApp..."
            />
          </div>

          <div className="checkout-form-group">
            <label>Método de pago</label>
            <div className="payment-methods-grid">
              {["Efectivo", "Nequi", "Daviplata", "Tarjeta"].map((method) => (
                <div
                  key={method}
                  className={`payment-method-card ${paymentMethod === method ? "selected" : ""}`}
                  onClick={() => setPaymentMethod(method)}
                >
                  {method === "Efectivo"
                    ? "💵 Efectivo en entrega"
                    : method === "Nequi"
                    ? "📱 Nequi"
                    : method === "Daviplata"
                    ? "📲 Daviplata"
                    : "💳 Tarjeta"}
                </div>
              ))}
            </div>
          </div>

          <div className="checkout-review-box">
            <div className="checkout-review-line">
              <span>Subtotal ({items.length} productos)</span>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>
            <div className="checkout-review-line">
              <span>Domicilio escolar</span>
              <strong>{formatCurrency(deliveryFee)}</strong>
            </div>
            <div className="checkout-review-total">
              <span>Total a pagar</span>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </div>

          <button
            type="submit"
            className="btn-finalizar"
            disabled={isSubmitting}
            style={{ opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? "Procesando pedido..." : "Confirmar pedido escolar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutModal;

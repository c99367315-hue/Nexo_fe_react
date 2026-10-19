import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

export function ProductCard({ product, showRestaurantTag = true }) {
  const { addToCart, formatCurrency } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`¡${product.name} agregado al carrito!`);
  };

  return (
    <article className="card product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="info product-card-info">
        <h3>{product.name}</h3>

        {showRestaurantTag && (
          <p className="restaurant-tag">{product.restaurantName}</p>
        )}

        <div className="rating-stars">
          {"★".repeat(product.rating || 5)}
        </div>

        <h4 className="price">{formatCurrency(product.price)}</h4>

        <div className="card-buttons">
          <Link to={`/comida/${product.slug}`} className="btn-ver-producto">
            Ver Producto
          </Link>
          <button
            type="button"
            className="btn-add-cart-icon"
            onClick={handleAddToCart}
            title="Agregar al carrito"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

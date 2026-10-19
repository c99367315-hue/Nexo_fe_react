import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import "../styles/home.css";

const CATEGORIES = [
  { id: "Todos", label: "▦ Todos" },
  { id: "Hamburguesas", label: "🍔 Hamburguesa" },
  { id: "Pollo", label: "🍗 Pollo" },
  { id: "Pizza", label: "🍕 Pizza" },
  { id: "Mexicana", label: "🌮 Mexicana" },
  { id: "Bebidas", label: "🥤 Bebidas" },
  { id: "Postres", label: "🍰 Postres" }
];

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");
  const navigate = useNavigate();
  const { addToCart, formatCurrency } = useCart();
  const { showToast } = useToast();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/comidas?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleAddToCart = (combo) => {
    addToCart(combo, 1);
    showToast(`¡${combo.name} agregado al carrito!`);
  };

  // Filter combos based on active category if selected
  const popularCombos = products.filter((p) => {
    if (activeCategory === "Todos") return p.isPopularCombo || p.isFeatured;
    return p.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 4));
  }).slice(0, 4);

  // Fallback to initial 4 combos if empty
  const displayedCombos = popularCombos.length > 0
    ? popularCombos
    : products.filter((p) => p.isPopularCombo);

  return (
    <main className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>¿Qué quieres comer hoy?</h1>
          <p>Encuentra tus restaurantes favoritos y disfruta de los mejores combos.</p>

          <form className="search-box" onSubmit={handleSearchSubmit}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Buscar comida o restaurante..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        <div className="hero-food">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90"
            alt="Hamburguesa con papas"
          />
        </div>
      </section>

      {/* ================= CATEGORÍAS ================= */}
      <section className="categories-section">
        <h2 className="home-section-title">Categorías</h2>

        <div className="categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= RESTAURANTES DESTACADOS ================= */}
      <section className="restaurants-section">
        <div className="section-title">
          <h2>Restaurantes destacados</h2>
          <Link to="/restaurantes">Ver todos</Link>
        </div>

        <div className="featured-restaurants">
          {/* FRISBY */}
          <article className="featured-restaurant-card">
            <div className="restaurant-logo frisby-logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62CD34V2Wrb-UduTwt0tR5kdtkQ6crZIfi_N_jthsVQ&s=10"
                alt="Logo Frisby"
              />
            </div>
            <div className="featured-restaurant-info">
              <h3>Frisby</h3>
              <p>Pollo • Combos • Más</p>
              <div className="rating">⭐ 4.8 (2.5k)</div>
            </div>
            <Link to="/frisby" className="featured-restaurant-btn" title="Ver restaurante">
              ›
            </Link>
          </article>

          {/* KFC */}
          <article className="featured-restaurant-card">
            <div className="restaurant-logo kfc-logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-FDgrZwtC_C92wzd1Cqq0_nT5T7bdrm4uk0KcIyyaA&s=10"
                alt="Logo KFC"
              />
            </div>
            <div className="featured-restaurant-info">
              <h3>KFC</h3>
              <p>Pollo • Hamburguesas • Combos</p>
              <div className="rating">⭐ 4.7 (1.8k)</div>
            </div>
            <Link to="/kfc" className="featured-restaurant-btn" title="Ver restaurante">
              ›
            </Link>
          </article>

          {/* PIZZA HUT */}
          <article className="featured-restaurant-card">
            <div className="restaurant-logo burger-logo">
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
                alt="Logo Pizza Hut"
              />
            </div>
            <div className="featured-restaurant-info">
              <h3>Pizza Hut</h3>
              <p>Pizza recién preparadas para disfrutar</p>
              <div className="rating">⭐ 4.6 (1.2k)</div>
            </div>
            <Link to="/pizza-hut" className="featured-restaurant-btn" title="Ver restaurante">
              ›
            </Link>
          </article>
        </div>
      </section>

      {/* ================= COMBOS POPULARES ================= */}
      <section className="combos-section">
        <div className="section-title">
          <h2>Combos populares</h2>
          <Link to="/comidas">Ver todos</Link>
        </div>

        <div className="combo-grid">
          {displayedCombos.map((combo) => (
            <article key={combo.id} className="combo-card">
              <h3>{combo.name}</h3>

              <div className="combo-image">
                <Link to={`/comida/${combo.slug}`}>
                  <img src={combo.image} alt={combo.name} />
                </Link>
              </div>

              <p>{combo.description}</p>

              <div className="combo-bottom">
                <strong>{formatCurrency(combo.price)}</strong>
                <button
                  type="button"
                  className="btn-combo-add"
                  onClick={() => handleAddToCart(combo)}
                  title="Agregar al carrito"
                >
                  +
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;

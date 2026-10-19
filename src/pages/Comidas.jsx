import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import "../styles/comidas.css";

const CATEGORY_FILTERS = [
  "Todos",
  "Hamburguesas",
  "Pollo",
  "Pizza",
  "Mexicana",
  "Sándwiches",
  "Acompañamientos",
  "Bebidas",
  "Postres"
];

export function Comidas() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const activeCategory = searchParams.get("categoria") || "Todos";
  const [inputVal, setInputVal] = useState(searchTerm);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        searchTerm === "" ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        activeCategory === "Todos" ||
        p.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 4));

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const nextParams = {};
    if (inputVal.trim()) nextParams.q = inputVal.trim();
    if (activeCategory !== "Todos") nextParams.categoria = activeCategory;
    setSearchParams(nextParams);
  };

  const handleCategoryClick = (cat) => {
    const nextParams = {};
    if (searchTerm) nextParams.q = searchTerm;
    if (cat !== "Todos") nextParams.categoria = cat;
    setSearchParams(nextParams);
  };

  const handleClearFilters = () => {
    setInputVal("");
    setSearchParams({});
  };

  return (
    <main className="comidas-page">
      {/* ================= HERO COMIDAS ================= */}
      <section className="comidas-hero">
        <div className="comidas-hero-content">
          <h1>¿Qué quieres comer hoy?</h1>
          <p>Encuentra las mejores comidas y combos al mejor precio.</p>

          <form className="comidas-search-box" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar comida, restaurante o sabor..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" title="Buscar">
              🔍
            </button>
          </form>
        </div>

        <div className="comidas-hero-image">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90"
            alt="Hamburguesa especial"
          />
        </div>
      </section>

      {/* ================= OFERTA ================= */}
      <section className="comidas-oferta">
        <div>
          <h2>🔥 Oferta del Día</h2>
          <p>20% de descuento en todos los combos Frisby y domicilios gratis en pedidos mayores a $50.000.</p>
        </div>
        <div className="oferta-badge">Código: ESTUDIANTE20</div>
      </section>

      {/* ================= CATEGORÍAS ================= */}
      <div className="comidas-filtros">
        {CATEGORY_FILTERS.map((cat) => (
          <button
            key={cat}
            className={`filtro-pill ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= RESULTADOS Y PRODUCTOS ================= */}
      <div className="comidas-resultados-header">
        <span>Mostrando {filteredProducts.length} productos disponibles</span>
        {(searchTerm || activeCategory !== "Todos") && (
          <button
            onClick={handleClearFilters}
            style={{
              background: "transparent",
              border: "none",
              color: "#e50914",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            ✕ Limpiar filtros
          </button>
        )}
      </div>

      <section className="comidas-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="sin-resultados">
            <span>🍽</span>
            <h3>No encontramos comidas que coincidan con tu búsqueda</h3>
            <p>Intenta con otros términos como &quot;pollo&quot;, &quot;pizza&quot;, &quot;hamburguesa&quot; o &quot;helado&quot;.</p>
            <button className="btn-nexo-primary" onClick={handleClearFilters}>
              Ver todo el menú
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Comidas;

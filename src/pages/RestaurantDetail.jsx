import { useParams, Link } from "react-router-dom";
import { getRestaurantById } from "../data/restaurants";
import { getProductsByRestaurant } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import "../styles/restaurantDetail.css";

export function RestaurantDetail({ restaurantId: propRestaurantId }) {
  const { id: paramId } = useParams();
  const currentId = propRestaurantId || paramId;
  const restaurant = getRestaurantById(currentId);
  const restaurantProducts = restaurant ? getProductsByRestaurant(restaurant.id) : [];

  if (!restaurant) {
    return (
      <main className="restaurant-detail-page">
        <div style={{ textAlign: "center", padding: "80px 20px" }}>
          <h2>Restaurante no encontrado</h2>
          <p style={{ margin: "15px 0 25px" }}>El restaurante solicitado no existe o fue cambiado de ubicación.</p>
          <Link to="/restaurantes" className="btn-nexo-primary">
            Ver todos los restaurantes
          </Link>
        </div>
      </main>
    );
  }

  // Group products by category or present by restaurant categories
  const categoriesToRender = restaurant.categories || ["General"];

  return (
    <main className="restaurant-detail-page">
      {/* RESTAURANT HEADER BANNER */}
      <section
        className="restaurant-header-banner"
        style={{ background: restaurant.bannerBg || "#171717" }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1>
            {restaurant.name.includes("Frisby")
              ? "🍗 Frisby"
              : restaurant.name.includes("KFC")
              ? "🍗 KFC"
              : restaurant.name.includes("Pizza")
              ? "🍕 Pizza Hut"
              : restaurant.name.includes("Subway")
              ? "🥪 Subway"
              : restaurant.name.includes("Rosa")
              ? "🍦 Santa Rosa"
              : `🍔 ${restaurant.name}`}
          </h1>

          <p>{restaurant.tagline || restaurant.description}</p>

          <div className="restaurant-meta-info">
            <span>{restaurant.rating}</span>
            <span>🕒 {restaurant.deliveryTime || "20-30 min"}</span>
            <span>🏫 Entrega en portería escolar</span>
          </div>
        </div>
      </section>

      {/* MENU CONTAINER */}
      <div className="restaurant-menu-container">
        <Link to="/restaurantes" className="btn-volver-restaurantes">
          ← Volver a restaurantes
        </Link>

        {categoriesToRender.map((catName) => {
          // Filter products belonging to this category or restaurant
          const catProducts = restaurantProducts.filter((p) => {
            const prodCat = p.category.toLowerCase();
            const targetCat = catName.toLowerCase();
            if (targetCat.includes("hamburguesa")) return prodCat.includes("hamburguesa");
            if (targetCat.includes("pollo")) return prodCat.includes("pollo");
            if (targetCat.includes("alitas") || targetCat.includes("tenders")) return prodCat.includes("pollo");
            if (targetCat.includes("pizza")) return prodCat.includes("pizza");
            if (targetCat.includes("sandwich") || targetCat.includes("sándwich")) return prodCat.includes("sándwich");
            if (targetCat.includes("wrap")) return prodCat.includes("mexicana") || prodCat.includes("wrap");
            if (targetCat.includes("papa") || targetCat.includes("acompañamiento") || targetCat.includes("entrada"))
              return prodCat.includes("acompañamiento");
            if (targetCat.includes("bebida")) return prodCat.includes("bebida");
            if (targetCat.includes("helado") || targetCat.includes("postre") || targetCat.includes("dulce"))
              return prodCat.includes("postre");
            return true;
          });

          if (catProducts.length === 0) return null;

          return (
            <section key={catName} className="restaurant-categoria-seccion">
              <h2>
                {catName.includes("Pollo")
                  ? "🍗"
                  : catName.includes("Hamburguesa")
                  ? "🍔"
                  : catName.includes("Pizza")
                  ? "🍕"
                  : catName.includes("Sándwich")
                  ? "🥪"
                  : catName.includes("Papa") || catName.includes("Acompañamiento")
                  ? "🍟"
                  : catName.includes("Bebida")
                  ? "🥤"
                  : catName.includes("Helado") || catName.includes("Postre")
                  ? "🍦"
                  : "🍽"}{" "}
                {catName}
              </h2>

              <div className="restaurant-products-grid">
                {catProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showRestaurantTag={false}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default RestaurantDetail;

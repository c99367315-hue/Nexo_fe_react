import { useState } from "react";
import { restaurants } from "../data/restaurants";
import { RestaurantCard } from "../components/RestaurantCard";
import "../styles/restaurantes.css";

export function Restaurantes() {
  const [filterQuery, setFilterQuery] = useState("");

  const filtered = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <main className="restaurantes-page">
      <section className="restaurantes-contenido">
        <h1>Restaurantes disponibles</h1>

        <div className="restaurantes-oferta">
          <h3>🚀 Envíos Escolares Prioritarios</h3>
          <p>
            Todos nuestros restaurantes afiliados cuentan con horarios sincronizados con los descansos de tu institución educativa.
          </p>
        </div>

        <div className="restaurantes-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Buscar restaurante por nombre o especialidad..."
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </div>

        <div className="lista-restaurantes">
          {filtered.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Restaurantes;

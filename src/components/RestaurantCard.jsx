import { Link } from "react-router-dom";

export function RestaurantCard({ restaurant }) {
  return (
    <article className="card restaurant-grid-card">
      <div className="restaurant-card-img-wrapper">
        <img src={restaurant.logo} alt={`Logo ${restaurant.name}`} />
      </div>

      <div className="restaurant-card-body">
        <h2>{restaurant.name}</h2>
        <p>{restaurant.description}</p>

        <div className="estrellas">
          {"★".repeat(restaurant.stars || 5)}
        </div>

        <Link to={`/restaurante/${restaurant.id}`} className="boton btn-ver-restaurante">
          Ver restaurante
        </Link>
      </div>
    </article>
  );
}

export default RestaurantCard;

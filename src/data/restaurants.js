export const restaurants = [
  {
    id: "mcdonalds",
    name: "McDonald's",
    slug: "mcdonalds",
    htmlFile: "McDonald's.html",
    logo: "https://1000marcas.net/wp-content/uploads/2019/11/McDonalds-logo.png",
    description: "Hamburguesas, combos y bebidas",
    rating: "⭐ 4.9 (3.8k)",
    stars: 5,
    bannerBg: "#d71920",
    tagline: "El sabor que todos conocen",
    deliveryTime: "25-35 min",
    categories: ["Hamburguesas", "Papas y Nuggets", "Bebidas", "Postres"]
  },
  {
    id: "frisby",
    name: "Frisby",
    slug: "frisby",
    htmlFile: "Frisby.html",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgNmj5WK5pWhkHPBYBW33XAc3QnMS1Y0YS9U6ACg6Aog&s=10",
    description: "Pollo colombiano y combos",
    rating: "⭐ 4.8 (2.5k)",
    stars: 5,
    bannerBg: "#f58220",
    tagline: "Nadie lo hace como Frisby lo hace",
    deliveryTime: "20-30 min",
    categories: ["Pollo", "Acompañamientos", "Bebidas"]
  },
  {
    id: "subway",
    name: "Subway",
    slug: "subway",
    htmlFile: "Subway.html",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8HgNSp_Gpo4Hzm-KAL146u27IQuiQOrTS_DCQQhLxA&s",
    description: "Sándwiches frescos y bebidas",
    rating: "⭐ 4.6 (1.9k)",
    stars: 5,
    bannerBg: "#008938",
    tagline: "Come fresco todos los días",
    deliveryTime: "15-25 min",
    categories: ["Sándwiches", "Wraps", "Bebidas", "Postres"]
  },
  {
    id: "kfc",
    name: "KFC",
    slug: "kfc",
    htmlFile: "KFC.html",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3g3D_Tan0wPlrY-Yyl1HprPhfWAmjLlOtAEAnGO894p6a1PsAVGYvUK9&s=10",
    description: "Pollo frito y combos familiares",
    rating: "⭐ 4.7 (1.8k)",
    stars: 5,
    bannerBg: "#d71920",
    tagline: "Para chuparse los dedos",
    deliveryTime: "25-35 min",
    categories: ["Pollo KFC", "Alitas y Tenders", "Acompañamientos", "Bebidas"]
  },
  {
    id: "pizza-hut",
    name: "Pizza Hut",
    slug: "pizza-hut",
    htmlFile: "Pizza_hut.html",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQrGq4t4Gd7zjRrDFCtlMQcSHGktuGa4RQxntroyH40okvjHMrIgco_yV&s=10",
    description: "Pizzas, promociones y combos",
    rating: "⭐ 4.6 (1.2k)",
    stars: 5,
    bannerBg: "#c8102e",
    tagline: "Pizza recién preparada para compartir",
    deliveryTime: "30-40 min",
    categories: ["Pizzas", "Entradas", "Bebidas"]
  },
  {
    id: "santa-rosa",
    name: "Santa Rosa",
    slug: "santa-rosa",
    htmlFile: "Santa_rosa.html",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LbVGUfKk77I4Wgjt4rG6DNFo_vGytVCEXfLBWSQ6Nw&s",
    description: "Comida variada, helados y postres especiales",
    rating: "⭐ 4.8 (1.5k)",
    stars: 5,
    bannerBg: "#0099cc",
    tagline: "Helados y postres artesanales para alegrar el día",
    deliveryTime: "15-20 min",
    categories: ["Helados", "Dulces", "Bebidas", "Postres"]
  }
];

export const getRestaurantById = (id) => {
  return restaurants.find((r) => r.id === id || r.slug === id);
};

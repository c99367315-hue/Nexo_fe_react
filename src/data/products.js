export const products = [
  // =================== MCDONALD'S ===================
  {
    id: "big-mac",
    slug: "big-mac",
    name: "Combo Big Mac",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Hamburguesas",
    price: 32400,
    formattedPrice: "$32.400",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVqAfA-tmXy-6-TqCjRnAYn5NEAKkb9uKXKHJ97JElQ&s=10",
    description: "Doble carne 100% de res con salsa especial Big Mac, pepinillos y queso cheddar.",
    details: [
      "2 medallones de carne 100% de res a la parrilla",
      "Salsa especial Big Mac exclusiva",
      "Lechuga fresca picada finamente",
      "Queso cheddar americano derretido",
      "Pepinillos encurtidos y cebolla en dados",
      "Pan suave con semillas de sésamo tostadas"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "cuarto-de-libra",
    slug: "cuarto-libra",
    name: "Cuarto de Libra con Queso",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Hamburguesas",
    price: 50600,
    formattedPrice: "$50.600",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOYWY--bMGDizTKm7eWE-2O0nF2fa6wVkx58c1Df47g&s=10",
    description: "Una generosa porción de carne 100% de res con doble queso cheddar y cebolla fresca.",
    details: [
      "1/4 de libra (113g) de pura carne de res jugosa",
      "2 rebanadas gruesas de queso cheddar americano",
      "Cebolla fresca cortada en julianas",
      "Pepinillos encurtidos crocantes",
      "Kétchup y mostaza tradicional",
      "Pan recién tostado con ajonjolí"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "mcpollo",
    slug: "mcpollo",
    name: "McPollo Clásico",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Hamburguesas",
    price: 30400,
    formattedPrice: "$30.400",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdEF2uCKS7AGSCuPTHipmZZuuLifocT1tyUskBH0hsw&s=10",
    description: "Pechuga de pollo crujiente empanizada acompañada de lechuga fresca y mayonesa.",
    details: [
      "Pechuga de pollo seleccionada con apanado crujiente",
      "Lechuga fresca seleccionada",
      "Mayonesa cremosa suave",
      "Pan suave de hamburguesa recién horneado",
      "Acompañado de papas y bebida a elección"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "mcdoble",
    slug: "mcdoble",
    name: "McDoble con Queso",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Hamburguesas",
    price: 40500,
    formattedPrice: "$40.500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6HIANV7_6xfRDR4fvf8Gonyk2Gn1j78CvALaklw8sw&s=10",
    description: "Doble carne de res a la parrilla con rebanada de queso americano fundido.",
    details: [
      "2 carnes 100% de res sazonadas con sal y pimienta",
      "Rebanada de queso cheddar derretido",
      "Pepinillos encurtidos y cebolla picada",
      "Kétchup y mostaza",
      "Pan suave y esponjoso"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "hamburguesa-doble",
    slug: "hamburguesa",
    name: "Hamburguesa Doble Especial",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Hamburguesas",
    price: 24900,
    formattedPrice: "$24.900",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
    description: "Doble carne jugosa, queso fundido, vegetales frescos y salsas tradicionales.",
    details: [
      "1 pan de hamburguesa brioche artesanal (base y tapa)",
      "2 porciones de carne molida de res (90g a 100g cada una)",
      "2 a 4 rebanadas de queso tipo cheddar o americano",
      "Sazonadores especiales con sal y pimienta al gusto",
      "Lechuga fresca, 2 rodajas finas de tomate y cebolla",
      "Pepinillos encurtidos y tocineta dorada opcional",
      "Salsas de la casa: Mayonesa, kétchup y mostaza"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "combo-clasico-burger",
    slug: "combo-clasico-burger",
    name: "Combo Clásico Burger King",
    restaurantId: "mcdonalds",
    restaurantName: "Burger King",
    category: "Hamburguesas",
    price: 24900,
    formattedPrice: "$24.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5_NRkuXPWQ12CV32zhtmzC-UlByshE76rpPrgPUzFQ&s",
    description: "Hamburguesa con carne a la parrilla, papas fritas doradas y bebida refrescante.",
    details: [
      "Hamburguesa clásica a la parrilla con queso fundido",
      "Porción de papas fritas crujientes recién preparadas",
      "Vaso de gaseosa o jugo natural frío",
      "Salsas a elección"
    ],
    rating: 5,
    isPopularCombo: true,
    isFeatured: true
  },
  {
    id: "papas-pequenas",
    slug: "papasp",
    name: "Papas Pequeñas McDonald's",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Acompañamientos",
    price: 15200,
    formattedPrice: "$15.200",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeALwJ2vvysKZiRXRNRIbF55YMJDHmh3y9FQfvnrm2lw&s=10",
    description: "Papas cortadas a la perfección, doradas por fuera y suaves por dentro.",
    details: [
      "Papas seleccionadas cortadas en bastones delgados",
      "Fritas en aceite 100% vegetal al punto justo",
      "Toque exacto de sal de mar",
      "Porción personal ideal"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "papas-medianas",
    slug: "papasm",
    name: "Papas Medianas McDonald's",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Acompañamientos",
    price: 30000,
    formattedPrice: "$30.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4A5PYwbd9E1o8engjzckLXDKgwsGPQcX1woIMdnj-Ag&s=10",
    description: "Porción mediana de las famosas papas fritas de McDonald's.",
    details: [
      "Papas crujientes en porción mediana",
      "Doradas y calientes para disfrutar en el descanso escolar",
      "Acompañadas de kétchup o mayonesa"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "papas-grandes-mcd",
    slug: "papasg",
    name: "Papas Grandes McDonald's",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Acompañamientos",
    price: 37600,
    formattedPrice: "$37.600",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWC44LdKisOxrX1DVezQa1rD5P16GzpQcc5vbO9iQeQ&s=10",
    description: "La porción más grande para compartir con amigos de clase.",
    details: [
      "Porción extra grande de papas fritas doradas",
      "Perfectas para compartir con compañeros de grado",
      "Salsas surtidas incluidas"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "nuggets-mcd",
    slug: "nuggets",
    name: "McNuggets 10 Piezas",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Acompañamientos",
    price: 23400,
    formattedPrice: "$23.400",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zf7tDpN8exfF_8Ppxew3EtX3GhnOSaTqGNQlwndNdg&s=10",
    description: "10 deliciosos nuggets de pollo crujientes con tu salsa favorita.",
    details: [
      "10 piezas de pollo tierno apanado con receta crujiente",
      "Salsa BBQ, agridulce o mostaza dulce a elección",
      "Excelente opción para un snack rápido en el colegio"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "mcflurry-oreo",
    slug: "mcflurry",
    name: "McFlurry Oreo",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Postres",
    price: 15000,
    formattedPrice: "$15.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Bj8iLFYwATx5q64otgeUoyeO-yodywc80FwO9JgwyQ&s",
    description: "Helado de vainilla cremoso batido con trozos crujientes de galleta Oreo.",
    details: [
      "Helado de vainilla suave y cremoso",
      "Abundantes trozos de galleta Oreo original triturada",
      "Mezclado al instante con cuchara McFlurry",
      "El postre favorito para recargar energías"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "sundae-chocolate",
    slug: "sundae",
    name: "Sundae de Chocolate",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Postres",
    price: 12000,
    formattedPrice: "$12.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmq3lBTpJhpkmLnexKsbV7TK_JSjTBjsz42ZmFYIj2w&s=10",
    description: "Cremoso helado de vainilla bañado en salsa caliente de chocolate fudge.",
    details: [
      "Helado suave de vainilla",
      "Capa caliente de sirope de chocolate espeso",
      "Maní tostado picado opcional"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },

  // =================== FRISBY ===================
  {
    id: "pollo-frisby",
    slug: "pollo-apanado",
    name: "Pollo Frisby Crujiente",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Pollo",
    price: 18900,
    formattedPrice: "$18.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLSvLUFIeX2WOw6IoJkbWD1K_EQ-T2TZ-XCfZGl6P0Fw&s=10",
    description: "Pollo apanado con la receta dorada y crocante que caracteriza a Frisby.",
    details: [
      "Presas seleccionadas de pollo fresco colombiano",
      "Apanado dorado, crujiente y cero grasoso",
      "Macerado con especias naturales secretas",
      "Acompañado de miel Frisby y salsa tártara"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "alitas-de-pollo-frisby",
    slug: "alitas-de-pollo",
    name: "Alitas de Pollo Frisby",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Pollo",
    price: 16900,
    formattedPrice: "$16.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVmPoOZyfe1vWO8EKWdWoQCKxJdV0IieqTwTQZEQLvw&s=10",
    description: "Porción de alitas de pollo crocantes sazonadas con el toque especial Frisby.",
    details: [
      "Alitas de pollo apanadas al estilo tradicional",
      "Textura extra crujiente por fuera y jugosa por dentro",
      "Salsas especiales para untar a tu gusto"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "tiras-de-pollo-frisby",
    slug: "tiras-de-pollo",
    name: "Tiras de Pollo Frisby",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Pollo",
    price: 17900,
    formattedPrice: "$17.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbksdt1dNtrnBNUdK_I0tbxWI4IGyeauUAG_asTLHQoA&s=10",
    description: "Tiras de pechuga 100% de pollo apanadas y doradas.",
    details: [
      "Filetes de pechuga de pollo cortados en tiras",
      "Apanado dorado y crujiente",
      "Fácil de comer entre clases y actividades",
      "Incluye miel Frisby"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "combo-de-pollo-frisby",
    slug: "combo-de-pollo-frisby",
    name: "Combo de Pollo Frisby",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Pollo",
    price: 29900,
    formattedPrice: "$29.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRensp9OJYZ-w5IJzsUxaHdDUXnncL5C9dsg0nk28COQw&s=10",
    description: "Pollo crujiente acompañado de papas a la francesa, arepas y bebida.",
    details: [
      "Presas de pollo apanado Frisby",
      "Porción de papas a la francesa o arepitas",
      "Bebida gaseosa personal fría",
      "Miel y salsas de la casa"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "combo-personal-frisby",
    slug: "combo-personal",
    name: "Combo Personal Frisby",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Pollo",
    price: 25900,
    formattedPrice: "$25.900",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=90",
    description: "2 Presas de pollo apanado crujiente con papas a la francesa y gaseosa fría.",
    details: [
      "2 deliciosas presas de pollo crujiente Frisby",
      "Porción de papas fritas doradas",
      "Gaseosa personal 250ml fría",
      "1 miel Frisby característica"
    ],
    rating: 5,
    isPopularCombo: true,
    isFeatured: true
  },
  {
    id: "combo-familiar-frisby",
    slug: "combo-familiar",
    name: "Combo Familiar Frisby",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Pollo",
    price: 49900,
    formattedPrice: "$49.900",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=700&q=90",
    description: "8 Presas de pollo crujiente para compartir con papas y arepas en el colegio.",
    details: [
      "8 presas de pollo apanado Frisby",
      "Porción grande de papas a la francesa",
      "4 arepas doradas colombianas",
      "Bebida familiar 1.5L para compartir"
    ],
    rating: 5,
    isPopularCombo: true,
    isFeatured: true
  },
  {
    id: "pollo-frisby-arepas",
    slug: "pollo-frisby-arepas",
    name: "Pollo Frisby Arepas",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Pollo",
    price: 59900,
    formattedPrice: "$59.900",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80",
    description: "9 Presas Apanadas y 10 Arepas doradas con salsa y miel.",
    details: [
      "9 presas de pollo apanado crujiente",
      "10 arepas tradicionales colombianas",
      "Miel y salsa de tomate",
      "Ideal para celebraciones y descansos en grupo"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "papas-fritas-frisby",
    slug: "papas-fritas",
    name: "Papas Fritas Frisby",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Acompañamientos",
    price: 8900,
    formattedPrice: "$8.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkpJiXODZHRx45OP1oVfNrbm-5D_ath2oVUUHm17iPA&s=10",
    description: "Papas a la francesa crujientes y doradas con toque de sal marina.",
    details: [
      "Papas cortadas estilo francesa",
      "Apanado ligero para máxima crocancia",
      "Sal marina fina al punto"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "papas-grandes-frisby",
    slug: "papas-grandes",
    name: "Papas Grandes Frisby",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Acompañamientos",
    price: 12900,
    formattedPrice: "$12.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5XUAc1vGZXQQqnjXahq_QUMUke7VoIxD1-pAO19pRQ&s=10",
    description: "Porción grande de papas crocantes para los más antojados.",
    details: [
      "Porción abundante de papas a la francesa",
      "Crocantes y doradas",
      "Incluye salsas de acompañamiento"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "ensalada-fresca-frisby",
    slug: "ensaladas",
    name: "Ensalada Fresca Frisby",
    restaurantId: "frisby",
    restaurantName: "Frisby",
    category: "Acompañamientos",
    price: 9900,
    formattedPrice: "$9.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVGh9lKWyaQwtGPsfJIhHCOMVUr1tf_TZ9LR3kJu-T1w&s=10",
    description: "Ensalada fresca con repollo, zanahoria y vinagreta agridulce especial.",
    details: [
      "Repollo fresco cortado en tiras finas",
      "Zanahoria rallada fresca",
      "Aderezo cremoso agridulce secreto Frisby",
      "Excelente balance ligero para tus comidas"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },

  // =================== KFC ===================
  {
    id: "pollo-crispy-kfc",
    slug: "pollo-crispy",
    name: "Pollo Crispy KFC",
    restaurantId: "kfc",
    restaurantName: "KFC",
    category: "Pollo",
    price: 18900,
    formattedPrice: "$18.900",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    description: "Pollo extra crujiente preparado con la receta secreta del Coronel Sanders.",
    details: [
      "Presas de pollo fresco de primera calidad",
      "Receta Extra Crispy con 11 hierbas y especias",
      "Apanado con textura súper crocante y jugoso por dentro",
      "Servido bien caliente"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "combo-de-pollo-kfc",
    slug: "combo-pollo-kfc",
    name: "Combo de Pollo KFC",
    restaurantId: "kfc",
    restaurantName: "KFC",
    category: "Pollo",
    price: 32400,
    formattedPrice: "$32.400",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    description: "Varias piezas de pollo crujiente acompañadas de papas fritas y gaseosa.",
    details: [
      "3 presas de pollo crujiente Receta Secreta o Crispy",
      "Papas fritas regulares doradas",
      "Bebida gaseosa helada",
      "Salsa de tomate y salsa BBQ"
    ],
    rating: 5,
    isPopularCombo: true,
    isFeatured: true
  },
  {
    id: "bucket-de-pollo-kfc",
    slug: "bucket-pollo-kfc",
    name: "Bucket de Pollo KFC (10 piezas)",
    restaurantId: "kfc",
    restaurantName: "KFC",
    category: "Pollo",
    price: 49900,
    formattedPrice: "$49.900",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80",
    description: "El icónico balde de 10 piezas de pollo para compartir con todo tu salón.",
    details: [
      "10 presas de pollo fresco con apanado original o crispy",
      "Ideal para celebraciones, cumpleaños o trabajos grupales escolares",
      "Incluye salsas variadas"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "alitas-bbq-kfc",
    slug: "alitas-bbq-kfc",
    name: "Alitas BBQ KFC",
    restaurantId: "kfc",
    restaurantName: "KFC",
    category: "Pollo",
    price: 24500,
    formattedPrice: "$24.500",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
    description: "Alitas doradas bañadas en una salsa barbacoa ahumada y dulce.",
    details: [
      "Alitas de pollo crujientes en porción de 6 piezas",
      "Salsa BBQ glaseada con notas ahumadas",
      "Acompañamiento de aderezo ranchero"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "chicken-tenders-kfc",
    slug: "chicken-tenders-kfc",
    name: "Chicken Tenders KFC",
    restaurantId: "kfc",
    restaurantName: "KFC",
    category: "Pollo",
    price: 22900,
    formattedPrice: "$22.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6h5gTzrfaRpIjnBnOlDSf126eFjjU3mO2GppoSwm2fA&s=10",
    description: "Tiras de pechuga de pollo 100% pura carne sin hueso, súper crujientes.",
    details: [
      "4 tiras de pechuga tierna apanada con hierbas finas",
      "Cero huesos, ideal para comer rápido",
      "Salsa miel-mostaza o barbacoa incluida"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "ensalada-repollo-kfc",
    slug: "ensalada-repollo-kfc",
    name: "Ensalada Coleslaw KFC",
    restaurantId: "kfc",
    restaurantName: "KFC",
    category: "Acompañamientos",
    price: 8900,
    formattedPrice: "$8.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhYObhIA1R5nNBu1lVq9H1D73C9TYEzNKlFmZcBUJ0b7e3R-rB1182idP&s=10",
    description: "El tradicional coleslaw de repollo rallado, zanahoria y aderezo dulce cremoso.",
    details: [
      "Repollo fresco cortado fino",
      "Zanahoria fresca y aderezo especial KFC",
      "Toque refrescante para acompañar el pollo frito"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },

  // =================== PIZZA HUT ===================
  {
    id: "pizza-pepperoni",
    slug: "pizza-pepperoni",
    name: "Pizza Pepperoni Clásica",
    restaurantId: "pizza-hut",
    restaurantName: "Pizza Hut",
    category: "Pizza",
    price: 32900,
    formattedPrice: "$32.900",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    description: "Masa horneada al punto, salsa de tomate sazonada, queso mozzarella fundido y abundante pepperoni.",
    details: [
      "Masa Pan Pizza artesanal recién horneada",
      "Salsa de tomates maduros con albahaca y orégano",
      "Generosa capa de queso 100% mozzarella derretido",
      "Rodajas de pepperoni crujientes y especiadas",
      "Corte en 8 porciones listas para comer"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "pizza-hawaiana",
    slug: "pizza-hawaiana",
    name: "Pizza Hawaiana Dulce",
    restaurantId: "pizza-hut",
    restaurantName: "Pizza Hut",
    category: "Pizza",
    price: 34900,
    formattedPrice: "$34.900",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80",
    description: "La combinación favorita de jamón ahumado, trozos dulces de piña y queso mozzarella derretido.",
    details: [
      "Masa tradicional esponjosa y crujiente en los bordes",
      "Salsa de tomate italiana",
      "Queso mozzarella abundante de primera calidad",
      "Jamón ahumado seleccionado en cubos",
      "Trozos de piña jugosa caramelizada al horno"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "pizza-suprema",
    slug: "pizza-sup",
    name: "Pizza Suprema Hut",
    restaurantId: "pizza-hut",
    restaurantName: "Pizza Hut",
    category: "Pizza",
    price: 39900,
    formattedPrice: "$39.900",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    description: "Cargada con carne de res, cerdo, pepperoni, champiñones frescos, pimientos y cebolla.",
    details: [
      "Masa Pan Pizza dorada y gruesa",
      "Mezcla de carnes sazonadas y pepperoni",
      "Pimentón verde fresco, cebolla morada y champiñones",
      "Queso mozzarella premium estirable",
      "La más completa para recargar energía"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "palitos-de-queso",
    slug: "palitos-de-queso",
    name: "Palitos de Queso Mozzarella",
    restaurantId: "pizza-hut",
    restaurantName: "Pizza Hut",
    category: "Acompañamientos",
    price: 14900,
    formattedPrice: "$14.900",
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=800&q=80",
    description: "Palitos de masa suave rellenos de queso mozzarella con salsa marinara para untar.",
    details: [
      "4 palitos horneados rellenos de queso fundido",
      "Bañados con mantequilla de ajo y queso parmesano",
      "Vaso de salsa marinara caliente para untar"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },

  // =================== SUBWAY ===================
  {
    id: "subway-club",
    slug: "subway-club",
    name: "Subway Club",
    restaurantId: "subway",
    restaurantName: "Subway",
    category: "Sándwiches",
    price: 22900,
    formattedPrice: "$22.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgpYTWK4kHF3xmiSxHiItkAkKfMEgKMZDDMV-SppHsg&s=10",
    description: "Pechuga de pavo, jamón de cerdo, roast beef, queso derretido y vegetales frescos.",
    details: [
      "Pan de 15 cm horneado en el día (orégano parmesano o integral)",
      "Pechuga de pavo, jamón cocido y roast beef tierno",
      "Queso americano derretido",
      "Lechuga fresca, tomates, pepinos, pimientos y cebolla",
      "Salsa a elección: mayonesa, mostaza dulce, chipotle o vinagreta"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "pollo-teriyaki-subway",
    slug: "pollo-teriyaki",
    name: "Subway Pollo Teriyaki",
    restaurantId: "subway",
    restaurantName: "Subway",
    category: "Sándwiches",
    price: 24900,
    formattedPrice: "$24.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScJPhY_-qarPkMyliqoyJKivH7ZqWbSj7mqX52qR7EQ&s=10",
    description: "Tiras de pollo bañadas en salsa teriyaki dulce con vegetales frescos a tu elección.",
    details: [
      "Pan recién horneado a tu gusto",
      "Tiras de pechuga de pollo marinadas en salsa teriyaki japonesa",
      "Vegetales crocantes al gusto del estudiante",
      "Toque de salsa cebolla dulce recomendada"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "italian-bmt",
    slug: "italian-bmt",
    name: "Italian B.M.T.",
    restaurantId: "subway",
    restaurantName: "Subway",
    category: "Sándwiches",
    price: 23900,
    formattedPrice: "$23.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsrvCakmSzfCofioJMksPPSUqJNqqfZdJQS0nJIH8Mw&s=10",
    description: "El clásico italiano con salami Génova, pepperoni especiado y jamón de cerdo.",
    details: [
      "Pan artesanal italiano fresco",
      "Combinación de carnes italianas: salami, pepperoni y jamón",
      "Queso fundido",
      "Acompañado de vegetales frescos seleccionados",
      "Salsas sugeridas: aceite de oliva, orégano y vinagreta"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "subway-melt",
    slug: "subway-melt",
    name: "Subway Melt",
    restaurantId: "subway",
    restaurantName: "Subway",
    category: "Sándwiches",
    price: 25900,
    formattedPrice: "$25.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDp3RyJH3MNSQr7tsHJCPRCjLR6227Q7AOlp1o4rocMw&s=10",
    description: "Pavo, jamón, tocino crujiente, doble queso derretido y vegetales a elección.",
    details: [
      "Rebanadas de pavo y jamón con tocineta crocante",
      "Doble porción de queso derretido en horno tostador",
      "Vegetales crujientes y frescos",
      "Pan suave a elección"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "wrap-de-pollo",
    slug: "wrap-pollo",
    name: "Wrap de Pollo Especial",
    restaurantId: "subway",
    restaurantName: "Subway",
    category: "Mexicana",
    price: 19900,
    formattedPrice: "$19.900",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    description: "Tortilla de trigo suave rellena de pollo jugoso, vegetales frescos y salsa especial.",
    details: [
      "Tortilla de trigo grande suavemente tostada",
      "Tiras de pechuga de pollo sazonadas",
      "Queso rallado y lechuga fresca en julianas",
      "Tomate, cebolla morada y aderezo ranch o guacamole"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "wrap-italiano",
    slug: "wrap-italiano",
    name: "Wrap Italiano",
    restaurantId: "subway",
    restaurantName: "Subway",
    category: "Mexicana",
    price: 21900,
    formattedPrice: "$21.900",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    description: "Tortilla suave rellena de carnes frías italianas, queso y aderezo balsámico.",
    details: [
      "Tortilla de espinaca o trigo",
      "Salami, pepperoni, jamón y queso",
      "Vegetales frescos mediterráneos"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "wrap-vegetariano",
    slug: "wrap-vegetariano",
    name: "Wrap Vegetariano Fresco",
    restaurantId: "subway",
    restaurantName: "Subway",
    category: "Mexicana",
    price: 18900,
    formattedPrice: "$18.900",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    description: "Tortilla de trigo con guacamole, queso fresco, maíz dulce y mix de verduras crocantes.",
    details: [
      "Doble porción de vegetales frescos de huerta",
      "Guacamole natural cremoso",
      "Queso blanco campesino",
      "Ligero y saludable para la jornada de estudio"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },

  // =================== SANTA ROSA ===================
  {
    id: "helado-de-chocolate",
    slug: "helado-chocolate",
    name: "Helado de Chocolate Belga",
    restaurantId: "santa-rosa",
    restaurantName: "Santa Rosa",
    category: "Postres",
    price: 9900,
    formattedPrice: "$9.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwPo60gNHHwg0ijyXzMkV1L3p5iPVXYVGfG7ySpWAeQ&s=10",
    description: "Helado artesanal cremoso preparado con cacao puro y chips de chocolate.",
    details: [
      "Base de leche fresca entera y cacao holandés seleccionado",
      "Trozos crujientes de chocolate amargo artesanal",
      "Textura suave que se derrite en la boca",
      "Servido en cono crocante o copa biodegradable"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "helado-de-vainilla",
    slug: "helado-vainilla",
    name: "Helado de Vainilla Tradicional",
    restaurantId: "santa-rosa",
    restaurantName: "Santa Rosa",
    category: "Postres",
    price: 8900,
    formattedPrice: "$8.900",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8gg6gswkjT7evNz-8Y7uMwnzd_NLu_LMtuWJyx9ykQ&s=10",
    description: "Clásico y suave helado con aroma y sabor a vainilla natural de Madagascar.",
    details: [
      "Extracto de vainilla natural de calidad suprema",
      "Crema de leche batida a baja temperatura",
      "Toque de barquillo dulce",
      "Ideal para refrescar cualquier tarde escolar"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "copa-santa-rosa",
    slug: "copa-santa-rosa",
    name: "Copa Especial Santa Rosa",
    restaurantId: "santa-rosa",
    restaurantName: "Santa Rosa",
    category: "Postres",
    price: 14900,
    formattedPrice: "$14.900",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    description: "3 Bolas de helado a elección con crema chantilly, fresas frescas y salsa de chocolate.",
    details: [
      "3 bolas de helado artesanal a elección",
      "Fresas frescas en láminas",
      "Crema chantilly batida en el momento",
      "Barquillos crujientes y cereza al marasquino"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },

  // =================== BEBIDAS ===================
  {
    id: "coca-cola",
    slug: "cocacola",
    name: "Coca-Cola Original 400ml",
    restaurantId: "mcdonalds",
    restaurantName: "NEXO Bebidas",
    category: "Bebidas",
    price: 11000,
    formattedPrice: "$11.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0W7tHHEbZMeRzhQA7kIz5Pj9soi461LO4K3FUjDUIaA&s=10",
    description: "La bebida gaseosa más famosa del mundo, servida bien fría con hielo.",
    details: [
      "Presentación personal de 400ml",
      "Servida a temperatura óptima de refrigeración",
      "Con gas burbujeante refrescante"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: true
  },
  {
    id: "sprite",
    slug: "sprite",
    name: "Sprite Lima-Limón 400ml",
    restaurantId: "mcdonalds",
    restaurantName: "NEXO Bebidas",
    category: "Bebidas",
    price: 10000,
    formattedPrice: "$10.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunobluoT3p4CbWtjqZdnfrv9KavNXSbxSqIySamZFwg&s=10",
    description: "Refrescante gaseosa transparente sabor a lima y limón para quitar la sed.",
    details: [
      "Sabor cítrico balanceado con burbujas intensas",
      "Libre de cafeína",
      "Servida bien fría"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "fanta-naranja",
    slug: "fanta",
    name: "Fanta Naranja 400ml",
    restaurantId: "frisby",
    restaurantName: "NEXO Bebidas",
    category: "Bebidas",
    price: 8000,
    formattedPrice: "$8.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTpNzgYmFLlRLMeFISOJeFF-FprQQyelqXrxNyv9yMA&s=10",
    description: "Gaseosa vibrante y frutal con delicioso sabor a naranja dulce.",
    details: [
      "Burbujas frutales de naranja",
      "Acompañamiento perfecto para combos de pollo o pizza"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  },
  {
    id: "cafe-mccafe",
    slug: "cafe",
    name: "Café Caliente McCafé",
    restaurantId: "mcdonalds",
    restaurantName: "McDonald's",
    category: "Bebidas",
    price: 6000,
    formattedPrice: "$6.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_pGj3enp2KwHUfonsZJr_ORbiJLi0CxQi5ZNfWgEZFw&s=10",
    description: "Café 100% colombiano tostado y recién colado para comenzar la jornada con ánimo.",
    details: [
      "Granos de café 100% arábica colombiano",
      "Aroma intenso y notas achocolatadas",
      "Vaso térmico con tapa dosificadora"
    ],
    rating: 5,
    isPopularCombo: false,
    isFeatured: false
  }
];

export const getProductByIdOrSlug = (identifier) => {
  if (!identifier) return null;
  const cleanId = String(identifier).toLowerCase().trim();
  return products.find(
    (p) =>
      p.id.toLowerCase() === cleanId ||
      p.slug.toLowerCase() === cleanId ||
      p.name.toLowerCase().replace(/[^a-z0-9]/g, "-") === cleanId
  );
};

export const getProductsByRestaurant = (restaurantId) => {
  return products.filter((p) => p.restaurantId === restaurantId);
};

export const getProductsByCategory = (category) => {
  if (!category || category === "Todos") return products;
  return products.filter(
    (p) =>
      p.category.toLowerCase().includes(category.toLowerCase()) ||
      category.toLowerCase().includes(p.category.toLowerCase())
  );
};

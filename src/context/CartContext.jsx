import { createContext, useContext, useState, useEffect } from "react";
import { products } from "../data/products";

const CartContext = createContext();

const DEFAULT_CART_ITEMS = [
  {
    product: products.find((p) => p.id === "combo-personal-frisby") || {
      id: "combo-personal-frisby",
      name: "Combo Personal",
      description: "Pollo, papas y bebida.",
      price: 25900,
      formattedPrice: "$25.900",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=90",
      restaurantName: "Frisby"
    },
    quantity: 1
  },
  {
    product: products.find((p) => p.id === "hamburguesa-doble") || {
      id: "hamburguesa-doble",
      name: "Hamburguesa Clásica",
      description: "Hamburguesa, papas y bebida.",
      price: 24900,
      formattedPrice: "$24.900",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
      restaurantName: "McDonald's"
    },
    quantity: 1
  }
];

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("nexo_cart");
      if (saved !== null) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return DEFAULT_CART_ITEMS;
  });

  useEffect(() => {
    try {
      localStorage.setItem("nexo_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (product, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      } else {
        return [...prev, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const deliveryFee = items.length > 0 ? 3000 : 0;
  const total = subtotal + deliveryFee;
  const cartCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const formatCurrency = (amount) => {
    return "$" + amount.toLocaleString("es-CO");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        deliveryFee,
        total,
        cartCount,
        formatCurrency
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

import { createContext, useContext, useState, useEffect } from "react";
import { initialOrders } from "../data/initialOrders";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("nexo_orders");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return initialOrders;
  });

  useEffect(() => {
    try {
      localStorage.setItem("nexo_orders", JSON.stringify(orders));
    } catch {
      // ignore
    }
  }, [orders]);

  const createOrder = ({
    items,
    subtotal,
    deliveryFee,
    total,
    school,
    grade,
    phone,
    paymentMethod,
    notes
  }) => {
    // Generate clean next ID like "004", "005", etc.
    const nextNum = orders.length + 1;
    const newId = String(nextNum).padStart(3, "0");

    // Primary product for display
    const firstItem = items[0]?.product;
    const itemsCount = items.reduce((acc, i) => acc + i.quantity, 0);

    const newOrder = {
      id: newId,
      restaurant: firstItem?.restaurantName || "Restaurante NEXO",
      restaurantIcon: firstItem?.category === "Pizza" ? "🍕" : firstItem?.category === "Pollo" ? "🍗" : "🍔",
      productName: items.length === 1 ? firstItem?.name : `${firstItem?.name} + ${items.length - 1} más`,
      description: items.map((i) => `${i.quantity}x ${i.product.name}`).join(", "),
      icon: firstItem?.category === "Pizza" ? "🍕" : firstItem?.category === "Pollo" ? "🍗" : "🍔",
      image: firstItem?.image || "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
      quantity: itemsCount,
      subtotal,
      deliveryFee,
      total,
      formattedTotal: "$" + total.toLocaleString("es-CO"),
      status: "enviado",
      statusLabel: "🚚 Enviado",
      statusMessage: "Tu pedido está en camino",
      statusDescription: "El repartidor lleva tu pedido hacia tu colegio.",
      date: "Hoy, " + new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" }),
      school: school || "I. E. LA SALLE DE CAMPOAMOR",
      grade: grade || "11°",
      phone: phone || "300 000 0000",
      paymentMethod: paymentMethod || "Efectivo",
      notes: notes || "",
      driverName: "Carlos Rodríguez",
      driverRole: "Repartidor NEXO",
      driverPhoto: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      rated: false,
      items
    };

    setOrders((prev) => [newOrder, ...prev]);
    return newOrder;
  };

  const deleteOrder = (orderId) => {
    setOrders((prev) => prev.filter((o) => o.id !== orderId));
  };

  const clearAllOrders = () => {
    setOrders([]);
  };

  const rateDriver = (orderId, rating, comment) => {
    setOrders((prev) =>
      prev.map((order) => {
        if (!orderId || order.id === orderId) {
          return {
            ...order,
            rated: true,
            rating,
            comment,
            status: "entregado",
            statusLabel: "✓ Entregado"
          };
        }
        return order;
      })
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        deleteOrder,
        clearAllOrders,
        rateDriver
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { ToastProvider } from "./context/ToastContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Comidas from "./pages/Comidas";
import Restaurantes from "./pages/Restaurantes";
import RestaurantDetail from "./pages/RestaurantDetail";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Perfil from "./pages/Perfil";
import PerfilActividades from "./pages/PerfilActividades";
import Certificado from "./pages/Certificado";
import MisPedidos from "./pages/MisPedidos";
import CalificarRepartidor from "./pages/CalificarRepartidor";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Configuracion from "./pages/Configuracion";
import Bienvenido from "./pages/Bienvenido";

import "./styles/global.css";

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <ToastProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  {/* PÁGINA PRINCIPAL / INICIO */}
                  <Route path="/" element={<Home />} />
                  <Route path="/index.html" element={<Home />} />

                  {/* COMIDAS */}
                  <Route path="/comidas" element={<Comidas />} />
                  <Route path="/comidas.html" element={<Comidas />} />

                  {/* RESTAURANTES */}
                  <Route path="/restaurantes" element={<Restaurantes />} />
                  <Route path="/restaurantes.html" element={<Restaurantes />} />
                  <Route path="/restaurante/:id" element={<RestaurantDetail />} />

                  {/* RESTAURANTES ESPECÍFICOS Y ALIASES */}
                  <Route path="/frisby" element={<RestaurantDetail restaurantId="frisby" />} />
                  <Route path="/frisby.html" element={<RestaurantDetail restaurantId="frisby" />} />
                  <Route path="/kfc" element={<RestaurantDetail restaurantId="kfc" />} />
                  <Route path="/kfc.html" element={<RestaurantDetail restaurantId="kfc" />} />
                  <Route path="/mcdonalds" element={<RestaurantDetail restaurantId="mcdonalds" />} />
                  <Route path="/mcdonald's.html" element={<RestaurantDetail restaurantId="mcdonalds" />} />
                  <Route path="/mcdonalds.html" element={<RestaurantDetail restaurantId="mcdonalds" />} />
                  <Route path="/subway" element={<RestaurantDetail restaurantId="subway" />} />
                  <Route path="/subway.html" element={<RestaurantDetail restaurantId="subway" />} />
                  <Route path="/pizza-hut" element={<RestaurantDetail restaurantId="pizza-hut" />} />
                  <Route path="/pizza_hut.html" element={<RestaurantDetail restaurantId="pizza-hut" />} />
                  <Route path="/santa-rosa" element={<RestaurantDetail restaurantId="santa-rosa" />} />
                  <Route path="/santa_rosa.html" element={<RestaurantDetail restaurantId="santa-rosa" />} />

                  {/* PRODUCTOS Y ALIASES HTML */}
                  <Route path="/comida/:slug" element={<ProductDetail />} />
                  <Route path="/hamburguesa" element={<ProductDetail productSlug="hamburguesa" />} />
                  <Route path="/hamburguesa.html" element={<ProductDetail productSlug="hamburguesa" />} />
                  <Route path="/cuarto-libra" element={<ProductDetail productSlug="cuarto-libra" />} />
                  <Route path="/cuarto%20libra.html" element={<ProductDetail productSlug="cuarto-libra" />} />
                  <Route path="/cuarto libra.html" element={<ProductDetail productSlug="cuarto-libra" />} />
                  <Route path="/big-mac" element={<ProductDetail productSlug="big-mac" />} />
                  <Route path="/big%20mac.html" element={<ProductDetail productSlug="big-mac" />} />
                  <Route path="/big mac.html" element={<ProductDetail productSlug="big-mac" />} />
                  <Route path="/mcdoble" element={<ProductDetail productSlug="mcdoble" />} />
                  <Route path="/mcdoble.html" element={<ProductDetail productSlug="mcdoble" />} />
                  <Route path="/mcpollo" element={<ProductDetail productSlug="mcpollo" />} />
                  <Route path="/mcpollo.html" element={<ProductDetail productSlug="mcpollo" />} />
                  <Route path="/mcflurry" element={<ProductDetail productSlug="mcflurry" />} />
                  <Route path="/mcflurry.html" element={<ProductDetail productSlug="mcflurry" />} />
                  <Route path="/sundae" element={<ProductDetail productSlug="sundae" />} />
                  <Route path="/sundae.html" element={<ProductDetail productSlug="sundae" />} />
                  <Route path="/combo-personal" element={<ProductDetail productSlug="combo-personal" />} />
                  <Route path="/combo%20personal.html" element={<ProductDetail productSlug="combo-personal" />} />
                  <Route path="/combo personal.html" element={<ProductDetail productSlug="combo-personal" />} />
                  <Route path="/combo-familiar" element={<ProductDetail productSlug="combo-familiar" />} />
                  <Route path="/combo%20familiar.html" element={<ProductDetail productSlug="combo-familiar" />} />
                  <Route path="/combo familiar.html" element={<ProductDetail productSlug="combo-familiar" />} />
                  <Route path="/combo-pollo-frisby" element={<ProductDetail productSlug="combo-de-pollo-frisby" />} />
                  <Route path="/combo_de_pollo_frisby.html" element={<ProductDetail productSlug="combo-de-pollo-frisby" />} />
                  <Route path="/combo-pollo-kfc" element={<ProductDetail productSlug="combo-pollo-kfc" />} />
                  <Route path="/combo_de_pollo_kfc.html" element={<ProductDetail productSlug="combo-pollo-kfc" />} />
                  <Route path="/pollo-apanado" element={<ProductDetail productSlug="pollo-apanado" />} />
                  <Route path="/pollo_apanado.html" element={<ProductDetail productSlug="pollo-apanado" />} />
                  <Route path="/pollo-crispy" element={<ProductDetail productSlug="pollo-crispy" />} />
                  <Route path="/pollo_crispy.html" element={<ProductDetail productSlug="pollo-crispy" />} />
                  <Route path="/alitas-de-pollo" element={<ProductDetail productSlug="alitas-de-pollo" />} />
                  <Route path="/alitas_de_pollo.html" element={<ProductDetail productSlug="alitas-de-pollo" />} />
                  <Route path="/alitas" element={<ProductDetail productSlug="alitas-de-pollo" />} />
                  <Route path="/tiras-de-pollo" element={<ProductDetail productSlug="tiras-de-pollo" />} />
                  <Route path="/tiras_de_pollo.html" element={<ProductDetail productSlug="tiras-de-pollo" />} />
                  <Route path="/nuggets" element={<ProductDetail productSlug="nuggets" />} />
                  <Route path="/nuggets.html" element={<ProductDetail productSlug="nuggets" />} />
                  <Route path="/papas-fritas" element={<ProductDetail productSlug="papas-fritas" />} />
                  <Route path="/papas_fritas.html" element={<ProductDetail productSlug="papas-fritas" />} />
                  <Route path="/papas-grandes" element={<ProductDetail productSlug="papas-grandes" />} />
                  <Route path="/papas_grandes.html" element={<ProductDetail productSlug="papas-grandes" />} />
                  <Route path="/papasg" element={<ProductDetail productSlug="papasg" />} />
                  <Route path="/papasg.html" element={<ProductDetail productSlug="papasg" />} />
                  <Route path="/papasm" element={<ProductDetail productSlug="papasm" />} />
                  <Route path="/papasm.html" element={<ProductDetail productSlug="papasm" />} />
                  <Route path="/papasp" element={<ProductDetail productSlug="papasp" />} />
                  <Route path="/papasp.html" element={<ProductDetail productSlug="papasp" />} />
                  <Route path="/ensaladas" element={<ProductDetail productSlug="ensaladas" />} />
                  <Route path="/ensaladas.html" element={<ProductDetail productSlug="ensaladas" />} />
                  <Route path="/cocacola" element={<ProductDetail productSlug="cocacola" />} />
                  <Route path="/cocacola.html" element={<ProductDetail productSlug="cocacola" />} />
                  <Route path="/sprite" element={<ProductDetail productSlug="sprite" />} />
                  <Route path="/sprite.html" element={<ProductDetail productSlug="sprite" />} />
                  <Route path="/pizza-pepperoni" element={<ProductDetail productSlug="pizza-pepperoni" />} />
                  <Route path="/pizza_pepperoni.html" element={<ProductDetail productSlug="pizza-pepperoni" />} />
                  <Route path="/pizza-hawaiana" element={<ProductDetail productSlug="pizza-hawaiana" />} />
                  <Route path="/pizza_hawaiana.html" element={<ProductDetail productSlug="pizza-hawaiana" />} />
                  <Route path="/pizza-sup" element={<ProductDetail productSlug="pizza-sup" />} />
                  <Route path="/pizza%20sup.html" element={<ProductDetail productSlug="pizza-sup" />} />
                  <Route path="/pizza sup.html" element={<ProductDetail productSlug="pizza-sup" />} />
                  <Route path="/subway-club" element={<ProductDetail productSlug="subway-club" />} />
                  <Route path="/subway_club.html" element={<ProductDetail productSlug="subway-club" />} />
                  <Route path="/pollo-teriyaki" element={<ProductDetail productSlug="pollo-teriyaki" />} />
                  <Route path="/pollo_teriyaki.html" element={<ProductDetail productSlug="pollo-teriyaki" />} />
                  <Route path="/italian-bmt" element={<ProductDetail productSlug="italian-bmt" />} />
                  <Route path="/italian_bmt.html" element={<ProductDetail productSlug="italian-bmt" />} />
                  <Route path="/subway-melt" element={<ProductDetail productSlug="subway-melt" />} />
                  <Route path="/subway_melt.html" element={<ProductDetail productSlug="subway-melt" />} />
                  <Route path="/wrap-de-pollo" element={<ProductDetail productSlug="wrap-pollo" />} />
                  <Route path="/wrap_de_pollo.html" element={<ProductDetail productSlug="wrap-pollo" />} />
                  <Route path="/wrap-italiano" element={<ProductDetail productSlug="wrap-italiano" />} />
                  <Route path="/wrap_italiano.html" element={<ProductDetail productSlug="wrap-italiano" />} />
                  <Route path="/wrap-teriyaki" element={<ProductDetail productSlug="wrap-teriyaki" />} />
                  <Route path="/wrap_teriyaki.html" element={<ProductDetail productSlug="wrap-teriyaki" />} />
                  <Route path="/wrap-vegetariano" element={<ProductDetail productSlug="wrap-vegetariano" />} />
                  <Route path="/wrap_vegetariano.html" element={<ProductDetail productSlug="wrap-vegetariano" />} />
                  <Route path="/helado-de-chocolate" element={<ProductDetail productSlug="helado-chocolate" />} />
                  <Route path="/helado_de_chocolate.html" element={<ProductDetail productSlug="helado-chocolate" />} />
                  <Route path="/helado-de-vainilla" element={<ProductDetail productSlug="helado-vainilla" />} />
                  <Route path="/helado_de_vainilla.html" element={<ProductDetail productSlug="helado-vainilla" />} />

                  {/* CARRITO */}
                  <Route path="/carrito" element={<Cart />} />
                  <Route path="/carrito.html" element={<Cart />} />

                  {/* PERFIL Y ACTIVIDADES */}
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/perfil.html" element={<Perfil />} />
                  <Route path="/perfil2" element={<PerfilActividades />} />
                  <Route path="/perfil2.html" element={<PerfilActividades />} />
                  <Route path="/perfil/actividades" element={<PerfilActividades />} />

                  {/* CERTIFICADO */}
                  <Route path="/certificado" element={<Certificado />} />
                  <Route path="/certificado.html" element={<Certificado />} />

                  {/* MIS PEDIDOS */}
                  <Route path="/mis-pedidos" element={<MisPedidos />} />
                  <Route path="/mis_pedidos.html" element={<MisPedidos />} />

                  {/* CALIFICAR REPARTIDOR */}
                  <Route path="/calificar-repartidor" element={<CalificarRepartidor />} />
                  <Route path="/calificar_al_repartidor.html" element={<CalificarRepartidor />} />

                  {/* CONFIGURACIÓN */}
                  <Route path="/configuracion" element={<Configuracion />} />
                  <Route path="/configuracion.html" element={<Configuracion />} />

                  {/* AUTENTICACIÓN Y BIENVENIDA */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/inicio-sesion" element={<Login />} />
                  <Route path="/inicio-sesion.html" element={<Login />} />

                  <Route path="/registro" element={<Registro />} />
                  <Route path="/registrarse" element={<Registro />} />
                  <Route path="/registro.html" element={<Registro />} />
                  <Route path="/registrarse.html" element={<Registro />} />

                  <Route path="/bienvenido" element={<Bienvenido />} />
                  <Route path="/bienvenidso.html" element={<Bienvenido />} />
                  <Route path="/portada" element={<Bienvenido />} />
                  <Route path="/portada.html" element={<Bienvenido />} />
                  <Route path="/notificacion1.html" element={<Bienvenido />} />
                  <Route path="/daft.html" element={<Navigate to="/" replace />} />

                  {/* CUALQUIER OTRA RUTA REDIRIGE AL INICIO */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ToastProvider>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

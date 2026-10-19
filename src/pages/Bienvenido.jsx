import { Link } from "react-router-dom";

export function Bienvenido() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #171717, #2b0305, #171717)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 20px"
      }}
    >
      <div
        style={{
          background: "#1f1f1f",
          borderRadius: "24px",
          padding: "50px 40px",
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          border: "1px solid #333333"
        }}
      >
        <div
          style={{
            color: "#e50914",
            fontSize: "44px",
            fontWeight: "bold",
            letterSpacing: "1.5px",
            marginBottom: "15px"
          }}
        >
          NEXO
        </div>

        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>¡Bienvenido a NEXO!</h1>
        <h2 style={{ fontSize: "18px", color: "#e50914", marginBottom: "20px", fontWeight: "normal" }}>
          La app de comida para estudiantes
        </h2>

        <p style={{ color: "#cccccc", fontSize: "15px", lineHeight: "1.6", marginBottom: "30px" }}>
          Tu comida favorita está a solo unos toques de distancia.
          Pide desde tu salón, conecta con repartidores confiables y disfruta de los mejores combos en la portería de tu colegio.
        </p>

        <div style={{ color: "#ffc107", fontSize: "28px", marginBottom: "30px" }}>
          ★★★★★
        </div>

        <Link
          to="/"
          style={{
            display: "block",
            background: "#e50914",
            color: "white",
            padding: "16px 24px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "0.2s"
          }}
        >
          Comenzar a explorar ➔
        </Link>
      </div>
    </div>
  );
}

export default Bienvenido;

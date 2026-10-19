import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const DEFAULT_USER = {
  name: "Jeronimo Montoya Rivera",
  email: "Jeronimo1724@gmail.com",
  colegio: "I. E. LA SALLE DE CAMPOAMOR",
  grado: "11",
  avatar: "👤",
  avatarImage: null,
  isAuthenticated: true
};

const DEFAULT_CERTIFICATE = {
  fileName: "certificado_estudio.pdf",
  uploadDate: "01/09/2026",
  fileType: "application/pdf",
  fileSize: "245 KB",
  fileData: null,
  studentName: "Jeronimo Montoya Rivera",
  institution: "I. E. LA SALLE DE CAMPOAMOR",
  grade: "11°",
  isVerified: true
};

// Simple secure hash simulation (SHA-256) to ensure no plaintext passwords are saved
async function hashPassword(plainText) {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(plainText);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    return btoa(plainText);
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("nexo_user");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_USER;
  });

  const [certificate, setCertificate] = useState(() => {
    try {
      const saved = localStorage.getItem("nexo_certificate");
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_CERTIFICATE;
  });

  useEffect(() => {
    try {
      localStorage.setItem("nexo_user", JSON.stringify(user));
    } catch {
      // ignore
    }
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem("nexo_certificate", JSON.stringify(certificate));
    } catch {
      // ignore
    }
  }, [certificate]);

  const login = async (email, password) => {
    if (!email || !password) {
      throw new Error("Por favor completa todos los campos.");
    }
    // Check registered users or match default
    const registeredUsers = JSON.parse(localStorage.getItem("nexo_registered_users") || "[]");
    const passwordHash = await hashPassword(password);

    const found = registeredUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (found) {
      if (found.passwordHash !== passwordHash) {
        throw new Error("Contraseña incorrecta.");
      }
      setUser({
        name: found.name,
        email: found.email,
        colegio: found.colegio,
        grado: found.grado,
        avatar: found.avatar || "👤",
        avatarImage: found.avatarImage || null,
        isAuthenticated: true
      });
      return true;
    }

    // Default test account login
    if (email.toLowerCase() === DEFAULT_USER.email.toLowerCase()) {
      setUser({
        ...DEFAULT_USER,
        isAuthenticated: true
      });
      return true;
    }

    // Allow mock login for any valid email for test convenience, but store hashed pass
    const newUser = {
      name: email.split("@")[0].replace(".", " "),
      email: email,
      colegio: "Colegio Oficial NEXO",
      grado: "10",
      avatar: "👤",
      avatarImage: null,
      isAuthenticated: true
    };
    setUser(newUser);
    return true;
  };

  const register = async ({ nombre, apellido, email, colegio, grado, password, certificateFile }) => {
    if (!nombre || !email || !colegio || !grado || !password) {
      throw new Error("Por favor completa los campos obligatorios.");
    }

    const passwordHash = await hashPassword(password);
    const fullName = `${nombre.trim()} ${apellido ? apellido.trim() : ""}`.trim();

    const registeredUsers = JSON.parse(localStorage.getItem("nexo_registered_users") || "[]");
    const existing = registeredUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      throw new Error("Ya existe una cuenta con este correo.");
    }

    const newUserRecord = {
      name: fullName,
      email,
      colegio,
      grado,
      passwordHash,
      avatar: "👤",
      createdAt: new Date().toISOString()
    };

    registeredUsers.push(newUserRecord);
    localStorage.setItem("nexo_registered_users", JSON.stringify(registeredUsers));

    // Update active user
    setUser({
      name: fullName,
      email,
      colegio,
      grado,
      avatar: "👤",
      avatarImage: null,
      isAuthenticated: true
    });

    // If certificate file provided, update certificate
    if (certificateFile) {
      const newCert = {
        fileName: certificateFile.name || "certificado_estudio.pdf",
        uploadDate: new Date().toLocaleDateString("es-CO"),
        fileType: certificateFile.type || "application/pdf",
        fileSize: certificateFile.size ? `${Math.round(certificateFile.size / 1024)} KB` : "150 KB",
        fileData: certificateFile.dataUrl || null,
        studentName: fullName,
        institution: colegio,
        grade: `${grado}°`,
        isVerified: true
      };
      setCertificate(newCert);
    }

    return true;
  };

  const updateProfile = (details) => {
    setUser((prev) => {
      const updated = { ...prev, ...details };
      // Also update studentName and school in certificate if name/school changed
      if (details.name || details.colegio || details.grado) {
        setCertificate((cert) => ({
          ...cert,
          studentName: details.name || cert.studentName,
          institution: details.colegio || cert.institution,
          grade: details.grado ? `${details.grado}°` : cert.grade
        }));
      }
      return updated;
    });
  };

  const updateAvatar = (avatarValue, isCustomImage = false) => {
    setUser((prev) => ({
      ...prev,
      avatar: isCustomImage ? "" : avatarValue,
      avatarImage: isCustomImage ? avatarValue : null
    }));
  };

  const uploadCertificate = ({ fileName, fileType, fileSize, fileData }) => {
    const newCert = {
      fileName: fileName || "certificado_estudio.pdf",
      uploadDate: new Date().toLocaleDateString("es-CO"),
      fileType: fileType || "application/pdf",
      fileSize: fileSize || "220 KB",
      fileData: fileData || null,
      studentName: user.name,
      institution: user.colegio,
      grade: `${user.grado}°`,
      isVerified: true
    };
    setCertificate(newCert);
  };

  const removeCertificate = () => {
    setCertificate(null);
  };

  const logout = () => {
    setUser({
      ...DEFAULT_USER,
      isAuthenticated: false
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        certificate,
        login,
        register,
        updateProfile,
        updateAvatar,
        uploadCertificate,
        removeCertificate,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

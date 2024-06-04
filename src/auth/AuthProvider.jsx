import React, { useState, createContext } from "react";

// Creamos el contexto de autenticación
export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {}, // Esta función no hace nada por defecto
});

// Componente proveedor que utiliza el estado para controlar la autenticación
export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Inicializamos como falso

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
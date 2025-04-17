import React, { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface Client {
  idClient: number;
  Name: string;
  Email: string;
  Password: string;
  Phone: string;
  EMoney: number;
}

interface TokenPayload {
  id: number;
  exp: number;
}

interface AuthContextType {
  isLoggedIn: boolean;
  client: Client | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshAccessToken: () => Promise<boolean>;
}

// Constantes para almacenamiento
const ACCESS_TOKEN_KEY = "baronesa_access_token";
const REFRESH_TOKEN_KEY = "baronesa_refresh_token";
const CLIENT_DATA_KEY = "baronesa_client";

// URL base de la API
// Cambia esta URL a la dirección IP de tu computadora en la red local
// Para desarrollo local, usa la IP de tu máquina en lugar de localhost
const API_URL = "http://10.0.2.2:3000/api";  // Reemplaza con tu IP real

// Función para ayudar a depurar problemas de conexión
const logAxiosError = (error: any) => {
  if (error.response) {
    // El servidor respondió con un código de estado fuera del rango 2xx
    console.error("Error data:", error.response.data);
    console.error("Error status:", error.response.status);
  } else if (error.request) {
    // La petición fue hecha pero no se recibió respuesta
    console.error("No response received:", error.request);
  } else {
    // Algo ocurrió al configurar la petición que desencadenó un error
    console.error("Error message:", error.message);
  }
  console.error("Error config:", error.config);
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  client: null,
  login: async () => {},
  logout: async () => {},
  refreshAccessToken: async () => false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<Client | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Verifica si el token está por expirar (menos de 5 minutos)
  const isTokenExpiring = (token: string): boolean => {
    try {
      const decoded = jwtDecode<TokenPayload>(token);
      return decoded.exp * 1000 < Date.now() + 5 * 60 * 1000;
    } catch {
      return true;
    }
  };

  // Configura el interceptor de Axios para refrescar tokens automáticamente
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      async (config) => {
        // Agregar el token de acceso si está disponible
        const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
        
        if (accessToken) {
          // Verificar si el token está por expirar
          if (isTokenExpiring(accessToken) && !isRefreshing) {
            const refreshed = await refreshAccessToken();
            if (refreshed) {
              const newToken = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
              if (newToken && config.headers) {
                config.headers["Authorization"] = `Bearer ${newToken}`;
              }
            }
          } else if (config.headers) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
          }
        }
        
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        
        // Si el error es 401 (no autorizado) y no hemos intentado refrescar el token
        if (
          error.response?.status === 401 &&
          error.response?.data?.code === "TOKEN_EXPIRED" &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;
          
          try {
            const refreshed = await refreshAccessToken();
            
            if (refreshed) {
              // Obtener el nuevo token
              const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
              
              if (accessToken) {
                // Actualizar el header de autorización
                axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
                originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
                
                // Reintentar la solicitud original
                return axios(originalRequest);
              }
            }
            
            // Si no pudimos refrescar el token, cerrar sesión
            await logout();
            return Promise.reject(error);
          } catch (refreshError) {
            await logout();
            return Promise.reject(refreshError);
          }
        }
        
        return Promise.reject(error);
      }
    );

    // Limpieza al desmontar
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  // Cargar cliente al inicio
  useEffect(() => {
    const loadClient = async () => {
      try {
        const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
        const clientData = await SecureStore.getItemAsync(CLIENT_DATA_KEY);

        if (accessToken && clientData) {
          // Verificar si el token está por expirar
          if (isTokenExpiring(accessToken)) {
            const refreshed = await refreshAccessToken();
            if (!refreshed) {
              await logout();
              return;
            }
          }
          
          setClient(JSON.parse(clientData));
          setIsLoggedIn(true);
          axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        }
      } catch (error) {
        console.error("Error al cargar datos del cliente:", error);
      }
    };
    
    loadClient();
  }, []);

  // Refrescar token de acceso
  const refreshAccessToken = async (): Promise<boolean> => {
    if (isRefreshing) return false;
    
    try {
      setIsRefreshing(true);
      
      const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
      
      if (!refreshToken) {
        return false;
      }
      
      const response = await axios.post(`${API_URL}/clients/refresh-token`, {
        refreshToken,
      });
      
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      
      await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken);
      await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, newRefreshToken);
      
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      
      return true;
    } catch (error) {
      console.error("Error al refrescar token:", error);
      return false;
    } finally {
      setIsRefreshing(false);
    }
  };

  // Función de inicio de sesión
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/clients/login`, {
        Email: email,
        Password: password,
      });

      const { user, accessToken, refreshToken } = response.data;

      await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken);
      await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refreshToken);
      await SecureStore.setItemAsync(CLIENT_DATA_KEY, JSON.stringify(user));

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      setClient(user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };

  // Función de cierre de sesión
  const logout = async () => {
    try {
      const refreshToken = await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
      
      if (refreshToken) {
        // Intentar invalidar el token en el servidor
        try {
          await axios.post(`${API_URL}/clients/logout`, { refreshToken });
        } catch (error) {
          // Ignorar errores al cerrar sesión en el servidor
          console.error("Error al cerrar sesión en el servidor:", error);
        }
      }
      
      // Limpiar almacenamiento local
      await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
      await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
      await SecureStore.deleteItemAsync(CLIENT_DATA_KEY);

      // Limpiar el header de autorización
      delete axios.defaults.headers.common["Authorization"];

      // Actualizar estado
      setClient(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, client, login, logout, refreshAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

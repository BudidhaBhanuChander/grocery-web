import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { FavoritesProvider } from "./context/FavoritesContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <FavoritesProvider>
                        <App />
                    </FavoritesProvider>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    </GoogleOAuthProvider>
);

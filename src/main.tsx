import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { FavoritesProvider } from "./context/FavoritesContext.tsx";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <AuthProvider>
            <CartProvider>
                <FavoritesProvider>
                    <App />
                </FavoritesProvider>
            </CartProvider>
        </AuthProvider>
    </BrowserRouter>
);

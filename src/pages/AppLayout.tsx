import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";

const AppLayout = () => {
    const location = useLocation();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(false);
        const t = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(t);
    }, [location.pathname]);

    return (
        <>
            <Banner />
            <Navbar />
            <main className={`min-h-screen transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0"}`}>
                <Outlet />
            </main>
            <Footer />
            <CartSidebar />
        </>
    );
};

export default AppLayout;

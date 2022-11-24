import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(
        () => {
            window.scrollTo(0, 0);
        },
        [pathname]
    );

    return null;
}

// Replace la fenetre au top en cas de changement de page avec router, ne se voit pas sur cette page car trop petite

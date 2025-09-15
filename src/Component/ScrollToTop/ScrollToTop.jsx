import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 👈 Jab route change hoga to upar scroll ho jao
  }, [pathname]);

  return null;
}

export default ScrollToTop;

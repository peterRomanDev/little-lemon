// hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (pathname === '/booking') {
        window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}
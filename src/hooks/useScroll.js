// hooks
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScroll() {
  // a hook that controlls specific scrolling behavior throughout the pages

  const { pathname, hash } = useLocation();

  useEffect(() => {
    // reacting to when the hash or pathname first changes in the URL

    if (hash) {
      // when the hash changes
      const section = document.querySelector(hash);

      if (section) {
        // scroll the section corresponding with the hash into view
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (pathname === '/booking' || pathname === '/booking-confirmed' || pathname === '/credits') {
      // when the pathname changes
      // scroll the newly loaded page to the top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}
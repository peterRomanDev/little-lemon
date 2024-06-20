// components
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

// hooks
import { useEffect, useState } from 'react';
import { usePageContent } from '../hooks/usePageContent';

// style
import './Header.css';

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { links, headerDets } = usePageContent();

  const handleBackdropClick = () => setIsOpen(false);

  // the screen is considered small if it is smaller than 768px (Mobile view)
  // the window width is reevaluated everytime the window is resized
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    const determinteScreenWidth = () => screenWidth < 768 ? setIsSmallScreen(true) : setIsSmallScreen(false);
    const handleNavBarClosing = () => {
      // if the mobile nav is open and the window is resized to the point that it is no longer a Mobile view, the mobile nav closes and the document becomes scrollable again
      if (isOpen && !isSmallScreen) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize)
    determinteScreenWidth();
    handleNavBarClosing();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth, isOpen, isSmallScreen]);

  return (
    <header className="header bg-white">
      {/* a dark background covers the whole screen when the menu icon is clicked and disappears when it is clicked again */}
      {isOpen && <div role="button" className="bg-dark" onClick={handleBackdropClick}></div>}
      <div className="img-frame">
        <Link className="a logo" to={links && links.home.href}>
          <img
            className="img"
            src={headerDets && headerDets.imgs.logo.src}
            alt={headerDets && headerDets.imgs.logo.alt}
          />
        </Link>
      </div>
      {/* display a hamburger menu icon and a dropdown navigation if the width of the window is less than 768px (Mobile) */}
      {/* display regular navigation if the width of the window is at least 768px (Tablet or Desktop) */}
      {isSmallScreen ? (
        <MobileNav links={headerDets && headerDets.links} isOpenNav={isOpen} isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Nav links={headerDets && headerDets.links} />
      )}
    </header>
  );
}

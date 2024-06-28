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
  // a header consisting of the restaurant logo and a navigation

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { links, headerDets } = usePageContent();

  const handleBackdropClick = () =>{
    // a function to close the navigation on small screens when the dark backdrop is clicked
    setIsOpen(false);
  };

  useEffect(() => {
    // used to determine screen size

    // the screen is considered small if it is smaller than 768px (Mobile view)
    // the window width is reevaluated everytime the window is resized
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

  useEffect(() => {
    // used to add/remove highlighting to nav-links on both screens

    const linksHome = document.querySelectorAll('.a-home');
    const linksMenu = document.querySelectorAll('.a-menu');
    const linksAbout = document.querySelectorAll('.a-about');
    const linksReservation = document.querySelectorAll('.a-reservation');
    const sections = document.querySelectorAll('.page-section');

    const sectionIsOnScreen = sections => {
      // checking which section appears on screen

      sections.forEach(section => {
        // defining how much of a section needs to be visible in order to react to it
        const visibleSectionPart = 300;

        if (
          // if the defined visible part of the section with the id of 'home' appears on screen
          section.target.id === 'home' && section.isIntersecting && section.intersectionRect.height >= visibleSectionPart
        ) {
          // highlight nav-link 'Home', remove highlighting from the remaining nav-links
          linksMenu.forEach(link => link.classList.remove('a-active'));
          linksAbout.forEach(link => link.classList.remove('a-active'));
          linksReservation.forEach(link => link.classList.remove('a-active'));
          linksHome.forEach(link => link.classList.add('a-active'));
        } else if (
          // if the defined visible part of the section with the id of 'menu' appears on screen
          section.target.id === 'menu' && section.isIntersecting && section.intersectionRect.height >= visibleSectionPart
        ) {
          // highlight nav-link 'Menu', remove highlighting from the remaining nav-links
          linksHome.forEach(link => link.classList.remove('a-active'));
          linksAbout.forEach(link => link.classList.remove('a-active'));
          linksReservation.forEach(link => link.classList.remove('a-active'));
          linksMenu.forEach(link => link.classList.add('a-active'));
        } else if (
          // if the defined visible part of the section with the id of 'about', 'testimonials', or 'reserve-a-table' appears on screen
          (section.target.id === 'about' && section.isIntersecting && section.intersectionRect.height >= visibleSectionPart) ||
          (section.target.id === 'testimonials' && section.isIntersecting && section.intersectionRect.height >= visibleSectionPart) ||
          (section.target.id === 'reserve-a-table' && section.isIntersecting && section.intersectionRect.height >= visibleSectionPart)
        ) {
          // highlight nav-link 'About', remove highlighting from the remaining nav-links
          linksHome.forEach(link => link.classList.remove('a-active'));
          linksMenu.forEach(link => link.classList.remove('a-active'));
          linksReservation.forEach(link => link.classList.remove('a-active'));
          linksAbout.forEach(link => link.classList.add('a-active'));
        } else if (
          // if the defined visible part of the section with the id of 'booking', 'booking-form', or 'booking-success' appears on screen
          (section.target.id === 'booking' && section.isIntersecting && section.intersectionRect.height >= visibleSectionPart) ||
          (section.target.id === 'booking-form' && section.isIntersecting && section.intersectionRect.height >= visibleSectionPart) ||
          (section.target.id === 'booking-success' && section.isIntersecting && section.intersectionRect.height >= visibleSectionPart)
        ) {
          // highlight nav-link 'Reserve a Table', remove highlighting from the remaining nav-links
          linksHome.forEach(link => link.classList.remove('a-active'));
          linksMenu.forEach(link => link.classList.remove('a-active'));
          linksAbout.forEach(link => link.classList.remove('a-active'));
          linksReservation.forEach(link => link.classList.add('a-active'));
        }
      });
    };

    const handleScroll = () => {
      // whenever the page is scrolled, it is evaluated which section appears on screen
      const observer = new IntersectionObserver(sectionIsOnScreen);
      sections.forEach(section => observer.observe(section));
    };

    // initially, when the page is loaded, it is evaluated which section appears on screen
    const observer = new IntersectionObserver(sectionIsOnScreen);
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [screenWidth, isOpen]);

  return (
    <header className="header bg-white">
      {/* a dark background covers the whole screen when the menu icon is clicked and disappears when it is clicked again */}
      {isOpen && <div aria-label="On Click" className="bg-dark" onClick={handleBackdropClick}></div>}
      <div className="img-frame">
        <Link className="logo" to={links && links.home.href}>
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

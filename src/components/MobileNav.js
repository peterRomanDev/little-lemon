// components
import { Link } from 'react-router-dom';

// style
import './MobileNav.css';

// hooks
import { useEffect } from 'react';
import usePageContent from '../hooks/usePageContent';

export default function MobileNav({ links, isOpen, setIsOpen }) {
    // a navigation for Mobile viewport

    const { scrollIntoView } = usePageContent();

    const handleBtnMenuClick = () => {
        // the hamburger menu icon is clicked

        // if the navigation is open, close it
        // if the navigation is closed, open it
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    const handleLinkClick = href => {
        // a nav-link is clicked

        // if the navigation is open, close it
        // if the navigation is closed, open it
        isOpen ? setIsOpen(false) : setIsOpen(true);

        // the section corresponding to the nav-link is scrolled into view
        scrollIntoView(href);
    };

    useEffect(() => {
        // if the navigation is open, disable scrolling
        // if the navigation is closed, enable scrolling
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    }, [isOpen]);

  return (
    <div className="mobile-nav">
        {/* hamburger icon */}
        <button className="btn-menu-icon" onClick={handleBtnMenuClick}>{isOpen ? 'X' : '☰'}</button>
        {/* nav links */}
        {isOpen && (
            <nav className="nav">
                <ul className="list">
                    {links && links.map(link => (
                        <li key={link.title}>
                            <Link to={link.href} onClick={() => handleLinkClick(link.href)} className={`a a-${link.className} qwe`} >{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )}
    </div>
  );
}

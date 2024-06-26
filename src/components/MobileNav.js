// hooks
import { useEffect } from 'react';

// style
import './MobileNav.css';
import { Link } from 'react-router-dom';

export default function MobileNav({ links, isOpen, setIsOpen }) {
    // a navigation for Mobile viewport

    const handleClick = () => isOpen ? setIsOpen(false) : setIsOpen(true);

    useEffect(() => {
        // if the navigation is open, disable scrolling
        // if the navigation is closed, enable scrolling
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    }, [isOpen]);

  return (
    <div className="mobile-nav">
        {/* hamburger icon */}
        <button className="btn-menu-icon" onClick={handleClick}>{isOpen ? 'X' : '☰'}</button>
        {/* nav links */}
        {isOpen && (
            <nav className="nav">
                <ul className="list">
                    {links && links.map(link => (
                        <li key={link.title}>
                            <Link to={link.href} onClick={handleClick} className={`a a-${link.className} qwe`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        )}
    </div>
  );
}

// hooks
import { useEffect } from 'react';

// style
import './MobileNav.css';
import { Link } from 'react-router-dom';

export default function MobileNav({ links, isOpen, setIsOpen }) {
    const handleClick = () => isOpen ? setIsOpen(false) : setIsOpen(true);

    useEffect(() => {
        isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    }, [isOpen]);

  return (
    <div className="mobile-nav">
        <button className="a btn-menu-icon bg-yellow" onClick={handleClick}>{isOpen ? 'X' : '☰'}</button>
        {isOpen && (
            <nav className="nav">
                <ul className="list">
                    {links && links.map(link => <li className="li bg-white" key={link.title}><Link to={link.href} onClick={handleClick} className="a">{link.title}</Link></li>)}
                    {/* {links && links.map(link => <li className="li bg-white" key={link.title}><a href={link.href} className="a">{link.title}</a></li>)} */}
                </ul>
            </nav>
        )}
    </div>
  );
}

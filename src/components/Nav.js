// components
import { Link } from 'react-router-dom';

// style
import './Nav.css';

// hooks
import usePageContent from '../hooks/usePageContent';

export default function Nav({ links }) {
  // a navigation for Tablet and Desktop viewports

  const { scrollIntoView } = usePageContent();

  return (
    <nav className="nav-large-screen">
      {/* nav links */}
      <ul className="list">
        {links && links.map(link => (
          <li key={link.title}>
            {/* when a nav-link is clicked, the section corresponding to the nav-link is scrolled into view */}
            <Link to={link.href} className={`a a-${link.className}`} onClick={() => scrollIntoView(link.href)} >{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

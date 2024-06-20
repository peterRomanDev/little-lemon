// style
import './Footer.css';

// hooks
import { usePageContent } from "../hooks/usePageContent";

// components
import { Link } from 'react-router-dom';

export default function Footer() {
  const { footerDets } = usePageContent();

  return (
    <footer className="footer bg-yellow">
      <div className="img-frame bg-gray">
        <img
          className="img"
          src={footerDets && footerDets.img.src}
          alt={footerDets && footerDets.img.alt}
        />
      </div>
      <div className="cols">
        {footerDets && footerDets.cols.map(col => <Column key={col.title} col={col} />)}
      </div>
    </footer>
  );
}

function Column({ col }) {
  return (
    <div className="col text-black">
      <h3 className="h3">{col && col.title}</h3>
      {col && col.links && (
        <nav>
          <ul className="list">
            {col.links.map(link => <li key={link.href}><Link to={link.href} className="a text-green">{link.title}</Link></li>)}
          </ul>
        </nav>
      )}
      {col && col.ps && (
        <ul className="list">
          {col.ps.map(p => <li key={p.text} className="p text-black"><p>{p.text}</p></li>)}
        </ul>
      )}
    </div>
  );
}

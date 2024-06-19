// style
import './Footer.css';

// hooks
import { usePageContent } from "../hooks/usePageContent";

export default function Footer() {
  const { footerDets } = usePageContent();

  return (
    <footer className="footer bg-green">
      <div className="img-frame bg-gray">
        <img className="img" src={footerDets.img.src} alt={footerDets.img.alt} />
      </div>
      <div className="cols">
        {footerDets.cols.map(col => <Column key={col.title} col={col} />)}
      </div>
    </footer>
  );
}

function Column({ col }) {
  return (
    <div className="col text-black">
      <h3 className="h3">{col.title}</h3>
      <ul className="list">
        {col.links ? (
          col.links.map(link => (
            <li className="p" key={link.href}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))
        ) : (
          col.ps.map(p => (
            <li key={p.text}>
              <p className="p">{p.text}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

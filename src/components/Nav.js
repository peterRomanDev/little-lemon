// style
import './Nav.css';

export default function Nav({ links }) {

  return (
    <nav>
      <ul className="list">
        {links && links.map(link => <li key={link.title}><a href={link.href} className="a">{link.title}</a></li>)}
      </ul>
    </nav>
  );
}

// components
import Nav from './Nav';

// images
import logo from '../images/Logo.svg';

export default function Header() {
  return (
    <header>
      <img src={logo} />
      <Nav />
    </header>
  );
}

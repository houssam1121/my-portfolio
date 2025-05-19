import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <h1 className="logo">Houssam Masri</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

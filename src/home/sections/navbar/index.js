import "./main.css";

function Navbar() {
  return (
    <nav>
      <div className="nav__logo"></div>
      <div className="nav__menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Feedback</li>
          <li>FAQ</li>
          <li>
            <a href="/register" className="nav__button">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;

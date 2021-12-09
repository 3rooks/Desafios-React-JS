const Header = () => (
  <header>
    <h1>WCYD</h1>
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      header {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: black;
        padding: 0 5rem 0 5rem;
      }
      h1 {
        color: white;
        margin-top: 0.5rem;
        font-family: Georgia, "Times New Roman", Times, serif;
        letter-spacing: 3px;
      }
      nav {
        display: flex;
        width: 50%;
      }
      .nav-list {
        width: 100%;
        display: flex;
        justify-content: space-around;
        list-style: none;
      }
      .nav-item {
        position: relative;
        overflow: hidden;
      }
      .nav-item::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2.5px;
        width: 100%;
        background-color: #870909;
        transform: translatex(-100%);
        transition: transform 0.3s;
      }
      .nav-item:hover::after {
        transform: translatex(0);
      }
      .nav-link {
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 1.5px;
      }
    `}</style>
  </header>
);

export default Header;

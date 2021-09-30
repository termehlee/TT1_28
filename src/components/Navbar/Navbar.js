import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/server";

const Navbar = () => {
  const [navs] = useState([
    { link: "/", value: "Home", id: 1 },
    { link: "/cart", value: "Shopping Cart", id: 3 },
    { link: "/register", value: "Register", id: 2 },
    { link: "/login", value: "Login", id: 4 },
    { link: "/orders", value: "Orders", id: 4 },
  ]);
  return (
    <div className="navbar">
      <nav>
        <ul className="links">
          {navs.map((nav) => (
            <li key={nav.id}>
              <Link to={nav.link}>{nav.value}</Link>
            </li>
          ))}
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

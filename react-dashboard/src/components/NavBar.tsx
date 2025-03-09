import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

interface NavBarProps {
  brandName: string;
  imageSrc: string;
  navItems?: { name: string; path: string }[];
}

const NavBar = ({ brandName, imageSrc, navItems }: NavBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={imageSrc}
            alt="Brand Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          <span className="fw-bold ms-2">{brandName}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse align-items-start d-flex flex-column flex-md-row"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems?.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link ${
                    index === selectedIndex ? "active fw-bold" : ""
                  }`}
                  to={item.path}
                  onClick={() => setSelectedIndex(index)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
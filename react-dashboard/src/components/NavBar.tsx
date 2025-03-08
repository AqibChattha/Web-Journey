import { useState } from "react";
import "../App.css";

interface NavBarProps {
  brandName: string;
  imageSrc: string;
  navItems?: string[];
}

const NavBar = ({ brandName, imageSrc, navItems }: NavBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrc}
            alt="C"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          <span className="fw-bold ms-2">{brandName}</span>
        </a>
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
            {navItems?.map((items, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${
                    index === selectedIndex ? "active fw-bold" : ""
                  }`}
                  href="#"
                  onClick={() => setSelectedIndex(index)}
                >
                  {items}
                </a>
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

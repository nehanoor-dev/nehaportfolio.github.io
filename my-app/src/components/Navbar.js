import react, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mynav">
          <Link
            className="navbar-brand"
            activeClass="active"
            to="#"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ fontFamily: "Brush Script MT", fontSize: "30px" }}
          >
            {"< Neha Noor />"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul
              className="navbar-nav mx-auto"
              style={{ fontFamily: "Lucida Console" }}
            >
              <li className="nav-item active mr-3 navLinks">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Me <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item mr-3 navLinks">
              <Link
                  className="nav-link"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item mr-3 navLinks">
              <Link
                  className="nav-link"
                  activeClass="active"
                  to="edu"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Education
                </Link>
              </li>
              <li className="nav-item mr-3 navLinks">
              <Link
                  className="nav-link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Work Experience
                </Link>
              </li>
              <li className="nav-item mr-3 navLinks">
              <Link
                  className="nav-link"
                  activeClass="active"
                  to="proj"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item mr-3 navLinks">
              <Link
                  className="nav-link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Hire Me as a Freelancer
                </Link>
              </li>
              <li className="nav-item mr-3 navLinks">
              <Link
                  className="nav-link"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

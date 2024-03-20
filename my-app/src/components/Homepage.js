import React, { Component, createContext } from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import "./Homepage.css";
import home from "../images/home.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <section id="about">
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm desc">
              <h2 className="mt-5">Hi all, I'm Neha</h2>
              <h5 className="mt-5">
                A passionate Full Stack Software Developer 🚀 having an
                experience of building Web and Mobile applications with
                JavaScript / Reactjs / Nodejs / React Native and some other cool
                libraries and frameworks.
              </h5>
              <div className="links mt-5">
                <FaGithub size={30} className="mr-1" />
                <CiLinkedin size={30} className="mr-1" />
                <MdOutlineMailOutline size={30} className="mr-1" />
                <CiFacebook size={30} className="mr-1" />
                <FaInstagram size={30} className="mr-1" />
              </div>

              <div className="buttons mt-5">
                <button className="mybtn mr-2">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    CONTACT ME
                  </Link>
                </button>
                <button className="mybtn mr-2">
                  <a
                  target="_blank"
                  style={{listStyle:"none",textDecoration: "none", color:"white"}}
                   href="https://drive.google.com/file/d/1JT9LCcUKIrygDnFa9NXeZlI_RGvlJ1qd/view?usp=sharing">
                    SEE MY RESUME
                  </a>
                </button>
              </div>
            </div>
            <div className="col-lg">
              <img
                src={home}
                height={"500px"}
                className="d-none d-sm-none d-md-none d-lg-block"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Homepage;

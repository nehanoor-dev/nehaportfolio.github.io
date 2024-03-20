import React, { Component } from "react";
import "./projects.css";
import { GoProjectSymlink } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { FaEyeDropper } from "react-icons/fa";


class Projects extends Component {
  state = {};
  render() {
    return (
      <section className="proj">
        <div>
          <h1 className="mt-5">Projects</h1>
          <div className="project">
            <div className="row">
              <div className="col-sm pro">
                <h5>
                  <GoProjectSymlink size={40} className="mr-5"/> Mern-Ecommerce-Application
                </h5>
                <p>
                  🚀 An ecommerce store built with MERN stack, and utilizes
                  third party API's. This ecommerce store enable three main
                  different flows or implementations: Buyers browse the store
                  categories, products and brands Sellers.
                </p>
                <div>
                <CiShare2 size={20} className="mr-5 ic"/>
                <FaEyeDropper size={20}className="ic"/>
                </div>
              </div>
              <div className="col-sm pro">
              <h5>
                  <GoProjectSymlink size={40} className="mr-5" /> Mern-Ecommerce-Application
                </h5>
                <p>
                  🚀 An ecommerce store built with MERN stack, and utilizes
                  third party API's. This ecommerce store enable three main
                  different flows or implementations: Buyers browse the store
                  categories, products and brands Sellers.
                </p>
                <div>
                <CiShare2 size={20} className="mr-5 ic"/>
                <FaEyeDropper size={20} className="ic"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm pro">
              <h5>
                  <GoProjectSymlink size={40} className="mr-5"/> Mern-Ecommerce-Application
                </h5>
                <p>
                  🚀 An ecommerce store built with MERN stack, and utilizes
                  third party API's. This ecommerce store enable three main
                  different flows or implementations: Buyers browse the store
                  categories, products and brands Sellers.
                </p>
                <div>
                <CiShare2 size={20} className="mr-5 ic"/>
                <FaEyeDropper size={20} className="ic"/>
                </div>
              </div>
              <div className="col-sm pro">
              <h5>
                  <GoProjectSymlink size={40} className="mr-5"/> Mern-Ecommerce-Application
                </h5>
                <p>
                  🚀 An ecommerce store built with MERN stack, and utilizes
                  third party API's. This ecommerce store enable three main
                  different flows or implementations: Buyers browse the store
                  categories, products and brands Sellers.
                </p>
                <div>
                <CiShare2 size={20} className="mr-5 ic"/>
                <FaEyeDropper size={20} className="ic"/>
                </div>
              </div>
            </div>
          </div>
          <button className="mybtn">MORE PROJECTS</button>
        </div>
      </section>
    );
  }
}

export default Projects;

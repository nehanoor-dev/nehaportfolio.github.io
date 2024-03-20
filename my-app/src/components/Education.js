import React, { Component } from "react";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png"
import "./Education.css";
class Education extends Component {
  state = {};
  render() {
    return (
      <section className="edu">
        <div className="align-left">
          <h1>Education</h1>
          <img src={logo} height={'100vh'}/>
          <h5 className="mt-4">University Of Education</h5>
          <h6>Master of Science in Information Technology</h6>
          <p>March 2021 - December 2023</p>
          <p>Here's a preveiw of my FYP:</p>
          <p>
          ⚡ I developed a full-fledged e-commerce web application utilizing MERN
            stack technologies. 
          </p>
          <p>⚡ This involved building the application's
            frontend with React.js, managing the backend with Node.js and
            Express.js, designing and implementing the database using MongoDB.
            </p>
            <p>⚡ And integrating various features including user authentication,
            product management, shopping cart functionality, and payment
            processing. </p>
            <p>⚡ The project showcased my proficiency in modern web
            development technologies and my ability to create scalable and
            efficient solutions in a collaborative environment.</p>
        </div>
        <div className="align-left">
           <img src={logo2} height={'100vh'}/>
          <h5 className="mt-5">NFTP (National Freelancing Training Program)</h5>
          <h6>Technical Domain (Web Development)</h6>
          <p>August 2021 - December 2021</p>
          <p>I learned follwing skills in this course: </p>
          <p>
          ⚡ Proficiency in creating dynamic and interactive user interfaces using modern frontend libraries/frameworks like React.js.
          </p>
          <p>⚡ Understanding of server-side development with a focus on Node.js and Express.js.
            </p>
            <p>⚡ Hands-on experience building RESTful APIs for seamless communication between the frontend and backend. </p>
            <p>⚡ Knowledge of database management systems, with a focus on MongoDB for NoSQL data storage.</p>
            <p>⚡ Proficient in developing websites using WordPress, including theme customization and plugin integration.</p>
            <p>⚡ Practical experience with Git for version control, including branching, merging, and collaborative workflows.</p>
            <p>⚡ Ability to design and implement responsive web applications that adapt to various screen sizes and devices.</p>


        </div>
      </section>
    );
  }
}

export default Education;

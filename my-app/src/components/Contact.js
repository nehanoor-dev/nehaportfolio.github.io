import React, { Component } from 'react';
import neha from '../images/neha.png';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import './contact.css';
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <section className='contact'>
                <div className='row mt-5'>
                    <div className='col-lg-8'>
                        <h2>Reach Out to me!</h2>
                <h5>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</h5>
                <p>Let's connect. Email me at <a>nehanoor154@gmail.com</a></p>
                <div className="links mt-5">
            <FaGithub size={30} className="mr-1 icon2"/>
            <CiLinkedin  size={30} className="mr-1 icon2"/>
            <MdOutlineMailOutline  size={30} className="mr-1 icon2"/>
            <CiFacebook  size={30} className="mr-1 icon2"/>
            <FaInstagram size={30} className="mr-1 icon2" />
            </div>
            
                </div>
                    <div className='col-lg-4 mt-5  '>
                        <img src={neha} height={'250px'} width={'250px'} className='neha'/>
                    </div>
                </div>
                
            </section>
        );
    }
}
 
export default Contact;
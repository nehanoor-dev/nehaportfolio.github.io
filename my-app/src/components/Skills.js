import React, { Component } from 'react';
import skill from '../images/skill.jpg'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import './skills.css'

class Skills extends Component {
    state = {  } 
    render() { 
        return (
            <section className='skills' id='skills'>
                <div className='container'>
                 <div className='row'>
                    <div className='col-lg'>
                        <img src={skill} className="d-none d-sm-none d-md-none d-lg-block" />
                    </div>
                    <div className='col-sm'>
                        <h2
                        style={{fontFamily:'Cursive',font: "50px"}}
                        >What I do</h2>
                        <div className='mySkills mt-5'>
                        <FaHtml5 size={70} className='mr-2 icon'/>
                        <IoLogoCss3 size={70} className='mr-2 icon'/>
                        <TbBrandJavascript size={70} className='mr-2 icon'/>
                        <FaReact size={70} className='mr-2 icon'/>
                        <FaNode size={70} className='mr-2 icon'/>
                        <SiMongodb size={70} className='mr-2 icon'/>

                        </div>
                        <div className='mt-5'
                        style={{fontFamily: 'Cursive', color:'grey'}}
                        >
                        <p className='mt-5'>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</p>
                         <p>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</p>
                         <p>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</p>
                         </div>
                    </div>
                 </div>
                </div>
            </section>
        );
    }
}
 
export default Skills;
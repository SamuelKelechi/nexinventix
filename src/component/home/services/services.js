import React from 'react'
import { FaCode, FaRobot } from "react-icons/fa";
import { Link } from 'react-router-dom';

const services = () => {
  return (
    <div className='Services-Container'>
        <h2 className='slide-in-left'>Our Services</h2>
        <div className='Services-Container-Wrapper'>
            <div className='Services-Contents'>
                <FaCode size={60}/>
                <h3 className='Services-Contents-Header'>Software Development</h3>
                <p>We specialize in crafting software solutions that empower businesses to thrive in the digital age. With innovation at our core and expertise at our fingertips, we’re dedicated to delivering exceptional results that drive success, set new standards and revolutionize digital experiences worldwide. Provide us with the details, and we'll discover the optimal solutions for your digital needs.</p>
                <Link to='/contact' className='Nav-link'><button className='nav-contact-button'>Contact us</button></Link>
            </div>
            <div className='Services-Contents'>
                <FaRobot size={60} className='robot-hold'/>
                <h3 className='Services-Contents-Header'>School of Coding & Robotics</h3>
                <p>Empowering the next generation of innovators, our School of Coding & Robotics is designed to equip young minds with the skills to shape the future. We provide hands-on training in coding, robotics, and problem-solving, preparing students to excel in a tech-driven world. Through immersive learning experiences, mentorship, and real-world projects, we inspire creativity, critical thinking, and a passion for technology.</p>
                <Link to='/learn' className='Nav-link'><button className='nav-contact-button'>Learn More</button></Link>
            </div>
        </div>
    </div>
  )
}

export default services
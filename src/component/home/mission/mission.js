import React from 'react'
import '../../../App.css'
import './mission.css'
import {Link} from 'react-router-dom'

const mission = () => {
  return (
    <div className='mission-holder'>
        <div className='mission-holder-wrapper'>
            <h2 className="slide-in-left" style={{textAlign:'center'}}>Our Mission at Nexinventix</h2>
            <p>
                At Nexinventix Technology, we're not just another digital solutions provider. We are your partners in digital transformation. We're passionate about crafting tailored application solutions that propel businesses and individuals towards digital excellence. With a keen focus on innovation and expertise, we're committed to delivering results that exceed expectations and drive success in the digital space.
            </p>
            <Link to='/about' className='Nav-link'><button className='nav-contact-button'>Learn More</button></Link>
        </div>
    </div>
  )
}

export default mission
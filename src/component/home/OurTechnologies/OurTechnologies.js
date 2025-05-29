import React from 'react'
import Marquee from "react-fast-marquee";
import Logo1 from '../../assets/javascript.svg';
import Logo2 from '../../assets/react.svg';

const OurTechnologies = () => {
  return (
    <div className='OurTechnologies-Container'>
      <h2 className='slide-in-left'>Our Key Technologies</h2>
      <Marquee speed={50} loop={0} gradient={false} direction="left">
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-line.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
        <div className='Techologies-Logos-Holder'>   
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" alt='Tech_Logo' className='Techologies-Logos'/>
        </div>
      </Marquee>
    </div>
  )
}

export default OurTechnologies
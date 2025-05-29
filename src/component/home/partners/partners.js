import React from 'react'
import '../../../App.css'
import Dreamworks from './logos/dreamworks.png'
import Marathon from './logos/marathon.gif'
import EDHF from './logos/edhf.png'
import SSAP from './logos/ssap.png'
import Jsmart from './logos/jsmart.png'
import UTAC from './logos/utac.png'
import ESEP from './logos/esep.png'



const partners = () => {
  return (
    <div className='partners-container'>
      <div className='partners-wrapper'>
        <h2 className="slide-in-left" style={{color:'#333', textAlign:'center', marginBottom:'5px'}}>Our Growing Network of Clients</h2>
        
        <div className='partners-logo-holder'>
          <img src={Jsmart} alt='Partner Logo' className='client-logo2'/>
          <img src={Dreamworks} alt='Partner Logo' className='client-logo'/>
          <img src={SSAP} alt='Partner Logo' className='client-logo3'/>
          <img src={Marathon} alt='Partner Logo' className='client-logo1'/>
          <img src={EDHF} alt='Partner Logo' className='client-logo2'/>
          <img src={UTAC} alt='Partner Logo' className='client-logo4'/>
          <img src={ESEP} alt='Partner Logo' className='client-logo1'/>
        </div>
      
      </div>
    </div>
  )
}

export default partners
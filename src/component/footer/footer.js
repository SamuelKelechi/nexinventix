import '../../App.css'
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter, FaThreads, FaTiktok, FaYoutube } from "react-icons/fa6";
import Logo from '../assets/nex-logo.png'
const Footer = () => {
    return (
      <footer className="footer">
        <div className='Footer-Content'>
          <img src={Logo} alt='Logo' width={120}/>
          <p className='Logo-Tagline'>Building Solutions, Crafting Skills...</p>
          <div className='Footer-Links'>
            <a href="https://www.linkedin.com/company/nexinventix-technology/"><FaLinkedin size={18} color="white" /></a>
            <a href="https://www.facebook.com/share/19hdTj1hyJ/?mibextid=wwXIfr"><FaFacebook size={18} color="white" /></a>
            <a href="https://www.instagram.com/nexinventix_technology"><FaInstagram size={18} color="white" /></a>
            <a href="https://x.com/nexinventix?s=11"><FaXTwitter size={18} color="white" /></a>
            <a href="https://www.threads.net/@nexinventix_technology?invite=0"><FaThreads size={18} color="white" /></a>
            <a href="https://www.tiktok.com/@nexinventix"><FaTiktok size={18} color="white" /></a>
            <a href="https://youtube.com/@nexinventixtechnology?si=j4p8TS8D02kdwjj5"><FaYoutube size={18} color="white" /></a>
          </div>
        </div>
        <p>© 2025 Nexinventix. All rights reserved.</p>
      </footer>
    );
  };

export default Footer
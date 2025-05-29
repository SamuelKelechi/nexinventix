import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
      <section className="hero fade-in">
        <h1 className="hero-title slide-in-top">Revolutionizing Software Development</h1>
        <p className="hero-subtitle slide-in-bottom">Bringing innovative solutions to your digital challenges.</p>
        <Link to='/contact'><button className="cta-button pulse">Get Started</button></Link>
      </section>
    );
  };

  export default HeroSection;
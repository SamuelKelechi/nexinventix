import { Settings, Layers, Users } from "lucide-react";


const Features = () => {
    const features = [
      { title: 'Custom Solutions', description: 'Tailored software to meet your business needs.', icon: <Settings size={30} color="#ff6600" />  },
      { title: 'Scalable Architecture', description: 'Build systems that grow with your business.', icon: <Layers size={30} color="#ff6600" /> },
      { title: 'Expert Team', description: 'Each member of our team has years of experience delivering top-notch solutions.', icon: <Users size={30} color="#ff6600" /> }
    ];
  
    return (
      <section className="features">
        <h2 className="slide-in-left">Our Features</h2>
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature zoom-in" key={index}>
              <h3 className="feature-title">{feature.title}{"\u00A0\u00A0\u00A0"} {feature.icon}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Features
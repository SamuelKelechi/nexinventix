import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef();

  const sendEmail = (e) => {
        e.preventDefault();
    
        const serviceId = 'service_hr7fc7to';
        const templateId = 'template_y55aa9e';
        const publicKey = 'dZ0hSh6xkfevJAlBb'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Dare Ojepe',
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!', response.statusText);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        })
        .catch((error) => {
            console.log('Error Sending Email', error.text);
        });
      };

      const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Message Sent",
            icon: "success",
            confirmButtonText: "OK",
          });
    }
    

  return (
    <div className="contact-page">
      <div className="contact-hero">
      </div>
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have any questions? We'd love to hear from you!</p>
        <div className="info-item"><FaMapMarkerAlt /> 26 Prince Fadina Street,</div>
        <div className="info-item">Olodi-Apapa, Lagos, Nigeria </div>
        <div className="info-item"><FaPhone /> +234 9064728676</div>
        <div className="info-item"><FaEnvelope /> nexinventix@gmail.com</div>
      </div>
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" name="subject" placeholder="Message Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          <textarea name="message" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

          {name && email && subject && message ? (
          <button className="contact-button" value="Send" onClick={showAlert}>Submit</button>):(<button className="contact-button" style={{backgroundColor:'grey'}}>Submit</button>)}
        </form>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=Nexinventix+Technology&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" onerror="handleMapError(this)" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contact;

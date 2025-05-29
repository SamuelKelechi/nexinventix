import React from "react";
import "./about.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const About = () => {
  const values = [
    {
      Val: "Innovation",
      content:
        "We embrace creativity, curiosity, and continuous learning to stay at the forefront of digital innovation.",
      color: "#ef7c34",
      index: 1,
      color1: "#ef7c34",
      boxShadow: "",
    },
    {
      Val: "Collaboration",
      content:
        "We believe in the power of teamwork and partnership, working closely with our clients to co-create solutions that deliver value.",
      color: "#7580f9",
      index: 2,
      color1: "#ef7c34",
      boxShadow: "",
    },
    {
      Val: "Excellence",
      content:
        "We are committed to excellence in everything we do, from the quality of our work to the level of service we provide.",
      color: "#E9137A",
      index: 3,
      color1: "#ef7c34",
      boxShadow: "",
    },
    {
      Val: "Integrity",
      content:
        "We uphold the highest standards of integrity, honesty, and ethical conduct in all our interactions and decisions.",
      color: "#FB8500",
      index: 4,
      color1: "#ef7c34",
      boxShadow: "",
    },
    {
      Val: "Satisfaction",
      content: "Customers satisfaction is at the center of our services.",
      color: "#a2f900",
      index: 5,
      color1: "#ef7c34",
      boxShadow: "",
    },
  ];

  const BrandPersonality = [
    {
      theme: "Inspire Trust",
      content: "Through honest communication and reliable results.",
    },
    {
      theme: "Foster collaboration ",
      content: "By listening first and partnering closely with you.",
    },
    {
      theme: " Drive meaningful impact ",
      content: "With innovations that make a real difference.",
    },
  ];

  return (
    <div className="About">
      <div className="about-top">
        <h3>Who We Are</h3>
        <p>
          At Nexinventix Technology, we're not just another digital solutions
          provider. We are your partners in digital transformation. As the
          Next-Inventors, we're passionate about crafting tailored application
          solutions that propel businesses and individuals towards digital
          excellence. With a keen focus on innovation and expertise, we're
          committed to delivering results that exceed expectations and drive
          success in the digital realm.
        </p>
      </div>
      <div className="about-hero">
        <div className="image-small"></div>
        <div className="image-medium"></div>
        <div className="image-large"></div>
      </div>
      <div className="about-mission">
        <div className="about-mission-wrapper">
          <h4>Our Mission, Vision and Goal</h4>
          <div className="main-about-mission">
            <div className="left-about-mission">
              <div className="mission-box">
                <strong>Our Mission</strong>
                <p>
                  Our mission is to empower businesses and individuals with
                  high-quality applications, and digital solutions that elevate
                  their online presence and performance. By harnessing the
                  latest technologies and industry best practices, we strive to
                  unlock new opportunities and drive sustainable growth for our
                  clients.
                </p>
              </div>
              <div className="mission-box">
                <strong>Our Vision</strong>
                <p>
                  We envision a future where Nexinventix Technology is
                  synonymous with innovation and excellence in application
                  development and digital solutions.
                </p>
              </div>
              <div className="mission-box">
                <strong>Our Goal</strong>
                <p>
                  Over the next three years, we aim to deliver impactful digital
                  solutions by completing at least 50 high quality application. 
                  Each project will be meticulously crafted to address
                  the unique needs and aspirations of our clients, driving
                  tangible results and fostering long-term partnerships.
                </p>
              </div>
            </div>
            <div className="right-about-mission"></div>
          </div>
        </div>
      </div>
      <div className="why-choose">
        <div className="why-choose-wrapper">
          <h4>Our Corporate Value at Nexinventix Technology</h4>
          <div className="hold-why-cards">
            {values.map((e) => (
              <div
                className="why-card"
                style={{ boxShadow: "rgba(225, 102, 0, 0.9) 3px 4px 6px" }}
                key={e.index}
              >
                <div className="why-card-wrapper">
                  <div className="why-card-header">
                    <IoMdCheckmarkCircleOutline size={30} color={e.color1} />
                    <strong>{e.Val}</strong>
                  </div>
                  <div className="why-card-main">
                    <p>{e.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="brand-personality">
        <div className="brand-personality-wrapper">
          <h4>Our Brand Personality</h4>
          <p>
            At Nexinventix Technology, we blend sincerity and competence in
            everything we do. Integrity and transparency are at the heart of our
            approach because your success is our success. We don't just build
            technology; we build relationships rooted in professionalism,
            creativity, and a shared vision for growth. <br /> Our team combines
            technical expertise with creative problem-solving to deliver
            solutions that:
          </p>
          <div className="hold-circles">
            {BrandPersonality.map((e, i) => (
              <div className="circle">
                {/* <IoMdCheckmarkCircleOutline color="white" /> */}
                <div className="circle-wrapper">
                  <strong>{e.theme}</strong>
                  <p>{e.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
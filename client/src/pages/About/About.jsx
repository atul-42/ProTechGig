import React from 'react';
import './About.scss';

const About = () =>
{
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });

  return (
    <div className="about">
      <div className="center-box">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            ProTechGig is not just a freelancing platform; we are a thriving community of tech-savvy freelancers and businesses working together to unlock the power of innovation and technology.<br />
            Here is why you should get to know us:
          </p>
          <p>
            <ul>
              <li>Tech Enthusiasts Unite: We are a hub for tech enthusiasts, from developers to designers, cybersecurity experts, and more. Our platform is where their passion meets purpose.</li>
              <li>Connecting Talent and Opportunity: ProTechGig is all about matching top tech talent with businesses in need of their expertise. We bridge the gap between opportunity and skill.</li>
              <li>Global Network: We are not bound by borders. Our community spans the globe, connecting talent from different corners of the world with clients from various industries.</li>
              <li>Quality and Trust: We value quality, security, and trust. Our robust screening and vetting processes ensure that clients can rely on the freelancers they hire.</li>
              <li>Innovation and Creativity: We celebrate innovation and creativity. Our freelancers are not just task-doers; they are problem solvers and idea generators.</li>
              <li>Client-Centric Approach: Your success is our priority. We work closely with clients to understand their needs, goals, and expectations.</li>
              <li>Innovation Ecosystem: ProTechGig is more than just a freelancing platform; it  is an innovation ecosystem where talented individuals and businesses can collaborate, learn, and grow.</li>
              <li>Support and Community: We provide resources, support, and a thriving community where freelancers and clients can learn, grow, and succeed together.</li>
            </ul>
          </p>

          <p>
          Join the ProTechGig community today and experience a freelancing platform that is as passionate about technology as you are.
          <br />Whether you are a freelancer looking to take your career to the next level or a business seeking tech solutions, ProTechGig has you covered.
          <br />
          Contact Us to learn more about our platform and how we can help you achieve your goals in the tech world.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;




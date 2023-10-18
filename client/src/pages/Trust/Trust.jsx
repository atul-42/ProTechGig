import React from 'react';
import './Trust.scss';

const Trust = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
  return (
    <div className="Trust">
      <h1>Trust and Safety at ProTechGig</h1>
      <p>
      At ProTechGig, your trust and safety are our top priorities.<br />
      We are committed to creating a secure and trustworthy environment for both freelancers and clients.
      </p>
      
      <div className="section">
        <h2>1. Verification and Onboarding:</h2>
        <p>We take meticulous care when onboarding freelancers and clients to verify their identities and credentials.<br />
        This process helps us create a community of credible and trustworthy individuals.
        <ul>
          <li><b>Freelancer Verification: </b>
          Information on how we verify freelancers skills, work history, and professional background.</li>
          <li><b>Client Verification: </b>
          Details on how we verify clients to ensure they are genuine and have valid project requirements.</li>
        </ul>
        </p>
      </div>

        <div className="section">
        <h2>2. Secure Transactions:</h2>
        <p>ProTechGig offers secure payment methods for both clients and freelancers.<br />
        We use advanced encryption and security measures to safeguard your financial transactions.<br />
        <ul>
          <li><b>Payment Methods: </b>
          Information about the various payment methods we support and how to use them securely.
          </li>
        </ul>
        </p></div>

      <div className="section">
        <h2>3. Dispute Resolution </h2>
        <p>
        In the event of disagreements or disputes, we provide a structured and impartial dispute resolution process to ensure fair outcomes for all parties involved.
        <ul>
          <li><b>Dispute Mediation:</b>
          An overview of how our mediation process works to resolve conflicts between freelancers and clients.</li>
          <li><b>Escalation to ProTechGig: </b>
          Information on how to escalate a dispute for our team review and intervention when needed.</li>
        </ul>
        </p></div>

        <div className='section'>
            <h2>4. Community Guidelines:</h2>
            <p>We have established clear community guidelines to foster respectful and professional interactions on ProtechGig. Familiarizing yourself with these guidelines helps maintain a safe and pleasant environment for all users.
              <ul>
                <li><b>Code of Conduct:</b>
                An explanation of the code of conduct and how it applies to freelancers and clients.</li>
                <li><b>Reporting Violations:</b> 
                Instructions on how to report any violations of our community guidelines.</li>
              </ul>
            </p>
          </div>

          <div className='section'>
            <h2>5. Privacy and Data Security:</h2>
            <p>Learn about our stringent privacy policies and data security measures, ensuring your personal and financial information is handled with the utmost care.
              <ul>
                <li><b>Data Protection: </b> Information on how we protect your data and what you can do to enhance your account security.</li>  
                <li><b>Privacy Policy: </b> A link to our comprehensive privacy policy for detailed information.</li>
              </ul>
            </p>
          </div>

          <div className='section'>
            <h2>6. Support and Reporting:</h2>
            <p>If you ever feel uncomfortable, face issues, or have concerns about the safety of your interactions, we encourage you to reach out to our support team.
              <ul>
                <li><b>Contact Support: </b>
                Information on how to contact our support team for assistance with safety-related matters.</li>
                <li><b>Report a Concern: </b> 
                Instructions on how to report any issues, such as harassment or fraudulent activity.</li>
              </ul>
            </p>
          </div>

          <div className='section'>
            <h2> Conclusion </h2>
            <p>Your trust and safety are the foundation of ProTechGig success. We are dedicated to maintaining a secure and reputable platform for freelancers and clients. By following these guidelines and leveraging our support resources, you can have confidence in your freelancing journey with us.<br />
            Thank you for choosing ProTechGig as your freelancing destination.
            </p>
          </div>

    </div>
  );
};
export default Trust;
import React from 'react';
import './Terms.scss';

const Terms = () => {
  return (
    <div className="help">
      <h1></h1>
      <p>Welcome to ProTechGig, a platform connecting freelancers with clients seeking their services.<br />
        These Terms of Service (the Terms) govern your use of the ProTechGig website and <br />
        the services provided by ProTechGig (we us and our).<br />
        By accessing or using ProTechGig, you agree to abide by these Terms, so please read them carefully.</p>
      
      <div className="section">
        <h2>Acceptance of Terms</h2>
        <p>
        By accessing and using ProTechGig, you acknowledge that you have read, understood, and agree to these Terms.<br />
        If you do not agree with any part of these Terms, please do not use our services.<br />
        </p>
        <h2>Registration and Accounts</h2>
        <h2>1. Account Creation:</h2>
        <p>To use ProTechGigs services, you must create an account.<br />
        You are responsible for providing accurate and up-to-date information during the registration process.<br />
        You may only create one account.</p></div>

        <div className="section">
        <h2>2. Account Security:</h2>
        <p>You are responsible for safeguarding your account information, including your username and password.<br />
        You are solely responsible for any activity occurring on your account.<br />
        </p></div>

      <div className="section">
        <h2>4. Client Responsibilities</h2>
        <p>Provide clear project details and requirements.<br />
        Communicate effectively with freelancers.<br />
        Make payments promptly according to the agreed terms.<br />
        Respect the terms of service and rights of freelancers.
        </p></div>

        <div className='section'>
            <h2>5. Payments</h2>
            <p>Payments between clients and freelancers are processed through our payment system.<br />
            We charge a fee for this service, as described in our fee schedule.<br />
            ProTechGig is not responsible for any tax liabilities associated with payments.<br />
            Freelancers are responsible for paying their taxes.<br />
            </p></div>

    </div>
  );
};
export default Terms;
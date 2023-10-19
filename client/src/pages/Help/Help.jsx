import React from 'react';
import './Help.scss';

const Help = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
  return (
    <div className="Help">
      <h1>Help & Support</h1>
      <p>
      Welcome to ProTechGig Help and Support Center. <br />
      We are here to ensure that your freelancing experience is as smooth as possible.<br />
      Whether you are a freelancer or a client, our goal is to assist you in every way we can.<br />
      </p>

        <div className='section'>
            <h2>1. Frequently Asked Questions (FAQ):</h2>
            <p>Our FAQs section is designed to provide quick and straightforward answers to the most common questions our users have.<br />
            These questions are categorized for easy navigation, and we update them regularly to reflect the latest platform features and changes.<br />
            Here are some of the categories we cover:</p>
            <ul>
                <li><b>Getting Started: </b>
                Answers to questions about creating an account, setting up profiles, and understanding how Protechgig works.</li>
                <li><b>Job Posting: </b>
                Information on how to post jobs and hire freelancers.</li>
                <li><b>Working as a Freelancer:</b>
                Guidance for freelancers on how to find and complete projects, get paid, and maintain a good reputation on the platform.
                </li>
                <li><b>Payment and Billing: </b>
                Details about how payments work, including fees, withdrawals, and refunds.</li>
                <li><b>Account and Profile: </b>
                Information on managing your account, including changing passwords, updating contact information, and more.</li>
                <li><b>Disputes and Resolutions: </b> 
                Steps to take if you encounter issues with a project or another user on the platform.</li>
            </ul>
            </div>

        <div className='section'>
            <h2>2. For Connecting:</h2>
            <p>Sometimes, your issue or query may not be covered in our FAQs.<br />
            In such cases, do not hesitate to reach out to our dedicated support team.<br />
            We offer multiple contact options, such as email and a dedicated support form.<br />
            Our team is available 24/7 to assist you with any platform-related inquiries.<br />
            
            <ul>
                <li><b>Email: </b>info@protechgig.com</li>
                <li><b>Support Form: </b>www.protechgig.co.in/support</li>
            </ul>
            </p>
        </div>

        <div className='section'>
            <h2>3. Community Forms</h2>
            <p>Join our thriving community of freelancers and clients on the Protechgig Community Forums.<br />
            Share your experiences, seek advice, and interact with others who use the platform.<br />
            It is a great place to find tips, discuss issues, and learn from the collective wisdom of the Protechgig community.
            </p>
        </div>

        <div className='section'>
            <h2>4. Feedback and Suggestions:</h2>
            <p>We value your feedback, as it helps us improve our platform. If you have any suggestions, ideas, or concerns, please let us know through our feedback form.<br />
            Your input is essential in shaping the future of Protechgig.
            </p>
        </div>
        
        <div className='section'>
            <h2>5. Security and Safety:</h2>
            <p>Learn how we keep your data and transactions secure on Protechgig.<br />
            Discover the safety measures we have in place to protect you while using our platform.</p>
        </div>

        <div className='section'>
            <h2> Conclusion: </h2>
            <p>Protechgig is committed to making your freelancing experience as enjoyable and productive as possible.<br />
            We are here to provide the support you need and the resources to resolve any issues. Do not hesitate to contact us, explore our FAQs, or participate in our community to get the most out of your freelancing journey with us.
            Your success is our success.<br />
            Thank you for choosing Protechgig.

</p>
        </div>
    </div>
  );
};
export default Help;
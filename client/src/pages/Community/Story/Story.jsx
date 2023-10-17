import React from 'react';
import './Story.scss';

const Story = () => {
  return (
    <div className="Story">
      <div className="center-box">
        <div className="about-content">
          <h2>Community Success stories</h2>
          <p>
            <b>1. David Journey:</b><br />
            David, a software developer, had a dream to work on innovative projects.
            He joined ProTechGig to turn his passion into a career.<br />
            After delivering excellent results and receiving positive reviews, David reputation on the platform grew.<br />
            He was eventually hired by a tech giant to work on a cutting-edge application.
            Today, David leads a team of developers and is recognized as a top expert in his field.
          </p>
          <p>
            <b>2. Emily Rise:</b><br />
            Emily, a freelance writer, started her journey on ProTechGig as a college student looking to earn some extra income.<br />
            She offered content writing services and quickly gained a loyal clientele.<br />
            Her consistent high-quality work led to a referral from one client to another.
            Emily is now a full-time freelancer, working on diverse projects, and has even authored her own book.
          </p>
          <p>
            <b>3. Mark Artistic Triumph:</b><br />
            Mark, an illustrator, joined ProTechGig to share his passion for art.
            He started by creating custom illustrations for clients and received glowing reviews.<br />
            One day, a well-known publishing house found his work and hired him to illustrate a children book.<br />
            The book became a best-seller, and Mark art was recognized globally. He now has a thriving career and offers art courses to aspiring artists within the ProTechGig community.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Story;
import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img src="./img/world-wide-web.png" alt="exp" />
              <div className="line"></div>
              <span>Website Developers</span>
            </div>
            <div className="item">
              <img
                src="./img/mobile-development.png"
                alt=""
              />
              <div className="line"></div>

              <span>App Craftsmen</span>
            </div>
            <div className="item">
              <img
                src="./img/game-development.png"
                alt=""
              />
              <div className="line"></div>
              <span>Game Creators</span>
            </div>
            <div className="item">
              <img
                src="./img/artificial-intelligence.png"
                alt=""
              />
              <div className="line"></div>
              <span>AI Visionaries</span>
            </div>
            <div className="item">
              <img
                src="./img/business-analysis.png"
                alt=""
              />
              <div className="line"></div>
              <span>Data Analyst</span>
            </div>
            <div className="item">
              <img
                src="./img/ui.png"
                alt=""
              />
              <div className="line"></div>
              <span>UI/UX Developers</span>
            </div>
            <div className="item">
              <img
                src="./img/devops.png"
                alt=""
              />
              <div className="line"></div>
              <span>DevOps Engineers</span>
            </div>
            <div className="item">
              <img
                src="./img/cloud-computing.png"
                alt=""
              />
              <div className="line"></div>
              <span>Cloud Wizards</span>
            </div>
            <div className="item">
              <img
                src="./img/cyber-security.png"
                alt=""
              />
              <div className="line"></div>
              <span>Cyber Guardians</span>
            </div>
            <div className="item">
              <img
                src="./img/software.png"
                alt=""
              />
              <div className="line"></div>
              <span>Software Builders</span>
            </div>
          </div>
        </div>
      </div>      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;

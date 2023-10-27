import React from "react";
import myimage from "../../images/remya1.png";
import "./Home.css";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="sections">
      <div className="home" id="home">
        <div className="home-content">
          <h3>Hello,Its Me</h3>
          <h1>Remya Manoharan</h1>
          <h3>
            And I'm a <span>Software Developer</span>
          </h3>
          <p>
            Technically Intuitive Professional with a chronicle of success of
            over five year experience in Finance sector and a year of experience
            as Web Developer. Recently relocated to Denmark with a
            renewed focus software engineering aspirations. Graduated from
            comprehensive full-stack development bootcamp at Hack Your Future,
            Denmark, I am eager to leverage this opportunity to acquire the
            latest industry knowledge and enhance my proficiency in modern
            development technologies. I am seeking a challenging role where I
            can apply my technical expertise and contribute to the development
            of innovative software solutions.
          </p>
          <div className="social-media">
            <Link>
              <box-icon type="logo" name="linkedin" color="#00eeff"></box-icon>
            </Link>
            <Link>
              <box-icon name="github" type="logo" color="#00eeff"></box-icon>
            </Link>
          </div>
          <Link className="download-btn">Download CV</Link>
        </div>
        <div className="home-img">
          <img src={myimage} alt="my-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;

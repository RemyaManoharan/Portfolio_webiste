import React from "react";
// import "boxicons";
import myimage from "../../images/remya1.png";
import "./Home.css";

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
            as Web Developer in Information Technology and Services industry.
            Leveraging a B.Tech degree in Computer Science engineering, I began
            my career as an Associate Software Engineer in a reputable
            multinational company. Seeking to broaden my skill set and deepen my
            understanding of the financial sector, I pursued an MBA in finance
            and banking. After a career break, during which I resided in India,
            I have recently relocated to Denmark with a renewed focus on my
            software engineering aspirations. Currently enrolled in a
            comprehensive full-stack development bootcamp at Hack Your Future,
            Denmark, I am eager to leverage this opportunity to acquire the
            latest industry knowledge and enhance my proficiency in modern
            development technologies. Now poised to restart my career in
            software engineering, I am seeking a challenging role where I can
            apply my technical expertise and contribute to the development of
            innovative software solutions.
          </p>
          <div className="social-media">
            <a href="#">
              <box-icon type="logo" name="linkedin" color="#00eeff"></box-icon>
            </a>
            <a href="#">
              <box-icon name="github" type="logo" color="#00eeff"></box-icon>
            </a>
          </div>
          <a href="#" className="download-btn">
            Download CV
          </a>
        </div>
        <div className="home-img">
          <img src={myimage} alt="my-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;

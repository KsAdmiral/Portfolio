import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Niv</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href='./NivLugasi.pdf' target="_blank" rel="noopener noreferrer">
            <PictureAsPdfIcon />
          </a>
          <a href="mailto:mkilnivz@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, BootStrap, JavaScript, React, React Native, Redux,
              MaterialUI, Git, GitHub
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, NPM, ExpressJS, MongoDB, MySQL, PostgreSQL, JSON Web Token
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

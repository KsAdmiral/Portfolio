import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/lugasiniv/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/MkilNivz">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/niv.lugasi.3/">
          <FacebookIcon />
        </a>
        <a href="https://github.com/KsAdmiral">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/niv-lugasi-938781221/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; Niv Lugasi</p>
    </div>
  );
}

export default Footer;

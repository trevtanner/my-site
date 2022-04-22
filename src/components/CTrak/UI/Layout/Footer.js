import React from "react";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import classes from "./Footer.module.css";
import FadeIn from 'react-fade-in'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={classes.footer}>
      <footer className="page-footer font-small">
      <FadeIn>
        <div className="container-fluid text-center">
          <div className="row">
            <div>
              <p>Created by Trevor Tanner</p>
              <p>
                <a href="https://www.twitter.com/trevtanner">
                  <FaTwitterSquare size='3em'/>
                </a>

                <a href="https://github.com/trevtanner">
                  <FaGithubSquare size='3em'/>
                </a>

                <a href="https://www.linkedin.com/in/trevorstanner/">
                  <FaLinkedin size='3em'/>
                </a>
              </p>
              <p>&copy; {currentYear} TT Web Development and Design </p>
              <p><a href="/">Privacy Policy</a></p>
            </div>
          </div>
        </div>
        </FadeIn>
      </footer>
    </section>
  );
};

export default Footer;

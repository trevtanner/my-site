import { Container, Typography } from "@mui/material";
import { Fragment } from "react";

import styles from "../../Home.module.css"

function about() {
  return (
    <Fragment>
     <div className={styles.aboutbg}>
     <div className={styles.imagetextabout}>
        <Typography variant="h1">About Me</Typography>
     </div>
      </div>
    <Container>
      <div>
        <h2>Who Am I?</h2>
        <p>
          Programming is my passion, and love to work and projects even in my
          free time. When I&apos;m not writing code I&apos;m working on my PC, or playing
          video games. My computer is my home and the best work is done when the
          two are perfectly integrated.
        </p>
      </div>
      <div>
        <h2>Favorite Things to do Outside of Development</h2>
        <p>
<ul>
    <li>Gaming</li>
    <li>Working Out</li>
    <li>All things related to the Bay Area teams (Giants, 49ers, and Warriors)</li>
    <li>Anything involving lacrosse, but I enjoy watching or playing most sports</li>
</ul>
        </p>
      </div>
      <div>
        <h2>My Top Libraries</h2>
        <h5>1. MaterialUI</h5>
        <p>My most used library, almost all of my projects use it in some form to style my apps just the way I want them.</p>
        <h5>2. React Router</h5>
        <p>When I&apos;m not using NextJS, React Router always makes it so easy to set up multipage apps. </p>
        <h5>3. React Motion</h5>
        <p>Animation makes every app look that much better, and React Motion is what I use to give my apps that edge in design.</p>
        <h5>3. NextJS</h5>
        <p>My main JS framework to use, is a great add on for React to make apps that much better and more responsive.</p>
      </div>
    </Container>
    </Fragment>

  );
}

export default about;

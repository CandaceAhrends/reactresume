import React from "react";

import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <>
      <section>
        <h4>About</h4>
        <div className="about-me">
          <Typography paragraph>
            I am a passionate web developer who enjoys coding in JavaScript and
            creating visually appealing web experiences. Beyond coding, I like
            to explore new places and try new restaruants with different ethnic
            foods and experiences. I also like bike riding and walking to keep
            in shape.
          </Typography>
        </div>
      </section>
    </>
  );
};

export default About;

import React from "react";
import { currentSkills, goodKnowledge, someExperience } from "./consts";
import Typography from "@mui/material/Typography";

const Skills = () => {
  return (
    <div className="skills">
      <section>
        <h4>Skills</h4>
        <ul>
          {currentSkills.split(/\n/g).map((skill) => (
            <li>
              <Typography>{skill}</Typography>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h4>Good Knowledge</h4>
        <ul>
          {goodKnowledge.split(/\n/g).map((skill) => (
            <li>
              <Typography>{skill}</Typography>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h4>Some experience</h4>
        <ul>
          {someExperience.split(/\n/g).map((skill) => (
            <li>
              <Typography>{skill}</Typography>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skills;

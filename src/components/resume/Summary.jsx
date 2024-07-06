import React from "react";
import { resumeExperience, resumeSummary } from "./consts";
import Typography from "@mui/material/Typography";
const summaryLines = resumeSummary.split(/\n/g);
const experienceLines = resumeExperience.split(/\n/g);

const SummaryLine = ({ line }) => (
  <li>
    <Typography>{line}</Typography>
  </li>
);

const Summary = () => {
  return (
    <>
      <section>
        <h4>Summary</h4>
        <ul>
          {summaryLines.map((line) => (
            <SummaryLine line={line}></SummaryLine>
          ))}
        </ul>
      </section>
      <section>
        <h4>Experience</h4>
        <ul>
          {experienceLines.map((line) => (
            <SummaryLine line={line}></SummaryLine>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Summary;

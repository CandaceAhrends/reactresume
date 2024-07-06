import React from "react";
import Typography from "@mui/material/Typography";

const JobHeader = ({ title, company, subHeader, dates }) => {
  return (
    <section class="job-header">
      <Typography variant="body2">{company}</Typography>
      <Typography variant="caption">{dates}</Typography>
      <Typography variant="body2">{subHeader}</Typography>
      <Typography variant="caption">{title}</Typography>
    </section>
  );
};

export default JobHeader;

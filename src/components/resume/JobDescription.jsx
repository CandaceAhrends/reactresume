import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import './styles.scss';

const JobDescription = ({ descriptions }) => {
  const [descriptionLines] = useState(descriptions.split(/\#/g));
  return (
    <ul className="job-descriptions">
      {descriptionLines.map((description) => (
        <li>
          <Typography paragraph>{description}</Typography>
        </li>
      ))}
    </ul>
  );
};

export default JobDescription;

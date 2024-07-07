import React from 'react';
import JobHeader from './JobHeader';
import JobDescription from './JobDescription';
import { jobs } from './consts';
import DescriptionCard from './DescriptionCard';
import './styles.scss';

const Jobs = () => {
  return (
    <div className="jobs">
      <h4>Work history</h4>
      {jobs.map((job) => (
        <section className="job-cards">
          <DescriptionCard>
            <JobHeader {...job}></JobHeader>
            <JobDescription descriptions={job.description}></JobDescription>
          </DescriptionCard>
        </section>
      ))}
      <section className="block"></section>
    </div>
  );
};

export default Jobs;

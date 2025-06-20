import React from 'react';
import data from '../data/Data.json';
import JobListing, { type Job } from './JobListing';
import './JobBoard.css';

const JobBoard: React.FC = () => {
    return (
        <div className="job-board">
            {data.map((job: Job) => (
                <JobListing key={job.id} job={job} />
            ))}
        </div>
    );
};

export default JobBoard;

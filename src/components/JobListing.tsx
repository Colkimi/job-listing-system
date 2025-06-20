import React from 'react';
import './JobListing.css';

export interface Job {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
}

const JobListing: React.FC<{ job: Job }> = ({ job }) => {
    return (
        <div className={`job-listing${job.featured ? ' featured' : ''}`}>
            <img className="company-logo" src={job.logo.replace('./images/', '/public/images/')} alt={job.company} />
            <div className="job-info">
                <div className="job-header">
                    <span className="company">{job.company}</span>
                    {job.new && <span className="new">NEW!</span>}
                    {job.featured && <span className="featured-badge">FEATURED</span>}
                </div>
                <div className="position">{job.position}</div>
                <div className="job-meta">
                    <span>{job.postedAt}</span>
                    <span>&bull;</span>
                    <span>{job.contract}</span>
                    <span>&bull;</span>
                    <span>{job.location}</span>
                </div>
            </div>
            <div className="job-tags right">
                {[job.role, job.level, ...job.languages, ...job.tools].map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default JobListing;

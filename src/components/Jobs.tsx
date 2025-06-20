import JobCard from "./JobCard";
import jobsData from "../components/Data";
import type { Data } from "../types/Types";
import { useState, useEffect } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState<Data[]>([]);

  useEffect(() => {
    setJobs(jobsData as Data[]);
  }, []);

  return (
    <div className="flex flex-row">
      {jobs.map((job: Data) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};


export default Jobs;

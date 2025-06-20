import type { Data } from "../types/Types";

interface JobCardProps {
    job: Data;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const logoPath = `/static-job-listings-master${job.logo.slice(1)}`;
    return (
        <div
            className={`flex flex-row w-full bg-white rounded-lg shadow-md p-6 ${
                job.featured ? "border-l-4 border-cyan-700" : "border border-gray-200"
            }`}
        >
            <img
                src={logoPath}
                alt={`${job.company} logo`}
                className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-full shadow-md -ml-8 md:ml-0"
            />
            <div className="flex flex-col justify-center ml-6 min-w-0 flex-grow">
                <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-bold text-cyan-700 text-sm md:text-base whitespace-nowrap">
                        {job.company}
                    </span>
                    {job.new && (
                        <span className="bg-cyan-700 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                            NEW!
                        </span>
                    )}
                    {job.featured && (
                        <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                            FEATURED
                        </span>
                    )}
                </div>
                <h2 className="font-extrabold text-lg md:text-xl text-gray-900 hover:text-cyan-700 cursor-pointer truncate mt-1">
                    {job.position}
                </h2>
                <div className="flex gap-4 text-gray-500 text-xs md:text-sm flex-wrap mt-2">
                    <span>{job.postedAt}</span>
                    <span>•</span>
                    <span>{job.contract}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-end min-w-[220px] ml-8">
                <span className="bg-cyan-100 border border-cyan-200 text-cyan-700 px-3 py-1 rounded font-semibold text-xs cursor-pointer hover:bg-cyan-200">
                    {job.role}
                </span>
                <span className="bg-cyan-100 border border-cyan-200 text-cyan-700 px-3 py-1 rounded font-semibold text-xs cursor-pointer hover:bg-cyan-200">
                    {job.level}
                </span>
                {job.languages.map((language, index) => (
                    <span
                        key={index}
                        className="bg-cyan-100 border border-cyan-200 text-cyan-700 px-3 py-1 rounded font-semibold text-xs cursor-pointer hover:bg-cyan-200"
                    >
                        {language}
                    </span>
                ))}
                {job.tools.map((tool, index) => (
                    <span
                        key={index}
                        className="bg-cyan-100 border border-cyan-200 text-cyan-700 px-3 py-1 rounded font-semibold text-xs cursor-pointer hover:bg-cyan-200"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;

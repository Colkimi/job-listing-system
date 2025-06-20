import type { Data } from "../types/Types";

interface JobCardProps {
    job: Data;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const logoPath = `./public${job.logo.slice(1)}`;
    return (
        <div
            className={`flex flex-col md:flex-row w-full bg-white rounded-lg shadow-md p-6 ${
                job.featured ? "border-l-4 border-primary" : "border border-gray-200"
            }`}
        >
            <div className="flex md:items-center -mt-12 md:mt-0">
                <img
                    src={logoPath}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain bg-white rounded-full shadow-md"
                />
            </div>
            <div className="flex flex-col justify-center md:ml-6 min-w-0 flex-grow mt-4 md:mt-0">
                <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-bold text-primary text-sm md:text-base whitespace-nowrap">
                        {job.company}
                    </span>
                    {job.new && (
                        <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                            NEW!
                        </span>
                    )}
                    {job.featured && (
                        <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                            FEATURED
                        </span>
                    )}
                </div>
                <h2 className="font-extrabold text-lg md:text-xl text-gray-900 hover:text-primary cursor-pointer truncate mt-1">
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
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0 md:justify-end md:ml-8 border-t border-gray-200 md:border-t-0 pt-4 md:pt-0">
                <span className="bg-light-primary border border-primary/20 text-primary px-3 py-1 rounded font-semibold text-xs cursor-pointer hover:bg-primary/10">
                    {job.role}
                </span>
                <span className="bg-light-primary border border-primary/20 text-primary px-3 py-1 rounded font-semibold text-xs cursor-pointer hover:bg-primary/10">
                    {job.level}
                </span>
                {job.languages.map((language, index) => (
                    <span
                        key={index}
                        className="bg-light-primary border border-primary/20 text-primary px-3 py-1 rounded font-semibold text-xs cursor-pointer hover:bg-primary/10"
                    >
                        {language}
                    </span>
                ))}
                {job.tools.map((tool, index) => (
                    <span
                        key={index}
                        className="bg-light-primary border border-primary/20 text-primary px-3 py-1 rounded font-semibold text-xs cursor-pointer hover:bg-primary/10"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;

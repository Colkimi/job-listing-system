import type { Data } from "../types/Types";

interface JobCardProps {
    job: Data;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const logoPath = job.logo;
    return (
        <div
            className='bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 border-l-4 border-transparent hover:border-cyan-500 transition-all duration-200 mb-8 relative'
        >
            <div className="md:mr-8 flex-shrink-0 -mt-12 md:mt-0">
                <img
                    src={logoPath}
                    alt={`${job.company} logo`}
                    className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-full bg-white shadow-md p-2"
                />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-cyan-700 font-bold text-sm tracking-wide mr-2">{job.company}</span>
                    {job.new && (
                        <span className="bg-cyan-700 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">NEW!</span>
                    )}
                    {job.featured && (
                        <span className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">FEATURED</span>
                    )}
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 hover:text-cyan-700 cursor-pointer mb-2">{job.position}</h2>
                <div className="flex items-center text-gray-500 text-sm gap-2 mb-4">
                    <span>{job.postedAt}</span>
                    <span>•</span>
                    <span>{job.contract}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                </div>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end md:items-center mt-4 md:mt-0">
                <span className="bg-cyan-100 text-cyan-700 font-semibold px-3 py-1 rounded cursor-pointer hover:bg-cyan-700 hover:text-white transition">{job.role}</span>
                <span className="bg-cyan-100 text-cyan-700 font-semibold px-3 py-1 rounded cursor-pointer hover:bg-cyan-700 hover:text-white transition">{job.level}</span>
                {job.languages.map((language, index) => (
                    <span
                        key={index}
                        className="bg-cyan-100 text-cyan-700 font-semibold px-3 py-1 rounded cursor-pointer hover:bg-cyan-700 hover:text-white transition"
                    >
                        {language}
                    </span>
                ))}
                {job.tools.map((tool, index) => (
                    <span
                        key={index}
                        className="bg-cyan-100 text-cyan-700 font-semibold px-3 py-1 rounded cursor-pointer hover:bg-cyan-700 hover:text-white transition"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;

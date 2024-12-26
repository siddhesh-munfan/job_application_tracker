import { XCircle } from "lucide-react";

const statusOptions = [
  "Applied",
  "Reviewed",
  "Interviewed",
  "Offered",
  "Rejected",
];

export default function JobItem({ job, updateStatus, onDelete }) {
  const nextStatus = () => {
    const currentIndex = statusOptions.indexOf(job.status);
    const nextIndex = (currentIndex + 1) % statusOptions.length;
    return statusOptions[nextIndex];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl relative animate-fadeIn">
      <button
        onClick={() => onDelete(job.id)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
        aria-label="Delete job"
      >
        <XCircle size={24} />
      </button>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{job.jobRole}</h2>
      <p className="text-gray-600 mb-2">{job.companyName}</p>
      <p className="text-gray-500 text-sm mb-4">
        {new Date(job.date).toLocaleDateString()}
      </p>
      <button
        onClick={() => updateStatus(job.id, nextStatus())}
        className={`mb-4 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
          job.status === "Applied"
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : job.status === "Reviewed"
            ? "bg-yellow-500 hover:bg-yellow-600 text-white"
            : job.status === "Interviewed"
            ? "bg-purple-500 hover:bg-purple-600 text-white"
            : job.status === "Offered"
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "bg-red-500 hover:bg-red-600 text-white"
        }`}
      >
        {job.status}
      </button>
      <a
        href={job.applicationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-black text-white px-4 py-2 rounded text-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
      >
        View Application
      </a>
    </div>
  );
}

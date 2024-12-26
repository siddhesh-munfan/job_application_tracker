import { useState } from "react";

export default function AddJobForm({ onAddJob, onCancel }) {
  const [jobRole, setJobRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [applicationUrl, setApplicationUrl] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobRole || !companyName || !applicationUrl || !date) {
      alert("Please fill in all fields");
      return;
    }
    onAddJob({ jobRole, companyName, applicationUrl, date });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg mb-8 animate-fadeIn"
    >
      <div className="mb-4">
        <label htmlFor="jobRole" className="block text-gray-700 font-bold mb-2">
          Job Role
        </label>
        <input
          type="text"
          id="jobRole"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="companyName"
          className="block text-gray-700 font-bold mb-2"
        >
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="applicationUrl"
          className="block text-gray-700 font-bold mb-2"
        >
          Application URL
        </label>
        <input
          type="url"
          id="applicationUrl"
          value={applicationUrl}
          onChange={(e) => setApplicationUrl(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Date Applied
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-full sm:w-auto px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Add Job
        </button>
      </div>
    </form>
  );
}

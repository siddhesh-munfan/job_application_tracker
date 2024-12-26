"use client";

import { useState, useEffect } from "react";
import JobList from "../components/JobList";
import AddJobForm from "../components/AddJobForm";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  const addJob = (newJob) => {
    const updatedJobs = [
      ...jobs,
      { ...newJob, id: Date.now().toString(), status: "Applied" },
    ];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setShowAddForm(false);
  };

  const updateJobStatus = (id, newStatus) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, status: newStatus } : job
    );
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  const deleteJob = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold animate-fadeInDown">
            Job Application Tracker
          </h1>
        </div>
      </header>
      <main className="container mx-auto p-4 md:p-8">
        {showAddForm ? (
          <AddJobForm
            onAddJob={addJob}
            onCancel={() => setShowAddForm(false)}
          />
        ) : (
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-full mb-8 hover:bg-green-700 transition-all duration-300 shadow-lg flex items-center justify-center w-full sm:w-auto transform hover:scale-105 animate-fadeInUp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add New Job
          </button>
        )}
        <JobList
          jobs={jobs}
          updateJobStatus={updateJobStatus}
          onDelete={deleteJob}
        />
      </main>
    </div>
  );
}

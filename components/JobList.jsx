import JobItem from "./JobItem";

export default function JobList({ jobs, updateJobStatus, onDelete }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          updateStatus={updateJobStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

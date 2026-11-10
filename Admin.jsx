import { useState } from "react";

function Admin({ jobs, setJobs, applications }) {

  const [activeTab, setActiveTab] = useState("Dashboard");

  const [showForm, setShowForm] = useState(false);

  const [editingJob, setEditingJob] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "",
    description: "",
    responsibilities: [],
    skills: [],
    qualifications: [],
    benefits: []
  });

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) {
      return;
    }

    const updatedJobs = jobs.filter(job => job.id !== id);
    setJobs(updatedJobs);
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      ...job,
      responsibilities: job.responsibilities || [],
      skills: job.skills || [],
      qualifications: job.qualifications || [],
      benefits: job.benefits || []
    });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let updatedJobs;

    if (editingJob) {
      updatedJobs = jobs.map(job =>
        job.id === editingJob.id
          ? { ...formData, id: editingJob.id }
          : job
      );
    } else {
      const newJob = {
        ...formData,
        id: jobs.length
          ? Math.max(...jobs.map(job => job.id)) + 1
          : 1
      };

      updatedJobs = [...jobs, newJob];
    }

    setJobs(updatedJobs);
    setShowForm(false);
    setEditingJob(null);

    setFormData({
      title: "",
      company: "",
      location: "",
      salary: "",
      type: "",
      description: "",
      responsibilities: [],
      skills: [],
      qualifications: [],
      benefits: []
    });
  };

  return (
    <div className="admin-container">

      <aside className="admin-sidebar">

        <h2>Admin Panel</h2>

        <button onClick={() => setActiveTab("Dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setActiveTab("Jobs")}>
          Manage Jobs
        </button>

        <button onClick={() => setActiveTab("Applications")}>
          Applications
        </button>

      </aside>

      <main className="admin-content">

        <h1>{activeTab}</h1>

        {activeTab === "Dashboard" && (
          <div className="admin-cards">

            <div className="admin-card">
              <h3>Total Jobs</h3>
              <h2>{jobs.length}</h2>
            </div>

            <div className="admin-card">
              <h3>Applications</h3>
              <h2>{applications.length}</h2>
            </div>

            <div className="admin-card">
              <h3>Companies</h3>
              <h2>
                {new Set(jobs.map(job => job.company)).size}
              </h2>
            </div>

          </div>
        )}

        {activeTab === "Jobs" && (
          <>
            <button
              className="add-job-button"
              onClick={() => {
                setEditingJob(null);
                setFormData({
                  title: "",
                  company: "",
                  location: "",
                  salary: "",
                  type: "",
                  description: "",
                  responsibilities: [],
                  skills: [],
                  qualifications: [],
                  benefits: []
                });
                setShowForm(true);
              }}
            >
              + Add New Job
            </button>

            {showForm && (
              <form className="admin-form" onSubmit={handleSubmit}>

                <h2>{editingJob ? "Edit Job" : "Add New Job"}</h2>

                <input name="title" placeholder="Job Title"
                  value={formData.title}
                  onChange={handleChange} required />

                <input name="company" placeholder="Company"
                  value={formData.company}
                  onChange={handleChange} required />

                <input name="location" placeholder="Location"
                  value={formData.location}
                  onChange={handleChange} required />

                <input name="salary" placeholder="Salary"
                  value={formData.salary}
                  onChange={handleChange} required />

                <input name="type" placeholder="Job Type"
                  value={formData.type}
                  onChange={handleChange} required />

                <textarea name="description"
                  placeholder="Job Description"
                  value={formData.description}
                  onChange={handleChange} required />

                <button type="submit">
                  {editingJob ? "Update Job" : "Add Job"}
                </button>

                <button type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingJob(null);
                  }}>
                  Cancel
                </button>

              </form>
            )}

            <div className="admin-job-list">

              {jobs.map(job => (
                <div className="admin-job-card" key={job.id}>

                  <h3>{job.title}</h3>

                  <p>{job.company}</p>
                  <p>{job.location}</p>
                  <p>{job.salary}</p>

                  <button onClick={() => handleEdit(job)}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(job.id)}>
                    Delete
                  </button>

                </div>
              ))}

            </div>
          </>
        )}

        {activeTab === "Applications" && (
          <div className="admin-applications">

            <h2>All Applications</h2>

            {applications.length === 0 ? (
              <p>No applications received yet.</p>
            ) : (
              applications.map((application, index) => (
                <div key={application.id || index}>
                  <pre>{JSON.stringify(application, null, 2)}</pre>
                </div>
              ))
            )}

          </div>
        )}

      </main>

    </div>
  );
}

export default Admin;





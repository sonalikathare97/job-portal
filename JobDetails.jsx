import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ApplyForm from "./ApplyForm";

function JobDetails({ setApplications }) {
const location = useLocation();
const navigate = useNavigate();

const job = location.state?.job;

useEffect(()=> {
  window.scrollTo(0,0);
},[]);

const [showApplyForm, setShowApplyForm] = useState(false);

if (!job) {
return (
<div className="job-details">
<h2>Job details not found</h2>
<button onClick={() => navigate("/")}>
Back to Home
</button>
</div>
);
}

return (
<>
<div className="job-details">
<div className="job-header">
<h1 className="job-title">{job.title}</h1>

    <h3>{job.company}</h3>

    <p>
      📍 <strong>Location:</strong> {job.location}
    </p>

    <p>
      💰 <strong>Salary:</strong> {job.salary}
    </p>

    <p>
      💼 <strong>Job Type:</strong> {job.type}
    </p>
    </div>
    <div className="job-description">
      <h2>About the Job</h2>
      <p>{job.description || "No description available."}</p>
    </div>

    <div className="job-responsibilities">
      <h2>Key Responsibilities</h2>

      {job.responsibilities?.length > 0 ? (
        <ul>
          {job.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      ) : (
        <p>No responsibilities added yet.</p>
      )}
    </div>

    <div className="job-skills">
      <h2>Required Skills</h2>

      {job.skills?.length > 0 ? (
        <ul>
          {job.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills added yet.</p>
      )}
    </div>

    <div className="job-qualifications">
      <h2>Qualifications</h2>

      {job.qualifications?.length > 0 ? (
        <ul>
          {job.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      ) : (
        <p>No qualifications added yet.</p>
      )}
    </div>

    <div className="job-benefits">
      <h2>What We Offer</h2>

      {job.benefits?.length > 0 ? (
        <ul>
          {job.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      ) : (
        <p>No benefits added yet.</p>
      )}
    </div>

    <button
      className="apply-button"
      onClick={() => {
        const isLoggedIn = localStorage.getItem("jobPortalLoggedIn") === "true";

        if(!isLoggedIn){
          alert("Please login first to apply for this job.");
          navigate("/login");
          return;
        }

        setShowApplyForm(true);

      }}
    >
      Apply Now
    </button>

    <button className="back-button" onClick={() => navigate("/")}>
      Back to Home
    </button>
  </div>

  {showApplyForm && (
    <ApplyForm
      job={job}
      setApplications={setApplications}
      onClose={() => setShowApplyForm(false)}
    />
  )}
</>

);
}

export default JobDetails;
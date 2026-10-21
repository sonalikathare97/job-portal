import React, { useState, useEffect } from "react";

function MyApplications() {
const [applications, setApplications] = useState([]);

useEffect(() => {
const savedApplications = JSON.parse(
localStorage.getItem("applications") || "[]"
);

setApplications(savedApplications);

}, []);

const removeApplication = (id) => {
const updatedApplications = applications.filter(
(application) => application.id !== id
);

localStorage.setItem("applications", JSON.stringify(updatedApplications));
setApplications(updatedApplications);

};

return (
<section className="my-applications">
<h1>My Applications</h1>
<p>Track all the jobs you have applied for.</p>

  {applications.length === 0 ? (
    <p>No applications found.</p>
  ) : (
    <div className="applications-list">
      {applications.map((application, index) => (
        <div
          className="application-card"
          key={application.id || index}
        >
          <h3>{application.jobTitle || application.title}</h3>

          <p>
            <strong>Company:</strong>{" "}
            {application.company || "Not specified"}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {application.status || "Applied"}
          </p>

          <p>
            <strong>Applied on:</strong>{" "}
            {application.appliedDate || "Date not available"}
          </p>

          <button
            onClick={() => removeApplication(application.id)}
          >
            Remove Application
          </button>
        </div>
      ))}
    </div>
  )}
</section>

);
}

export default MyApplications;
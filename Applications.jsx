import { useState } from "react";

function Applications({ applications, setApplications }) {

  const clearApplications = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all saved applications?"
    );

    if (confirmDelete) {
      localStorage.removeItem("applications");
      setApplications([]);
    }
  };

  const deleteApplication = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (confirmDelete) {
      const updatedApplications = applications.filter(
        (application) => application.id !== id
      );

      setApplications(updatedApplications);

      localStorage.setItem(
        "applications",
        JSON.stringify(updatedApplications)
      );
    }
  };

  return (
    <section className="applications-section">

      {/* Applications Header */}

      <div className="applications-header">

        <div>
          <h2>My Applications</h2>
          <p>Track the jobs you have applied for.</p>
        </div>

        <div className="applications-count">
          <span>{applications.length}</span>
          <small>Total Applications</small>
        </div>

      </div>


      {/* No Applications */}

      {applications.length === 0 ? (

        <div className="no-applications">

          <div className="no-applications-icon">
            📋
          </div>

          <h3>No Applications Yet</h3>

          <p>
            You haven't applied for any jobs yet.
            Start exploring jobs and submit your first application.
          </p>

          <button
            className="browse-jobs-button"
            onClick={() => window.location.href = "/"}
          >
            Browse Jobs
          </button>

        </div>

      ) : (

        /* Applications List */

        <>
          <div className="applications-container">

            {applications.map((application) => (

              <div
                className="application-card"
                key={application.id}
              >

                <h3>{application.jobTitle}</h3>

                <p>
                  <strong>Company:</strong>
                  {application.company}
                </p>

                <p>
                  <strong>Name:</strong>
                  {application.name}
                </p>

                <p>
                  <strong>Email:</strong>
                  {application.email}
                </p>

                <p>
                  <strong>Phone:</strong>
                  {application.phone}
                </p>

                <p>
                  <strong>Experience:</strong>
                  {application.experience}
                </p>

                <p>
                  <strong>Resume:</strong>
                  {application.resumeName}
                </p>

                <p>
                  <strong>Applied At:</strong>
                  {application.appliedAt}
                </p>


                <button
                  className="delete-application"
                  onClick={() =>
                    deleteApplication(application.id)
                  }
                >
                  Delete Application
                </button>

              </div>

            ))}

          </div>


          {/* Clear All */}

          <button
            onClick={clearApplications}
            className="clear-applications"
          >
            Clear All Applications
          </button>

        </>

      )}

    </section>
  );
}

export default Applications;
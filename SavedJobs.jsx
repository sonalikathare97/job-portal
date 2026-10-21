function SavedJobs({ savedJobs, onRemoveJob, onClearAll }) {
    return (
    <section className="saved-jobs-page" id="saved-jobs">
    <h2>❤️ Saved Jobs</h2>
    
      <p className="saved-jobs-subtitle">
        Keep track of the opportunities you're interested in.
      </p>

      <div className="saved-job-count">
        Total Saved Jobs: {savedJobs.length}
      </div>
    
      {savedJobs.length === 0 ? (
        <div className="saved-jobs-empty">
          <h3> No Saved Jobs Yet </h3>
          <p>Explore available jobs and save the ones you like!</p>
        </div>
      ) : (
        <>
          <div className="saved-jobs-grid">
            {savedJobs.map((job) => (
              <div className="saved-job-card" key={job.id}>
                <div className="saved-job-info">
                <h3>{job.title}</h3>
    
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Job Type:</strong> {job.type}</p>
                </div>

                <div className="saved-job-actions">
                <button
                  className="remove-job-btn"
                  onClick={() => onRemoveJob(job.id)}
                >
                  Remove Job 
                </button>
                </div>
              </div>
            ))}
          </div>
    
         <div className="clear-all-container">
          <button
            className="clear-all-button"
            onClick={onClearAll}
          >
            Clear All Saved Jobs
          </button>
          </div>
        </>
        
      )}
    </section>
    
    );
    }
    
    export default SavedJobs;
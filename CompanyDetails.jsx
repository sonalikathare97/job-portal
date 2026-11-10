import { useLocation, useNavigate } from "react-router-dom";

function CompanyDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const company = location.state?.company;

  if (!company) {
    return (
      <section className="company-details">
        <h2>Company not found</h2>
        <button onClick={() => navigate("/companies")}>
          Back to Companies
        </button>
      </section>
    );
  }

  return (
    <section className="company-details">
      <button
        className="back-button"
        onClick={() => navigate("/companies")}
      >
        ← Back to Companies
      </button>

      <div className="company-details-card">
        <h1>{company.name}</h1>

        <p>
          <strong>Location:</strong> {company.location}
        </p>

        <p>
          <strong>Industry:</strong> {company.industry}
        </p>

        <p>
          <strong>About Company:</strong>
        </p>

        <p>{company.description}</p>

        <button
          className="view-jobs-button"
          onClick={() =>
            navigate("/jobs", {
              state: { company: company.name },
            })
          }
        >
          View Jobs
        </button>
      </div>
    </section>
  );
}

export default CompanyDetails;
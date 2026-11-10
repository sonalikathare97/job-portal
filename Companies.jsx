import { useNavigate } from "react-router-dom"

function Companies({jobs=[]}) {
    const companies = [
      {
        id: 1,
        name: "Tech Solutions",
        location: "Pune, Maharashtra",
        jobs: 3,
      },
      {
        id: 2,
        name: "Digital India",
        location: "Mumbai, Maharashtra",
        jobs:2,
      },
      {
        id: 3,
        name: "Creative Technologies",
        location: "Bengaluru, Karnataka",
        jobs:2,
      },

      {
        id: 4,
        name: "Design Studio",
        location: "Hyderabad, Telangana",
        jobs:2,
      },
      {
        id: 5,
        name: "WebWorks",
        location: "Chennai, Tamilnadu",
        jobs:2,
      },
      {
        id: 6,
        name: "CodeCraft",
        location: "Pune, Maharashtra",
        jobs:2,
      },
      {
        id: 7,
        name: "NextGen Software",
        location: "Noida, Uttar Pradesh",
        jobs:1,
      },
      {
        id: 8,
        name: "Pixel Perfect",
        location: "Delhi, India",
        jobs:1,
      },
    ];

    const navigate = useNavigate();
  
    return (
      <section className="companies-page">
        <h2>Top Companies</h2>
  
        <p>
          Explore companies and discover exciting career opportunities.
        </p>
  
        <div className="companies-container">
          {companies.map((company) => {
            const companyJobs = jobs.filter((job) =>
            job.company === company.name);

             const openings = companyJobs.length;

             return(

            <div className="company-card" key={company.id}>
              <h3>{company.name}</h3>
              <p>{company.location}</p>
              <p>{company.jobs} Open Jobs </p>
                 
                 
              <button className="view-company-button"
                      onClick={()=>
                        navigate("/jobs",{
                          state:{ companyName: company.name },
                        })
                      }
                      >
                View Jobs
              </button>
            </div>
          );
      })}
        </div>
      </section>
    );
  }
  
  export default Companies;
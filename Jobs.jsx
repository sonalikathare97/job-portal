import { useState } from "react";
import { useNavigate } from "react-router-dom"
import ApplyForm from "./ApplyForm";

function Jobs({ searchTerm = {keyword:"", location:""},
                savedJobs,
                setSavedJobs,
                setApplications,
               }) {

  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();
  

const handleSaveJob = (job) => {
  const alreadySaved = savedJobs.some(
    (savedJob) => savedJob.id === job.id
  );

  if(alreadySaved) {
    alert("This job is already saved!");
    return;
  }

  const updatedJobs = [...savedJobs,job];

  setSavedJobs(updatedJobs);

  localStorage.setItem("savedJobs",
    JSON.stringify(updatedJobs));

    alert("Job saved successfully!");
};


const jobs = [
  {
  id: 1,
  title: "Frontend Developer",
  company: "Tech Solutions",
  location: "Pune, Maharashtra",
  salary: "₹3–5 LPA",
  type: "Full Time",
  description:
  "We are looking for a Frontend Developer to build attractive, responsive, and user-friendly websites using modern web technologies.",
  responsibilities: [
  "Develop responsive websites using HTML, CSS, JavaScript, and React.",
  "Convert UI designs into functional web pages.",
  "Create reusable React components.",
  "Fix bugs and improve website performance.",
  "Collaborate with designers and backend developers."
  ],

  skills:[
    "HTML5",
     "CSS",
     "JavaScript",
     "ReactJs",
     "Git and GitHub",
     "Responsive Web Design",
  ],

  qualifications:[
    "B.E/BTech",
    "Knowledge of HTML,CSS,JavaScript,and React",
    "Freshers and candidates with up to 2 years of experience can apply. "
  ],

  benefits:[
    "Learning and development opportunities",
    "Freindly working environment",
    "Career growth opportunities"
  ],
  },

  {
  id: 2,
  title: "React Developer",
  company: "Digital India",
  location: "Mumbai, Maharashtra",
  salary: "₹4–6 LPA",
  type: "Full Time",
  description:
  "We are seeking a React Developer to build interactive web applications and deliver smooth user experiences.",
  responsibilities: [
  "Develop applications using React.js.",
  "Create reusable functional components.",
  "Manage state using React hooks.",
  "Integrate REST APIs into applications.",
  "Debug issues and improve application performance."
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "React Hooks",
    "REST APIs",
    "Git and GitHub"
  ],
  
  qualifications: [
    "Bachelor's degree in a relevant field is preferred.",
    "Knowledge of React.js and JavaScript.",
    "Understanding of components, props, and state."
  ],
  
  benefits: [
    "Opportunities to work on real-world projects",
    "Technical learning and development",
    "Career growth opportunities"
  
  ],
  },
  {
  id: 3,
  title: "Junior Web Developer",
  company: "Creative Technologies",
  location: "Pune, Maharashtra",
  salary: "₹2–4 LPA",
  type: "Full Time",
  description:
  "We are looking for a Junior Web Developer who is eager to learn and contribute to website development projects.",
  responsibilities: [
  "Build web pages using HTML and CSS.",
  "Write basic JavaScript functionality.",
  "Make websites responsive on different devices.",
  "Test websites and fix common issues.",
  "Assist senior developers with development tasks."
  ],

  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Web Design",
    "Basic React.js",
    "Git and GitHub"
  ],
  
  qualifications: [
    "Degree or relevant training in web development is preferred.",
    "Basic knowledge of HTML, CSS, and JavaScript.",
    "Freshers are welcome to apply."
  ],
  
  benefits: [
    "Mentorship from experienced developers",
    "Hands-on project experience",
    "Learning and development opportunities"
  ],
  },
  {
  id: 4,
  title: "UI/UX Designer",
  company: "Design Studio",
  location: "Bengaluru, Karnataka",
  salary: "₹3–6 LPA",
  type: "Full Time",
  description:
  "We are looking for a UI/UX Designer to create intuitive, attractive, and user-friendly digital experiences.",
  responsibilities: [
  "Design website and application interfaces.",
  "Create wireframes, mockups, and prototypes.",
  "Understand user needs and improve user experience.",
  "Maintain consistent layouts, colors, and typography.",
  "Collaborate with developers to implement designs."
  ],
  skills: [
    "UI Design",
    "UX Research",
    "Wireframing",
    "Prototyping",
    "Figma",
    "Visual Design"
  ],
  
  qualifications: [
    "Design-related degree or equivalent skills are preferred.",
    "Understanding of user-centered design principles.",
    "Ability to create wireframes and prototypes."
  ],
  
  benefits: [
    "Opportunity to work on creative projects",
    "Collaborative design environment",
    "Professional development opportunities"
  ],
  },
  {
  id: 5,
  title: "JavaScript Developer",
  company: "WebWorks",
  location: "Hyderabad, Telangana",
  salary: "₹3–5 LPA",
  type: "Full Time",
  description:
  "We are looking for a JavaScript Developer to build interactive website features and maintain web applications.",
  responsibilities: [
  "Write clean and maintainable JavaScript code.",
  "Develop interactive website features.",
  "Handle DOM manipulation and browser events.",
  "Debug and resolve application issues.",
  "Work with HTML, CSS, and APIs."
  ],

  skills: [
    "JavaScript",
    "HTML5",
    "CSS3",
    "DOM Manipulation",
    "REST APIs",
    "Git and GitHub"
  ],
  
  qualifications: [
    "Relevant degree or equivalent practical skills are preferred.",
    "Good understanding of JavaScript fundamentals.",
    "Knowledge of debugging and browser development tools."
  ],
  
  benefits: [
    "Opportunities to build interactive applications",
    "Technical skill development",
    "Career advancement opportunities"
  ],

  },
  {
  id: 6,
  title: "Python Developer",
  company: "CodeCraft",
  location: "Pune, Maharashtra",
  salary: "₹4–7 LPA",
  type: "Full Time",
  description:
  "We are seeking a Python Developer to develop reliable applications, automate tasks, and support backend development.",
  responsibilities: [
  "Write and maintain Python applications.",
  "Develop backend functionality.",
  "Work with databases and APIs.",
  "Write reusable and efficient code.",
  "Test applications and resolve bugs."
  ],
  skills: [
    "Python",
    "Object-Oriented Programming",
    "SQL",
    "REST APIs",
    "Git",
    "Problem Solving"
  ],
  
  qualifications: [
    "Relevant degree or equivalent programming experience is preferred.",
    "Knowledge of Python programming.",
    "Understanding of databases and backend development."
  ],
  
  benefits: [
    "Exposure to real-world software projects",
    "Learning and development opportunities",
    "Collaborative work environment"
  ],
  },
  {
  id: 7,
  title: "Full Stack Developer",
  company: "NextGen Software",
  location: "Mumbai, Maharashtra",
  salary: "₹5–8 LPA",
  type: "Full Time",
  description:
  "We are looking for a Full Stack Developer who can contribute to both frontend and backend application development.",
  responsibilities: [
  "Develop frontend interfaces using modern frameworks.",
  "Build backend services and APIs.",
  "Connect applications with databases.",
  "Implement application features and validations.",
  "Test, debug, and maintain web applications."
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "REST APIs",
    "SQL or MongoDB",
    "Git and GitHub"
  ],
  
  qualifications: [
    "Relevant degree or equivalent practical skills are preferred.",
    "Understanding of frontend and backend development.",
    "Knowledge of APIs and databases."
  ],
  
  benefits: [
    "Experience with full-stack projects",
    "Opportunities to learn modern technologies",
    "Career growth opportunities"
  ],
  },
  {
  id: 8,
  title: "Web Designer",
  company: "Pixel Perfect",
  location: "Delhi, India",
  salary: "₹2–4 LPA",
  type: "Part Time",
  description:
  "We are seeking a creative Web Designer to design visually appealing, responsive, and accessible websites.",
  responsibilities: [
  "Design attractive website layouts.",
  "Use HTML and CSS to implement designs.",
  "Ensure websites work across different screen sizes.",
  "Maintain consistent fonts, colors, and spacing.",
  "Work with developers to improve website appearance."
  ],
  skills: [
    "HTML5",
    "CSS3",
    "Responsive Web Design",
    "Web Layout Design",
    "Figma",
    "Basic JavaScript"
  ],
  
  qualifications: [
    "Design or web development training is preferred.",
    "Understanding of website layouts and typography.",
    "Knowledge of responsive design principles."
  ],
  
  benefits: [
    "Creative project opportunities",
    "Flexible learning environment",
    "Portfolio development experience"
  ],
  },
  {
  id: 9,
  title: "Software Tester",
  company: "QualityTech",
  location: "Pune, Maharashtra",
  salary: "₹3–5 LPA",
  type: "Full Time",
  description:
  "We are looking for a Software Tester to verify application quality and identify defects before software releases.",
  responsibilities: [
  "Prepare and execute test cases.",
  "Identify, document, and report software defects.",
  "Perform functional and regression testing.",
  "Verify bug fixes with the development team.",
  "Maintain test reports and documentation."
  ],
  skills: [
    "Software Testing",
    "Manual Testing",
    "Test Case Design",
    "Bug Reporting",
    "Regression Testing",
    "Basic SQL"
  ],
  
  qualifications: [
    "Relevant degree or testing training is preferred.",
    "Understanding of software testing fundamentals.",
    "Attention to detail and analytical thinking."
  ],
  
  benefits: [
    "Exposure to software quality processes",
    "Testing and technical skill development",
    "Opportunities for professional growth"
  ],
  },
  {
  id: 10,
  title: "Backend Developer",
  company: "Cloud Solutions",
  location: "Chennai, Tamil Nadu",
  salary: "₹4–7 LPA",
  type: "Full Time",
  description:
  "We are seeking a Backend Developer to build server-side application logic and maintain reliable APIs and databases.",
  responsibilities: [
  "Develop server-side application functionality.",
  "Create and maintain REST APIs.",
  "Work with databases and data validation.",
  "Implement authentication and authorization.",
  "Monitor performance and resolve backend issues."
  ],
  skills: [
    "Node.js or Python",
    "REST APIs",
    "SQL",
    "Database Management",
    "Authentication",
    "Git and GitHub"
  ],
  
  qualifications: [
    "Relevant degree or equivalent practical skills are preferred.",
    "Knowledge of server-side programming.",
    "Understanding of APIs and databases."
  ],
  
  benefits: [
    "Experience with backend systems",
    "Opportunities to learn new technologies",
    "Professional development opportunities"
  ],
  },
  {
  id: 11,
  title: "WordPress Developer",
  company: "Digital Creators",
  location: "Nashik, Maharashtra",
  salary: "₹2–4 LPA",
  type: "Full Time",
  description:
  "We are looking for a WordPress Developer to create, customize, and maintain websites using WordPress.",
  responsibilities: [
  "Develop and maintain WordPress websites.",
  "Customize themes and plugins.",
  "Create responsive website layouts.",
  "Maintain website security and performance.",
  "Troubleshoot website errors and update content."
  ],
  skills: [
    "WordPress",
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP Basics",
    "Theme Customization",
    "Plugin Management"
  ],
  
  qualifications: [
    "Web development training or equivalent skills are preferred.",
    "Knowledge of WordPress website management.",
    "Understanding of responsive website design."
  ],
  
  benefits: [
    "Experience with client-style website projects",
    "Opportunity to expand technical skills",
    "Portfolio development opportunities"
  ]
  },
  {
  id: 12,
  title: "Junior React Developer",
  company: "SmartTech",
  location: "Pune, Maharashtra",
  salary: "₹3–5 LPA",
  type: "Internship",
  description:
  "We are offering an opportunity for an aspiring React Developer to gain practical experience building modern web applications.",
  responsibilities: [
  "Develop UI components using React.",
  "Learn and apply React hooks.",
  "Assist with API integration.",
  "Fix bugs and test application features.",
  "Collaborate with experienced developers."
  ],
  skills: [
    "JavaScript",
    "React.js",
    "JSX",
    "React Hooks",
    "HTML5",
    "CSS3",
    "Git"
  ],
  
  qualifications: [
    "Basic knowledge of JavaScript and React.",
    "Understanding of components, props, and state.",
    "Freshers and aspiring React developers can apply."
  ],
  
  benefits: [
    "Practical React development experience",
    "Guidance from experienced developers",
    "Opportunities to improve coding skills"
  ],
  },
  {
  id: 13,
  title: "Data Analyst",
  company: "DataVision",
  location: "Mumbai, Maharashtra",
  salary: "₹4–6 LPA",
  type: "Full Time",
  description:
  "We are looking for a Data Analyst to interpret datasets, identify trends, and prepare reports that support business decisions.",
  responsibilities: [
  "Collect and organize data from different sources.",
  "Clean and validate datasets.",
  "Analyze trends using spreadsheets or analytical tools.",
  "Create reports and data visualizations.",
  "Present findings to relevant teams."
  ],
  skills: [
    "Microsoft Excel",
    "SQL",
    "Data Cleaning",
    "Data Visualization",
    "Power BI",
    "Analytical Thinking"
  ],
  
  qualifications: [
    "Relevant degree or equivalent analytical skills are preferred.",
    "Knowledge of spreadsheets and data analysis.",
    "Ability to interpret data and prepare reports."
  ],
  
  benefits: [
    "Exposure to business data projects",
    "Analytical skill development",
    "Career growth opportunities"
  ],
  },
  {
  id: 14,
  title: "Mobile App Developer",
  company: "AppWorks",
  location: "Bengaluru, Karnataka",
  salary: "₹4–8 LPA",
  type: "Full Time",
  description:
  "We are seeking a Mobile App Developer to build and maintain mobile applications with a focus on usability and performance.",
  responsibilities: [
  "Develop mobile application features.",
  "Create responsive and user-friendly interfaces.",
  "Integrate APIs and backend services.",
  "Test applications across supported devices.",
  "Debug issues and improve application performance."
  ],
  skills: [
    "React Native or Flutter",
    "JavaScript or Dart",
    "Mobile UI Development",
    "REST APIs",
    "Git and GitHub",
    "Debugging"
  ],
  
  qualifications: [
    "Relevant degree or equivalent practical skills are preferred.",
    "Knowledge of mobile application development.",
    "Understanding of APIs and mobile user interfaces."
  ],
  
  benefits: [
    "Experience with mobile application projects",
    "Opportunities to learn mobile technologies",
    "Professional development opportunities"
  ],
  },
  {
  id: 15,
  title: "Frontend Developer Intern",
  company: "Bright Future Tech",
  location: "Pune, Maharashtra",
  salary: "₹10,000–15,000/month",
  type: "Internship",
  description:
  "We are looking for a motivated Frontend Developer Intern who wants to gain hands-on experience building websites and learning modern frontend technologies.",
  responsibilities: [
  "Create website components using HTML and CSS.",
  "Develop interactive features using JavaScript.",
  "Assist with React development tasks.",
  "Test website responsiveness and fix UI issues.",
  "Learn coding best practices from experienced developers."
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js Basics",
    "Responsive Web Design",
    "Git and GitHub"
  ],
  
  qualifications: [
    "Basic knowledge of HTML, CSS, and JavaScript.",
    "Interest in learning React.js and frontend development.",
    "Students and freshers can apply."
  ],
  
  benefits: [
    "Hands-on frontend development experience",
    "Learning from experienced developers",
    "Opportunity to build a project portfolio"
  ],
  }
  ];

  
const filteredJobs = jobs.filter((job) => {
const keyword = searchTerm.keyword.toLowerCase().trim();
const location = searchTerm.location.toLowerCase().trim();

const matchesKeyword =
  job.title.toLowerCase().includes(keyword) ||
  job.company.toLowerCase().includes(keyword);

const matchesLocation = job.location.toLowerCase().includes(location);

return matchesKeyword && matchesLocation;

});

return (
  <>
<section className="jobs-section" id="jobs">
<h2>Latest Job Opportunities</h2>
<p>Explore job opportunities that match your skills and interests.</p>

  <div className="jobs-container">
    {filteredJobs.length > 0 ? (
      filteredJobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h3>{job.title}</h3>

          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Salary:</strong> {job.salary}</p>
          <p><strong>Job Type:</strong> {job.type}</p>

          <button
            className="apply-button"
            onClick={() => {
              const isLoggedIn = localStorage.getItem("jobPortalLoggedIn") === "true";

              if(!isLoggedIn){
                alert("Please login first to apply for this job.");
                navigate("/login");
                return;
              }

              setSelectedJob(job);
            }}
          >
            Apply Now
          </button>

          <button className="details-button"
                  onClick={()=> 
                    navigate("/job-details",{state:{ job }})
                  }
                  >

                 View Details

          </button>

          <button className="save-button"
           onClick={() => handleSaveJob(job)}>
              ♥️ Save Job
           </button>
        </div>
      ))
    ) : (
      <p className="no-jobs">No jobs found. Try another keyword or location.</p>
    )}
  </div>
</section>

  {selectedJob &&(
  <ApplyForm job={selectedJob}
             setApplications={setApplications}
             onClose={()=> setSelectedJob(null)}
  />
  )}
  </>
  );

}
export default Jobs;
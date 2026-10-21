import { useState } from "react";

function ApplyForm({ job, onClose, setApplications }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check whether a resume is uploaded
    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    // Validate PDF format
    if (
      formData.resume.type !== "application/pdf" &&
      !formData.resume.name.toLowerCase().endsWith(".pdf")
    ) {
      alert("Please upload your resume in PDF format.");
      return;
    }

    const application = {
      id: Date.now(),
      jobTitle: job.title,
      company: job.company,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      experience: formData.experience,
      resumeName: formData.resume.name,
      appliedAt: new Date().toLocaleString(),
    };

    try {
      // Get previously saved applications
      const savedApplications = JSON.parse(
        localStorage.getItem("applications") || "[]"
      );

      if (!Array.isArray(savedApplications)) {
        throw new Error("Invalid applications data.");
      }

      // Add the new application
      const updatedApplications = [
        ...savedApplications,
        application,
      ];

      // Save applications in localStorage
      localStorage.setItem(
        "applications",
        JSON.stringify(updatedApplications)
      );

      
        setApplications(updatedApplications);
      

      // Close the form
      onClose();

      // Show success message
      alert(
        `Thank you, ${formData.name}! Your application for ${job.title} has been submitted successfully.`
      );
    } catch (error) {
      console.error("Application submission error:", error);

      console.error("Error details:", error.message);

      alert(
        "Unable to save your application. Please try again."
      );
    }
  };

  return (
    <div className="apply-overlay">
      <div className="apply-form">
        <button
          type="button"
          className="close-button"
          onClick={onClose}
          aria-label="Close application form"
        >
          ✕
        </button>

        <h2>Apply for Job</h2>
        <h3>{job.title}</h3>
        <p>{job.company}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            required
          />

          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          >
            <option value="">Select Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="0-2 Years">0–2 Years</option>
            <option value="2-5 Years">2–5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>

          <label htmlFor="resume">Upload Your Resume (PDF)</label>

          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,application/pdf"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                resume: e.target.files?.[0] || null,
              }))
            }
            required
          />

          <button
            type="submit"
            className="submit-application"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplyForm;
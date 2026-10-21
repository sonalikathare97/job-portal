import { useState } from "react";

function Profile() {
  const savedUser = JSON.parse(
    localStorage.getItem("jobPortalUser") || "null"
  );

  const profileKey = savedUser
    ? `profile_${savedUser.email.trim().toLowerCase()}`
    : null;

  const [profile, setProfile] = useState(() => {
    const savedProfile = profileKey
      ? localStorage.getItem(profileKey)
      : null;

    if (savedProfile) {
      return JSON.parse(savedProfile);
    }

    return {
      name: savedUser?.name || "",
      email: savedUser?.email || "",
      phone: "",
      location: "",
      skills: "",
      experience: "",
      education: "",
    };
  });

  const [isEditing, setIsEditing] = useState(() => {
    if (!profileKey) {
      return true;
    }

    return !localStorage.getItem(profileKey);
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!savedUser) {
      alert("Please login first.");
      return;
    }

    localStorage.setItem(profileKey, JSON.stringify(profile));

    alert("Profile saved successfully!");

    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-avatar">
          {profile.name
            ? profile.name.charAt(0).toUpperCase()
            : "👤"}
        </div>

        <h2>{profile.name || "My Profile"}</h2>

        <p className="profile-role">
          Job Seeker
        </p>

        <form onSubmit={handleSubmit}>

          <div className="profile-field">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={profile.name}
              onChange={handleChange}
              required
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              required
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Phone</label>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={profile.phone}
              onChange={handleChange}
              required
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Location</label>

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={profile.location}
              onChange={handleChange}
              required
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Skills</label>

            <input
              type="text"
              name="skills"
              placeholder="Skills"
              value={profile.skills}
              onChange={handleChange}
              required
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Experience</label>

            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={profile.experience}
              onChange={handleChange}
              required
              disabled={!isEditing}
            />
          </div>

          <div className="profile-field">
            <label>Education</label>

            <input
              type="text"
              name="education"
              placeholder="Your Education"
              value={profile.education}
              onChange={handleChange}
              required
              disabled={!isEditing}
            />
          </div>

          <div className="profile-actions">

            {isEditing ? (
              <button type="submit">
                Save Profile
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit Profile
              </button>
            )}

          </div>

        </form>
      </div>
    </div>
  );
}

export default Profile;

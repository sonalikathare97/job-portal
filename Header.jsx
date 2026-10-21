import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

function Header(){

  const navigate = useNavigate();
  const[isLoggedIn,setIsLoggedIn] =useState(localStorage.getItem("jobPortalLoggedIn")=== "true");
  const [profileOpen,setProfileOpen] = useState(false);

const handleLogout = () => {
  localStorage.removeItem("jobPortalLoggedIn");
  setIsLoggedIn(false);
  navigate("/login");
}


    return(
      <header className="header">
        <h2 className="logo"> Job Portal </h2>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/companies">Companies</Link>

            {isLoggedIn ? (
  <div className="profile-menu">
    <button
      className="profile-button"
      onClick={() => setProfileOpen(!profileOpen)}
    >
      👤 Profile
    </button>

    {profileOpen && (
      <div className="profile-dropdown">
        <Link
          to="/profile"
          onClick={() => setProfileOpen(false)}
        >
          👤 My Profile
        </Link>

        <button onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    )}
  </div>
) : (
  <>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </>
)} 
          

        </nav>
      </header>

    );
}

export default Header;
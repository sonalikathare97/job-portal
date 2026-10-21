import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const[showPassword,setShowPassword]= useState(false);
  const[showConfirmPassword,setShowConfirmPassword]= useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
        
    const existingUser = JSON.parse(localStorage.getItem("jobPortalUser")  || "null");

    const enteredEmail= formData.email.trim().toLowerCase();

     if(existingUser) {
      const registeredEmail= existingUser.email.trim().toLowerCase();

      if(registeredEmail === enteredEmail){

      alert("This email is already registered. Please login.");
       navigate("/login");
       return;
     }
     }
     
    const savedUser = {
      name: formData.name,
      email: enteredEmail,
      password: formData.password,
    };

    localStorage.setItem("jobPortalUser", JSON.stringify(savedUser));

    alert("Registration successful! Please login.");

    navigate("/login");
  };

     

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
        <h2>Create Your Account</h2>

        <label htmlFor="register-name">Full Name</label>
        <input
          id="register-name"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="register-email">Email Address</label>
        <input
          id="register-email"
          type="text"
          name="new-register-email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => 
              setFormData((prevData)=>({
                ...prevData,
                email: e.target.value,
              }))
          }
          autoComplete="off"
          required
        />

        
        <label htmlFor="register-password">Password</label>
        <div className="password-field">
        <input
          id="register-password"
          type={showPassword? "text" : "password"}
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          minLength={6}
          autoComplete="off"
          required
        />

        <button 
          type="button"
          className="password-toggle"
          onClick={()=> setShowPassword(!showPassword)}>
            {showPassword? "🙈":"👁️"}
          </button>
          </div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <div className="password-field">
        <input
          id="confirm-password"
          type={showConfirmPassword?"text":"password"}
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          minLength={6}
          required
        />
        <button 
        type="button"
        className="password-toggle"
        onClick={()=> setShowConfirmPassword(!showConfirmPassword)}>
          {showConfirmPassword?"🙈":"👁️"}
        </button>
        </div>
        <button type="submit">Register</button>

        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
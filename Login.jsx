import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const[showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,                  
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("jobPortalUser") || "null"
    );

    if(!savedUser){
      alert("Please register first.");
      navigate("/register");
      return;
    }

    const enteredEmail= formData.email.trim().toLowerCase();
    const registeredEmail= savedUser.email.trim().toLowerCase();

    if (
      registeredEmail === enteredEmail &&
      savedUser.password === formData.password
    ) {
      localStorage.setItem("jobPortalLoggedIn", "true");

      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
        <h2>Login to Your Account</h2>

        <label htmlFor="login-email">Email Address</label>
        <input
          id="login-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="off"
          required
        />

        <label htmlFor="login-password">Password</label>
        <div className="password-field">
        <input
          id="login-password"
          type={showPassword?  "text":"password"}
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
        />
        <button
          type="button"
          className="password-toggle"
          onClick={()=> setShowPassword(!showPassword)}>
            {showPassword? "🙈":"👁️"}
          </button>
          </div>

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
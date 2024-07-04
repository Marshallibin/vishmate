import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.scss'; // Import your CSS file
import logo from './logo.png'; // Import your logo image
import "@fontsource/lora"; // Defaults to weight 400
import "@fontsource/lora/400.css"; // Specify weight
import "@fontsource/lora/400-italic.css"; // Specify weight and style
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered credentials match the required admin credentials
    if (username === 'admin@gmail.com' && password === '12345678') {
      // Navigate to the dashboard (you can replace '/dashboard' with your desired route)
      navigate('/Dashboard');
    } else {
      // Incorrect credentials handling (e.g., display an error message)
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    
    <div className="login-container">
      <div className="background-image"></div> {/* Background image div */}
      
      <form onSubmit={handleLogin} className="login-form">
        <img src={logo} alt="Logo" className="logo" />
        <h2 style={{ fontSize: "40px",fontWeight: "600"}}>Sign In</h2>

        <div style={{ marginBottom: "15px",fontSize: "15px",fontWeight:"400",marginTop: "10px" }}>
          <label htmlFor="username" style={{display: "block", marginBottom:" 8px",fontFamily: "Montserrat",marginLeft:"25px",fontWeight:"600",fontSize:"15px"}}>Email ID</label>
          <input
            type="text"
            id="username"
            placeholder="Enter Email ID"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
             style={{ width:"90%",padding: "8px",border: "1.2px solid #BBBBBB",borderRadius: "2px",color: "black",backgroundColor:"#F2F2F28A",fontFamily: "Montserrat",marginLeft:"25px"}}
          />
        </div>

        <div  style={{ marginBottom: "15px",fontSize: "15px",fontWeight:"400",marginTop: "30px" }}>
          <label htmlFor="password" style={{display: "block", marginBottom:" 8px",fontFamily: "Montserrat",marginLeft:"25px",fontWeight:"600",fontSize:"15px"}}>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width:"90%",padding: "8px",border: "1.2px solid #BBBBBB",borderRadius: "2px",color: "black",backgroundColor:"#F2F2F28A",fontFamily: "Montserrat",marginLeft:"25px"}}
          />
        </div>

        <button type="submit" style={{width: "90%", padding: "10px",fontWeight: "700",border: "none",borderRadius: "4px",cursor: "pointer",marginTop: "30px",marginLeft: "23px",fontFamily: "Montserrat",color: "#302B63",background: "linear-gradient(135.73deg, #AE8625 16.01%, #F7EF8A 49.79%, #D2AC47 70.41%, rgba(237, 201, 103, 0.84) 103.75%)",fontSize:"20px", boxShadow: "0  6px 6px rgba(0, 0, 0, 0.1)"}}>Sign In</button>
        <a>Terms of use & Privacy policy</a>
      </form>
    </div>
    
  );
};

export default LoginPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
 localStorage.setItem("isLoggedIn", "true");
    navigate("/tasks", { replace: true });
  }

  return (
    <div className="page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <label>Username</label>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          required
        />
        <br />
        <label>Password</label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />
    <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
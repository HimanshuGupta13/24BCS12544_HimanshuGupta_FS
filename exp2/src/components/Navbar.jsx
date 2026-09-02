import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  function logout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });
  }

  return (
    <nav >
      <h1>STUDYHUB</h1>
      <br /> <br />

      <div  style={{
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  }}>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/login">Login</NavLink>

        <NavLink to="/tasks">Tasks</NavLink>

        <NavLink to="/profile">Profile</NavLink>

        {isLoggedIn && (
          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
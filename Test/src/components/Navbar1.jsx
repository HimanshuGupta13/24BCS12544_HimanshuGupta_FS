function Navbar1({ user, enrolledcount }) {
  return (
    <nav>
      <h2>Students</h2>
      <div>
        <h3>Welcome, {user.name}</h3>
        <p>Enrolled: {enrolledcount} course(s)</p>
      </div>
    </nav>
  );
}

export default Navbar1;
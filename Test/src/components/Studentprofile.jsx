function StudentProfile({ user }) {
  return (
    <div>
      <h2>Student Profile</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
    </div>
  );
}

export default StudentProfile;
import useUser from "../../hooks/useUser";

function StudentProfile() {
  const user = useUser();

  return (
    <div>
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Program:</strong> {user.program}
      </p>
    </div>
  );
}

export default StudentProfile;
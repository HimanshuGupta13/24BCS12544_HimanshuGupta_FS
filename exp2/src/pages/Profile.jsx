import useUser from "../hooks/useUser";

function Profile() {
  const student = useUser();

  return (
    <div >
      <h1>Student Details</h1>

      <div >
        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Year:</strong> {student.year}
        </p>
      </div>
    </div>
  );
}

export default Profile;
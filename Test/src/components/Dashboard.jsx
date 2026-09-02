import CourseCatalog from "./CourseCatalog";

function Dashboard({ user, enrolledCount, setEnrolledCount }) {
  return (
    <div>
      <h2>Dashboard</h2>

      <CourseCatalog
        user={user}
        enrolledCount={enrolledCount}
        setEnrolledCount={setEnrolledCount}
      />
    </div>
  );
}

export default Dashboard;
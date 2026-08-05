import CourseCatalog from "./CourseCatalog";

function Dashboard({ enrolledCount, setEnrolledCount }) {
  return (
    <div>
      <h2>Dashboard (Context API)</h2>

      <CourseCatalog
        enrolledCount={enrolledCount}
        setEnrolledCount={setEnrolledCount}
      />
    </div>
  );
}

export default Dashboard;
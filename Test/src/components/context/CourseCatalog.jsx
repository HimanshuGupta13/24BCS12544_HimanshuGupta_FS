import CourseList from "./CourseList";

function CourseCatalog({ enrolledCount, setEnrolledCount }) {
  return (
    <div>
      <h2>Course Catalog</h2>

      <CourseList
        enrolledCount={enrolledCount}
        setEnrolledCount={setEnrolledCount}
      />
    </div>
  );
}

export default CourseCatalog;
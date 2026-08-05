import { useEffect } from "react";
import StudentProfile from "./StudentProfile";

function CourseList({ enrolledCount, setEnrolledCount }) {
  const courses = [
    {
      id: 1,
      name: "React Basics",
      price: 999,
    },
    {
      id: 2,
      name: "Node.js Essentials",
      price: 1199,
    },
    {
      id: 3,
      name: "UI/UX Design",
      price: 799,
    },
  ];

  function handleEnroll() {
    setEnrolledCount(enrolledCount + 1);
  }

  useEffect(() => {
    console.log(
      `Enrollment updated. Total courses: ${enrolledCount}`
    );
  }, [enrolledCount]);

  return (
    <div>
      <h2>Course List</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <p>
            {course.name} - ₹{course.price}
          </p>

          <button onClick={handleEnroll}>
            Enroll
          </button>

          <hr />
        </div>
      ))}

      <StudentProfile />
    </div>
  );
}

export default CourseList;
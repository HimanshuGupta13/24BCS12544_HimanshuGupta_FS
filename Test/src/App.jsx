import { useState } from "react";
import Navbar1 from "./components/Navbar1";
import Dashboard from "./components/Dashboard";
import ContextDashboard from "./components/context/Dashboard";

import { UserContext } from "./context/UserContext";

function App() {
  const user = {
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development",
  };

  const [enrolledCount, setEnrolledCount] = useState(0);

  return (
    <>
      <Navbar1
        user={user}
        enrolledCount={enrolledCount}
      />

      <hr />

      <h1>Prop Drilling Example</h1>

      <Dashboard
        user={user}
        enrolledCount={enrolledCount}
        setEnrolledCount={setEnrolledCount}
      />

      <hr />

      <h1>Context API Example</h1>

      <UserContext.Provider value={user}>
        <ContextDashboard
          enrolledCount={enrolledCount}
          setEnrolledCount={setEnrolledCount}
        />
      </UserContext.Provider>
    </>
  );
}

export default App;
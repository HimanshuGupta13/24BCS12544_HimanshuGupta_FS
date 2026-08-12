import { createContext } from "react";

const StudentContext = createContext();

const student = {
  name: "Himanshu Gupta",
  email: "him12anshu@gmail.com",
  year: "3rd Year",
};

export function StudentProvider({ children }) {
  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}

export default StudentContext;
import StudentTable from "./components/StudentTable";

function App() {
  const students = [
    { roll: 1, name: "Areeba Zehra", math: 90, science: 95, english: 90 },
    { roll: 2, name: "Sara Batool", math: 92, science: 88, english: 67 },
    { roll: 3, name: "Ghulam Hussain", math: 76, science: 81, english: 78 },
    { roll: 4, name: "Kaneez Fatima", math: 89, science: 94, english: 59 },
    { roll: 5, name: "Kaif Abbas", math: 67, science: 72, english: 88 },
  ];

  return <StudentTable students={students} />;
}

export default App;

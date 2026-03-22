import React, { useState } from "react";
import "./StudentTable.css"

const StudentTable = ({ students }) => {
  const [selectedSubject, setSelectedSubject] = useState("math");
  const [sortEnabled, setSortEnabled] = useState(false);

  let displayedStudents = [...students];

  if (sortEnabled) {
    displayedStudents.sort((a, b) => b[selectedSubject] - a[selectedSubject]);
  }

  function handleSubjectChange(event) {
    setSelectedSubject(event.target.value);
    setSortEnabled(false);
  }

  function handleSort() {
    setSortEnabled(!sortEnabled);
  }

  return (
    <div id="table-container">
      <h2 id="table-title">Student Marks Table</h2>
      <div id="table-wrapper">
        <div id="controls">
          <button id="sort-btn" onClick={handleSort}>
            {sortEnabled ? "Unsort" : "Sort by Marks"}
          </button>
          <select id="subject-select" value={selectedSubject} onChange={handleSubjectChange}>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>
        </div>
        <table id="student-table" cellPadding="10">
          <thead>
            <tr>
              <th>ROLL</th>
              <th>NAME</th>
              <th>{selectedSubject.toUpperCase()}</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {displayedStudents.map((student) => (
              <tr className="student-row" key={student.roll}>
                <td>{student.roll}</td>
                <td>{student.name}</td>
                <td className="marks-cell">{student[selectedSubject]}</td>
                <td className="total-cell">{student.math + student.science + student.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
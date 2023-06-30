import React, { useState } from "react";

const CourseCreationForm = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numSessions, setNumSessions] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Course Name:", courseName);
    console.log("Course Description:", courseDescription);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Number of Sessions:", numSessions);
  };

  return (
    <div className="App">
      <div class="flex flex-col text-center w-full mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Create a Course
        </h1>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="courseName" className="form-label">
            Course Name:
          </label>
          <input
            className="form-control"
            type="text"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription" className="form-label">
            Course Description:
          </label>
          <textarea
            id="courseDescription"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate" className="form-label">
            Start Date:
          </label>
          <input
            className="form-control"
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate" className="form-label">
            End Date:
          </label>
          <input
            className="form-control"
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numSessions" className="form-label">
            Number of Online Sessions:
          </label>
          <input
            className="form-control"
            type="number"
            id="numSessions"
            value={numSessions}
            onChange={(e) => setNumSessions(parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            {" "}
            Create Course{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseCreationForm;

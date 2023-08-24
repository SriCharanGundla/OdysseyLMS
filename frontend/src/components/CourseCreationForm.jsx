import React, { useState } from "react";
import Axios from "axios";

const CourseCreationForm = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [level, setLevel] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [courseImage, setCourseImage] = useState("");
  // const [authorImage, setAuthorImage] = useState("");

  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  // const [numSessions, setNumSessions] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Course Name:", courseName);
    console.log("Course Description:", courseDescription);
    console.log("Author Name:", authorName);
    console.log("Level:", level);
    console.log("Category Name:", categoryName);
    console.log("Course Image:", courseImage);
    // console.log("Author Image:", authorImage);

    const courseURL = "https://odyssey-backend.onrender.com/newCourse";

    Axios.post(courseURL, {
      course: courseName,
      description: courseDescription,
      author: authorName,
      level: level,
      category: categoryName,
      courseImage: courseImage,
      // authorImage: authorImage,
    })
      .then((response) => {
        console.log(response);
        alert("Course Created!");
      })
      .catch((error) => {
        console.log(error);
        alert("Course Creation Failed");
      });
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
          <label htmlFor="authorName" className="form-label">
            Author:
          </label>
          <input
            className="form-control"
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseName" className="form-label">
            Level:
          </label>
          <input
            className="form-control"
            type="text"
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryName" className="form-label">
            Category:
          </label>
          <select
            className="form-control"
            onChange={(e) => setCategoryName(e.target.value)}
          >
            <option value="Business">Business</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Data Science">Data Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Health">Health</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Personal Development">Personal Development</option>
            <option value="Web Development">Web Development</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courseImage" className="form-label">
            Course Image:
          </label>
          <input
            className="form-control"
            type="text"
            id="courseImage"
            value={courseImage}
            onChange={(e) => setCourseImage(e.target.value)}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="authorImage" className="form-label">
            Author Image:
          </label>
          <input
            className="form-control"
            type="file"
            alt="authorImage"
            id="authorImage"
            accept="image/*"
            value={authorImage}
            onChange={(e) => setAuthorImage(e.target.value)}
          />
        </div> */}

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

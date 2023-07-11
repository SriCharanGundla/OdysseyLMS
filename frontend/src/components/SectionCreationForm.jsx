import React, { useState } from "react";
import Axios from "axios";

const SectionCreationForm = () => {
  const [courseName, setCourseName] = useState("");
  const [sectionName, setSectionName] = useState("");
  const [sectionDescription, setSectionDescription] = useState("");
  const [sectionVideo, setSectionVideo] = useState("");
  const [sectionVideoURL, setSectionVideoURL] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Course Name:", courseName);
    console.log("Section Title:", sectionName);
    console.log("Section Description:", sectionDescription);
    console.log("Section Video:", sectionVideo);
    console.log("Section Video URL:", sectionVideoURL);

    Axios.put(
      "http://localhost:5000/newSection",
      {
        course: courseName,
        section: sectionName,
        description: sectionDescription,
        video: sectionVideo,
        url: sectionVideoURL,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);
        alert("Section Added Successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Section Creation Failed");
      });
  };

  return (
    <div className="App">
      <div class="flex flex-col text-center w-full mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Add a Section
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
          <label htmlFor="sectionName" className="form-label">
            Section Name:
          </label>
          <input
            className="form-control"
            type="text"
            id="sectionName"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sectionDescription" className="form-label">
            Section Description:
          </label>
          <textarea
            id="sectionDescription"
            value={sectionDescription}
            onChange={(e) => setSectionDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videoName" className="form-label">
            Video Title:
          </label>
          <input
            className="form-control"
            type="text"
            id="videoName"
            value={sectionVideo}
            onChange={(e) => setSectionVideo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sectionVideoURL" className="form-label">
            Video URL:
          </label>
          <input
            className="form-control"
            type="text"
            id="sectionVideoURL"
            value={sectionVideoURL}
            onChange={(e) => setSectionVideoURL(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button className="btn" type="submit">
            {" "}
            Add Section{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SectionCreationForm;

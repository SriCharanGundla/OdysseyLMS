# Odyssey - A Learning Management System

![Odyssey Logo](frontend/src/images/logo-removebg.png)

*Odyssey is a Learning Management System that offers expert-led courses to master new skills. Join us now to achieve your goals
through interactive methods, 24/7 access and community support. We aim to provide a platform for students and teachers to interact and learn in a more efficient manner.*

> This is my final project built using MERN stack as part of the internship at Ethnus Consultancy Services Pvt. Ltd.

| S.No | Table of Contents                                         |
|------|-----------------------------------------------------------|
| 1.   | [Getting Started](#getting-started)                       |
| 2.   | [Installation](#installation)                             |
| 3.   | [Running the App](#running-the-app-on-your-local-machine) |
| 4.   | [Steps to Create Courses](#steps-to-create-a-new-course)  |

## Getting Started

> Follow these steps to run an instance of this application on your local machine for development and testing purposes.

### Pre-requisites

* NPM and Node.js should be installed.
* Setting up the required environment variables
    * Create a file called `.env` in the backend directory and setup the environment variables as follows:
        * **PORT**=5000 (Port Number for Server)
        * **MONGO_URI**=(Copy the URI of your MongoDB Database)
        * **JWT_SECRET**=(Use any phrase as a secret key which will be used to generate tokens for user authentication)
        * **BACKEND**=(Backend API URL)   *\[***To be configured later...***\]* 
        * **COURSE_URL**=(API URL for Courses)   *\[***To be configured later...***\]* 
        * **SECTION_URL**=(API URL for Sections)   *\[***To be configured later...***\]* 

> *Do not forget to add the `.env` to the `.gitignore` file before pushing the code to a public remote repository.*

### Installation

Installing the required NPM modules on both the client and server folders.

Execute these commands from the project directory:

```js
cd frontend
npm install
```

```js
cd backend
npm install
```

### Running the app on your local machine

Open a terminal in the server directory and navigate to the backend folder.

> To run the client-side code:
```
npm run client
```

> To run the server-side code:

```
npm run server
```

> To run both the client and server simultaneously:

```
npm run dev
```

### Steps to Create a New Course:
---
***1. Fill out the form in the create course page.***

***2. Click on the create course button.***

***3. The course should appear in the courses page.***

***4. Click on the course to view the course details.***

***5. To add sections to the course, go to the section creation form.***

***6. Fill out the form with the name of the course where the section needs to be added and click on the create section button.***

***7. The section should appear in the course details page.***

***8. Click on the section to view the section details as well as the video lecture.***
> *This process can be repeated to add more sections to the course.*

## Access the web app at http://localhost:3000/

> The frontend and backend can be deployed to render for 24/7 online hosting.

`Built with 💙 by Sri Charan G.`

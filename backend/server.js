const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

const port = process.env.PORT || 5000;

connectDB();
const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

const course = require("./models/courseModel");

app.post("/newCourse", async (req, res) => {
  const id = req.body.id;
  const CourseName = req.body.course;
  const CourseDescription = req.body.description;
  const Author = req.body.author;
  const Level = req.body.level;
  const Category = req.body.category;
  const CourseImage = req.body.courseImage;
  const AuthorImage = req.body.authorImage;

  const courseData = new course({
    id: id,
    course_name: CourseName,
    course_details: CourseDescription,
    author: Author,
    level: Level,
    category: Category,
    course_img: CourseImage,
    author_img: AuthorImage,
  });

  try {
    await courseData.save();
    res.send("inserted data..");
  } catch (err) {
    console.log(err);
  }
});

app.put("/newSection", async (req, res) => {
  const id = req.body.id;
  const courseName = req.body.course;
  const sectionName = req.body.section;
  const sectionDescription = req.body.description;
  const videoTitle = req.body.video;
  const videoURL = req.body.url;

  try {
    const updatedCourse = await course.findOneAndUpdate(
      { course_name: courseName },
      {
        $push: {
          sections: {
            section_name: sectionName,
            section_text: sectionDescription,
            video_title: videoTitle,
            video_url: videoURL,
          },
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedCourse) {
      return res.status(404).send("Course not found.");
    }

    res.send("Updated data successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while updating the record.");
  }

  //   const sectionData = new course({
  //     id: id,
  //     course_name: CourseName,
  //     sections: [
  //       {
  //         section_name: SectionName,
  //         section_text: SectionDescription,
  //         video_title: VideoTitle,
  //         video_url: VideoURL,
  //       },
  //     ],
  //   });

  //   try {
  //     await sectionData.updateOne();
  //     res.send("inserted data..");
  //   } catch (err) {
  //     console.log(err);
  //   }
});

const {registerUser} = require("./controllers/userController");
const {loginUser} = require("./controllers/userController");
const {getMe} = require("./controllers/userController");

app.post('/api/users/register', registerUser);
app.post('/api/users/login', loginUser);
app.get('/api/users/me', getMe);

app.listen(port, () => console.log(`Server started on port ${port}`));
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = Schema(
  {
    id: { type: String },
    course_name: {
      type: String,
      required: [true, "Please add a course Name"],
    },
    course_details: { type: String, required: true },
    author: { type: String, required: true },
    level: { type: String, required: true },
    // sections: [{ type: Schema.Types.ObjectId, ref: "Section" }],
    sections: [
      {
        section_name: { type: String },
        section_text: { type: String },
        video_title: { type: String },
        video_url: { type: String },
      },
    ],
    category: { type: String, required: true },
    // course_img: { type: String, default: "" },
    // author_img: { type: String, default: "" },
    course_img: {
      data: Buffer,
      contentType: String,
    },
    author_img: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("course", courseSchema);

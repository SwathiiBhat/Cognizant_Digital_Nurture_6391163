// src/App.js

import React from "react";
import "./App.css";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";
import { books, blogs, courses } from "./data";

function App() {
  return (
    <div className="main">
      <div className="section">
        <h1>Book Details</h1>
        <BookDetails books={books} />
      </div>
      <div className="section">
        <h1>Blog Details</h1>
        <BlogDetails blogs={blogs} />
      </div>
      <div className="section">
        <h1>Course Details</h1>
        <CourseDetails courses={courses} />
      </div>
    </div>
  );
}

export default App;

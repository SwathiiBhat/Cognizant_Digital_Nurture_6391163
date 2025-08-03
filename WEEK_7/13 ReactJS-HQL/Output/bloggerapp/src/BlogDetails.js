// src/BlogDetails.js

import React from "react";

function BlogDetails({ blogs }) {
  return (
    <ul>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h3>{blog.title}</h3>
          <h5>{blog.author}</h5>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );
}

export default BlogDetails;

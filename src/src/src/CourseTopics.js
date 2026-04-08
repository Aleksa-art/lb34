import React from "react";

function CourseTopics({ topics }) {
  return (
    <div>
      <h3>Тематика курсу:</h3>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTopics;

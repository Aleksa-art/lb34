import React from "react";
import MyName from "./MyName";
import CourseName from "./CourseName";
import CourseTopics from "./CourseTopics";

function App() {
  const topics = [
    "Концепція компонентів",
    "Декларативний підхід",
    "Virtual DOM",
    "Props і State",
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <MyName />
      <CourseName course="React — концепція компонентів і декларативного підходу" />
      <CourseTopics topics={topics} />
    </div>
  );
}

export default App;

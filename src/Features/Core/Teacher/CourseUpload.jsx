import React, { useState } from "react";
import { Input, Select, Option, Button } from "@material-tailwind/react";

function CourseUpload() {
  const [courseName, setCourseName] = useState("");
  const [level, setLevel] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [files, setFiles] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (courseName && level && subjectName && files) {
      // Handle form submission logic, e.g., send data to the server
      console.log("Form submitted:", { courseName, level, subjectName, files });
    } else {
      alert("Please fill in all fields and upload files.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <header className="text-2xl font-bold mb-4">Upload New Course</header>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <Input
            label="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Select
            label="Select Level"
            value={level}
            onChange={(e) => setLevel(e)}
          >
            <Option value="Primary School Level">Primary School Level</Option>
            <Option value="Ordinary Level">Ordinary Level</Option>
            <Option value="Advanced Level">Advanced Level</Option>
          </Select>
        </div>
        <div className="mb-3">
          <Input
            label="Subject Name e.g Basic Mathematics"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            accept="video/*"
            type="file"
            multiple
            onChange={(e) => setFiles(e)}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default CourseUpload;

import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Vishwakarma Institute of Information Technology",
      degree: "Bachelor of Technology in Computer Engineering",
      duration: "Expected June 2025",
      gpa: "8.98/10",
    },
    {
      institution: "DBATU, Institute of Petrochemical Engineering",
      degree: "Diploma in Information Technology",
      duration: "2019 - 2025",
      gpa: "9.40/10",
    },
  ];

  return (
    <div className="mt-5 mb-5 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold mb-3">Education</h2>
      <ul>
        {education.map((edu, index) => {
          return (
            <li key={index} className="mb-3">
              <h3>{edu.institution}</h3>
              <p>
                {edu.degree} ({edu.duration})
              </p>
              <p>Current GPA: {edu.gpa}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
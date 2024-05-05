import React from "react";
import "./WorkingExperienceCard.css";

export default function WorkingExperienceCard2({ details2 }) {
  return (
    <div className="working-experience-card">
      <h5>{details2.title}</h5>

      <h6>{details2.date}</h6>
      <h6>{details2.place}</h6>

      <ul>
        {details2.about.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

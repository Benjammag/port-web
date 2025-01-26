import React from "react";
import "./WorkingExperienceCard.css";

export default function WorkingExperienceCard4({ details4 }) {
  return (
    <div className="working-experience-card">
      <h5>{details4.title}</h5>

      <h6>{details4.date}</h6>
      <h6>{details4.place}</h6>

      <ul>
        {details4.about.map((item4) => (
          <li key={item4}>{item4}</li>
        ))}
      </ul>
    </div>
  );
}

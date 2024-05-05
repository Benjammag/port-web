import React from "react";
import "./WorkingExperienceCard.css";

export default function WorkingExperienceCard3({ details3 }) {
  return (
    <div className="working-experience-card">
      <h5>{details3.title}</h5>

      <h6>{details3.date}</h6>
      <h6>{details3.place}</h6>

      <ul>
        {details3.about.map((item3) => (
          <li key={item3}>{item3}</li>
        ))}
      </ul>
    </div>
  );
}

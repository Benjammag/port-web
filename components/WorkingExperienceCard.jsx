import React from "react";
import "./WorkingExperienceCard.css";

export default function WorkingExperienceCard({ details, details2 }) {
  return (
    <section>
      <div className="working-experience-card">
        <h5>{details.title}</h5>

        <h6>{details.date}</h6>
        <h6>{details.place}</h6>

        <ul>
          {details.about.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

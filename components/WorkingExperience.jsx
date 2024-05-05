import {
  WORKING_EXPERIENCE,
  WORKING_EXPERIENCE2,
  WORKING_EXPERIENCE3,
  WORKING_EXPERIENCE4,
} from "@/utils/data";
import React from "react";
import WorkingExperienceCard from "./WorkingExperienceCard";
import "./WorkingExperience.css";
import WorkingExperienceCard2 from "./WorkingExperienceCard2";
import WorkingExperienceCard3 from "./WorkingExperienceCard3";
import WorkingExperienceCard4 from "./WorkingExperienceCard4";

export default function WorkingExperience() {
  return (
    <section id="experience" className="working-experience">
      <h5>Working Experience</h5>

      <div className="main">
        <div className="container1">
          <div className="experience-content">
            {WORKING_EXPERIENCE.map((item) => (
              <WorkingExperienceCard key={item.title} details={item} />
            ))}
          </div>

          <div className="experience-content">
            {WORKING_EXPERIENCE2.map((item2) => (
              <WorkingExperienceCard2 key={item2.title} details2={item2} />
            ))}
          </div>
        </div>
        <div className="container2">
          <div className="experience-content">
            {WORKING_EXPERIENCE3.map((item3) => (
              <WorkingExperienceCard3 key={item3.title} details3={item3} />
            ))}
          </div>

          <div className="experience-content">
            {WORKING_EXPERIENCE4.map((item4) => (
              <WorkingExperienceCard4 key={item4.title} details4={item4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

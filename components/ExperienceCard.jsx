import React from "react";
import Image from "next/image";
import "./ExperienceCard.css";

export default function ExperienceCard({ details }) {
  return (
    <section>
      <div className="creative-experience-card">
        <article className="portfolio_item">
          <div className="img-container">
            <Image width={300} height={300} src={details.icon} alt="" />
            <div className="title">
              <h6>{details.title}</h6>
            </div>

            {/* <ul>
            {details.about.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul> */}

            <button className="btn_one">
              <a
                target="_blank"
                rel="noreferrer"
                className="btn_link"
                href={details.git}
              >
                GitHub
              </a>
            </button>
            <button className="btn_two">
              <a
                target="_blank"
                rel="noreferrer"
                className="btn_link"
                href={details.deploy}
              >
                Live Demo
              </a>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

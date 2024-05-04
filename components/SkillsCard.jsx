import Image from "next/image";
import React from "react";
import "./SkillsCard.css";

export default function SkillsCard({ title, iconUrl, isActive, onClick }) {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon">
        <Image width={38} height={38} src={iconUrl} alt={title} />
      </div>

      <span>{title}</span>
    </div>
  );
}

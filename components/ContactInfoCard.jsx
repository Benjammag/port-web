import "./ContactInfoCard.css";
import Image from "next/image";
export default function ContactInfoCard({ iconUrl, text }) {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <Image width={"20"} height={"20"} src={iconUrl} alt={text} />
      </div>

      <p>{text}</p>
    </div>
  );
}

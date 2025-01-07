import Link from "next/link";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import "./ContactMe.css";
export default function ContactMe() {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <Link
            className="mail"
            href="mailto:benjaminagbetuyi@gmail.com"
            target="_blank"
          >
            <ContactInfoCard
              iconUrl="/assets/images/email.png"
              text="benjaminagbetuyi@gmail.com"
            />
          </Link>
          <Link
            className="git"
            href="https://github.com/Benjammag"
            target="_blank"
          >
            <ContactInfoCard
              iconUrl="/assets/images/github.svg"
              text="Github"
            />
          </Link>
          <Link
            className="git"
            href="https://www.linkedin.com/in/benjamag/"
            target="_blank"
          >
            <ContactInfoCard iconUrl="/assets/images/lin.svg" text="LinkedIn" />
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

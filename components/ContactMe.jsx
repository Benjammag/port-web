import Link from "next/link";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import "./ContactMe.css";
export default function ContactMe() {
  return (
    <section id="contact-me" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <Link
            className="mail"
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
          >
            <ContactInfoCard
              iconUrl="/assets/images/email.png"
              text="agbetuyibenjamin4@gmail.com"
            />
          </Link>
          <Link
            className="git"
            href="https://github.com/Benjammag"
            target="_blank"
          >
            <ContactInfoCard
              iconUrl="/assets/images/github.svg"
              text="https://github.com/Benjammag"
            />
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

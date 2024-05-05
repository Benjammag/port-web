import Link from "next/link";
import "./MobileNav.css";

export default function MobileNav({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className={"mobile-menu-container"}>
          <h1 className="logo">Benjamin Agbetuyi</h1>

          <ul>
            <li>
              <Link href="" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="" className="menu-item">
                Experience
              </Link>
            </li>
            <li>
              <Link href="" className="menu-item">
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

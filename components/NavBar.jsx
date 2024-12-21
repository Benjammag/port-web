"use client";
import Link from "next/link";
import "./NavBar.css";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { VscChromeClose, VscMenu } from "react-icons/vsc";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo">
            <h1 className="title">Benjamin Agbetuyi</h1>
          </div>
          <ul>
            <li>
              <Link href="/" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#experience" className="menu-item">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#contact" className="menu-item">
                Contact Me
              </Link>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              <Link
                href="mailto:benjaminagbetuyi@gmail.com"
                className="menu-item"
              >
                Hire Me
              </Link>
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? <VscChromeClose /> : <VscMenu />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

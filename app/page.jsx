"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";
import ContactMe from "@/components/ContactMe";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import CreativeExperience from "@/components/CreativeExperience";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Hero />
        <Skills />
        <CreativeExperience />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

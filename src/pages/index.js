import React from "react";
import {
  // AboutSection,
  ArticlesSection,
  ContactSection,
  // HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  // Section,
  // Animation,
} from "gatsby-theme-portfolio-minimal";
import "../gatsby-theme-portfolio-minimal/theme.css";
import "../gatsby-theme-portfolio-minimal/global.css";

import ThreeScene from "../components/ThreeScene";
import Header from "../components/Header";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        {/* <ThreeScene /> */}

        <ThreeScene />
        <Header />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Blog"]}
        />
        <ProjectsSection sectionId="Contents" heading="Contents" />
        <InterestsSection sectionId="details" heading="Details" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}

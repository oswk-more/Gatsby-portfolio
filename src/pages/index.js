import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
  Section, 
  Animation
} from "gatsby-theme-portfolio-minimal";
import "../gatsby-theme-portfolio-minimal/theme.css"
import "../gatsby-theme-portfolio-minimal/global.css"


export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <Animation type="fadeUp">
                <Section heading="This is a brand new section.">
                    <div class="scrolldown1"><span>Scroll</span></div>
                </Section>
        </Animation>
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog']} />
        <ProjectsSection sectionId="Contents" heading="Contents" />
        <InterestsSection sectionId="details" heading="Details" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}

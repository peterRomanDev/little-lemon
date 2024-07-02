// components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Section from "../components/Section";
import InfoCard from "../components/InfoCard";
import DishCards from "../components/DishCards";
import TestimonialCard from "../components/TestimonialCard";

// hooks
import usePageContent from '../hooks/usePageContent';
import useScroll from "../hooks/useScroll";

export default function HomePage() {
  // homepage / landing page with the majority of the content

  const { sections, infoCards } = usePageContent();

  // scroll to specific sections of the page when the hash changes
  useScroll();

  return (
    <>
      <Header />
      <Main>
        <Section section={sections && sections.heroLandingPage}>
          <InfoCard infoCard={infoCards && infoCards.heroLandingPage} />
        </Section>
        <Section section={sections && sections.menu}>
          <DishCards />
        </Section>
        <Section section={sections && sections.about}>
          <InfoCard infoCard={infoCards && infoCards.about} />
        </Section>
        <Section section={sections && sections.testimonials}>
          <TestimonialCard />
        </Section>
        <Section section={sections && sections.cta}>
          <InfoCard infoCard={infoCards && infoCards.cta} />
        </Section>
      </Main>
      <Footer />
    </>
  );
}
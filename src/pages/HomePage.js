// components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Section from "../components/Section";
import InfoCard from "../components/InfoCard";
import DishCards from "../components/DishCards";
import TestimonialCard from "../components/TestimonialCard";

// hooks
import { usePageContent } from '../hooks/usePageContent';
import useScroll from "../hooks/useScrollTo";

export default function HomePage() {
  const { sections, infoCards } = usePageContent();

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
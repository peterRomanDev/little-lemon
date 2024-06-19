// components
import DishCards from "./DishCards";
import InfoCard from "./InfoCard";
import TestimonialCard from './TestimonialCard';
import Section from './Section';

// hooks
import { usePageContent } from "../hooks/usePageContent";

export default function Main() {
  const { sections, infoCards } = usePageContent();

  return (
    <main>
      <Section section={sections.heroLandingPage}>
        <InfoCard infoCard={infoCards.heroLandingPage} />
      </Section>
      <Section section={sections.menu}>
        <DishCards />
      </Section>
      <Section section={sections.about}>
        <InfoCard infoCard={infoCards.about} />
      </Section>
      <Section section={sections.testimonials}>
        <TestimonialCard />
      </Section>
      <Section section={sections.cta}>
        <InfoCard infoCard={infoCards.cta} />
      </Section>
    </main>
  );
}

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
    </main>
  );
}

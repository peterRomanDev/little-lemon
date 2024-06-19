// components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Section from './components/Section';
import DishCards from "./components/DishCards";
import InfoCard from "./components/InfoCard";
import TestimonialCard from './components/TestimonialCard';
import BookingForm from './components/BookingForm';

// style
import './App.css';

// hooks
import { usePageContent } from './hooks/usePageContent';


function App() {
  const { sections, infoCards } = usePageContent();
  return (
    <div className="App">
      <Header />
      {/* <Main>
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
      </Main> */}
      <Main>
        <Section section={sections.heroReservationPage}>
          <InfoCard infoCard={infoCards && infoCards.heroReservationPage} />
        </Section>
        <Section>
          <BookingForm />
        </Section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;

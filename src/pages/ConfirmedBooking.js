// components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import Section from "../components/Section";

// hooks
import usePageContent from "../hooks/usePageContent";
import useScroll from "../hooks/useScroll";

export default function ConfirmedBooking() {
  // a booking confirmation page

  const { sections, infoCards } = usePageContent();

  // scroll to top when loaded
  useScroll();

  return (
    <>
      <Header />
      <Main>
        <Section section={sections && sections.bookingConfirmed}>
          <InfoCard infoCard={infoCards && infoCards.bookingConfirmed} />
        </Section>
      </Main>
      <Footer />
    </>
  );
}
// components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Section from "../components/Section";
import InfoCard from "../components/InfoCard";

// hooks
import { useEffect } from "react";
import usePageContent from "../hooks/usePageContent";
import useScroll from "../hooks/useScroll";

export default function ConfirmedBooking() {
  // a booking confirmation page

  const { sections, infoCards, isBookingConfirmed, setIsBookingConfirmed } = usePageContent();

  // scroll to top when loaded
  useScroll();

  useEffect(() => {
    // checking if the DOM content has loaded

    // when the DOM content has loaded, make it impossible to access ConfirmedBooking.js by typing it in the URL
    const handleDOMContentLoaded = () => setIsBookingConfirmed(false);

    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded)
    };
  }, []);

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
// components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Section from "../components/Section";
import InfoCard from "../components/InfoCard";
import BookingForm from "../components/BookingForm";

// hooks
import { usePageContent } from '../hooks/usePageContent';
import useScrollToSection from "../hooks/useScrollTo";

export default function BookingPage() {
    const { sections, infoCards } = usePageContent();

    useScrollToSection();

    return (
        <>
            <Header />
            <Main>
                <Section section={sections.heroReservationPage}>
                    <InfoCard infoCard={infoCards && infoCards.heroReservationPage} />
                </Section>
                <Section>
                    <BookingForm />
                </Section>
            </Main>
            <Footer />
        </>
    );
}
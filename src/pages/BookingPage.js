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
import { useReducer } from "react";

export default function BookingPage() {
    const { sections, infoCards } = usePageContent();

    const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
    const availableTimes = (state, action) => {
        const { type } = action;
        switch (type) {
            case 'TIME':
                return ['new time'];
            default:
                return state;
        }
    };

    const [state, updateTimes] = useReducer(availableTimes, initializeTimes());

    useScrollToSection();

    return (
        <>
            <Header />
            <Main>
                <Section section={sections.heroReservationPage}>
                    <InfoCard infoCard={infoCards && infoCards.heroReservationPage} />
                </Section>
                <Section>
                    <BookingForm availableTimes={state.availableTimes} updateTimes={updateTimes} />
                </Section>
            </Main>
            <Footer />
        </>
    );
}
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

export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
export const availableTimes = (state, action) => {
    // const { type } = action;
    // switch (type) {
    //     case 'UPDATE_TIMES':
    //         return updateTimes();
    //     default:
    //         return state;
    // }
    switch (action.type) {
        case 'UPDATE_TIMES':
            return updateTimes(action.date);
        default:
            return state;
    }
};

// Function to update times based on the selected date
export const updateTimes = date => {
    // For now, return the same times regardless of the date
    // This can be modified to return different times based on the date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
};

export default function BookingPage() {
    const { sections, infoCards } = usePageContent();

    const [state, dispatch] = useReducer(availableTimes, initializeTimes());

    useScrollToSection();

    return (
        <>
            <Header />
            <Main>
                <Section section={sections.heroReservationPage}>
                    <InfoCard infoCard={infoCards && infoCards.heroReservationPage} />
                </Section>
                <Section>
                    <BookingForm availableTimes={state.availableTimes} dispatch={dispatch} />
                </Section>
            </Main>
            <Footer />
        </>
    );
}
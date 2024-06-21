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
import { useEffect, useReducer } from "react";

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const today = new Date();

export const initializeTimes = date => fetchAPI(date);

export const updateTimes = date => fetchAPI(date);

const availableTimes = (state, action) => {
    const { type, date } = action;

    switch (type) {
        case 'UPDATE_TIMES':
            return updateTimes(date);
        default:
            return state;
    }
};

export default function BookingPage() {
    const { sections, infoCards } = usePageContent();

    const [state, dispatch] = useReducer(availableTimes, initializeTimes(today));

    useScrollToSection();

    return (
        <>
            <Header />
            <Main>
                <Section section={sections.heroReservationPage}>
                    <InfoCard infoCard={infoCards && infoCards.heroReservationPage} />
                </Section>
                <Section>
                    <BookingForm availableTimes={state} dispatch={dispatch} />
                </Section>
            </Main>
            <Footer />
        </>
    );
}
// components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Section from "../components/Section";
import InfoCard from "../components/InfoCard";
import BookingForm from "../components/BookingForm";

// hooks
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import usePageContent from '../hooks/usePageContent';
import useScroll from "../hooks/useScroll";

const today = new Date();

// a function to generate an array of times
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

// a function to generate an array of times
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

// a function to confirm that the form has been submitted
const submitAPI = function(formData) {
    return true;
};

// a function to initialize the Choose Time input field with an array of times
export const initializeTimes = () => fetchAPI(today);

// a function to update the Choose Time input field with a new array of times
export const updateTimes = date => fetchAPI(date);

// a reducer function updating the times
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
    // a page with the table booking form

    const { sections, infoCards, isBookingConfirmed, setIsBookingConfirmed } = usePageContent();

    // a function to navigate to a different page
    const navigate = useNavigate();

    // a function to handle form submitting
    const submitForm = (e, formData) => {
        const setLocalStorage = data => localStorage.setItem('Form data', data);
        const getLocalStorage = data => localStorage.getItem('Form data');
        const deleteLocalStorage = data => localStorage.removeItem('Form data');

        e.preventDefault();

        if (submitAPI(formData)) {
            // navigate to ConfirmedBooking.js
            setIsBookingConfirmed(true);
            navigate('/booking-confirmed');

            // set data to local storage
            setLocalStorage(formData);
        };
    };

    const [state, dispatch] = useReducer(availableTimes, initializeTimes(today));

    // scroll to top when loaded
    useScroll();

    return (
        <>
            <Header />
            <Main>
                <Section section={sections && sections.heroReservationPage}>
                    <InfoCard infoCard={infoCards && infoCards.heroReservationPage} />
                </Section>
                <Section>
                    <BookingForm availableTimes={state} dispatchTimes={dispatch} submitForm={submitForm} />
                </Section>
            </Main>
            <Footer />
        </>
    );
}
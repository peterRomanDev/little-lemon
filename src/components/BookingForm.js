// hooks
import { useState } from 'react';

// style
import './BookingForm.css';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    // the booking form with the following fields: date, time, amount of guests, occasion

    // the data from the form stored
    const [formData, setFormData] = useState({
        date: '',
        time: '18:00',
        guests: 1,
        occasion: 'Birthday'
    });

    const [emptyDateInput, setEmptyDateInput] = useState(null);
    const [emptyTimeInput, setEmptyTimeInput] = useState(null);
    const [emptyGuestsInput, setEmptyGuestsInput] = useState(null);
    const [incorrectLengthGuestsInput, setIncorrectLengthGuestsInput] = useState(null);
    const [emptyOccasionInput, setEmptyOccasionInput] = useState(null);

    // handle any change to the input field
    const handleChange = e => {
        const { name, value } = e.target;

        // update the form data
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'date') {
            value === '' ? setEmptyDateInput(true) : setEmptyDateInput(false);

            // when a new date is selected, update the list of available times
            dispatch({ type: 'UPDATE_TIMES', date: new Date(value) });
        }

        if (name === 'guests') {

            // the field cannot be empty
            if(value === '') {
                setEmptyGuestsInput(true);
                setIncorrectLengthGuestsInput(true);
            } else {
                setEmptyGuestsInput(false)
                setIncorrectLengthGuestsInput(false);
            }

            // the amount of guests must be between 1 and 10
            value === '1' || value === '2' || value === '3' || value === '4' || value === '5' || value === '6' || value === '7' || value === '8' || value === '9' || value === '10' ? setIncorrectLengthGuestsInput(false) : setIncorrectLengthGuestsInput(true);

            value === '0' || value === '' ? setIncorrectLengthGuestsInput(true) : setIncorrectLengthGuestsInput(false);
        }
    };

    const handleBlur = e => {
        const { name, value } = e.target;

        if (name === 'date') {
            value === '' ? setEmptyDateInput(true) : setEmptyDateInput(false);
        } else if (name === 'time') {
            value === '' ? setEmptyTimeInput(true) : setEmptyTimeInput(false);
        } else if (name === 'guests') {
            value === '' ? setEmptyGuestsInput(true) : setEmptyGuestsInput(false);
        } else if (name === 'occasion') {
            value === '' ? setEmptyOccasionInput(true) : setEmptyOccasionInput(false);
        }
    };

    const handleClick = () => {
        emptyDateInput === null ? setEmptyDateInput(true) : setEmptyDateInput(false);
    };

  return (
    <form
        className="booking-form section-content-centered"
        style={{ display: 'grid', gap: '20px' }}
        onSubmit={(e) => {
            submitForm(e, formData);
        }}
    >
        {/* a date picker to choose a date of booking */}
        <label data-testid="my-test-id" htmlFor="res-date" className="label">Choose date*</label>
        <input
            data-testid="test-input"
            required
            type="date"
            id="res-date"
            name="date"
            className={`input ${emptyDateInput ? "error-border" : ""}`}
            onChange={e => handleChange(e)}
            onBlur={e => handleBlur(e)}
            value={formData.date}
        />
        {/* Client-side validation - error messsage */}
        {emptyDateInput && <p className="error-message">Required Field!</p>}

        {/* a dropdown menu to select an available time */}
        <label htmlFor="res-time" className="label">Choose time*</label>
        <select
            required
            id="res-time"
            name="time"
            className={`select ${emptyTimeInput ? "error-border" : ""}`}
            onChange={e => handleChange(e)}
            onBlur={e => handleBlur(e)}
            value={formData.time}
        >
            {availableTimes && availableTimes.map(availableTime => <option key={availableTime} className="option">{availableTime}</option>)}
        </select>
        {/* Client-side validation - error messsage */}
        {emptyTimeInput && <p className="error-message">Required Field!</p>}

        {/* an input field to enter a number representing the amount of guests */}
        <label htmlFor="guests" className="label">Number of guests*</label>
        <input
            required
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            className={`
                input
                ${emptyGuestsInput ? "error-border" : ""}
                ${incorrectLengthGuestsInput ? "error-border" : ""}
            `}
            onChange={e => handleChange(e)}
            onBlur={e => handleBlur(e)}
            value={formData.guests}
        />
        {/* Client-side validation - error messsage */}
        {emptyGuestsInput && <p className="error-message">Required Field!</p>}
        {incorrectLengthGuestsInput && <p className="error-message">Choose between number 1 and 10!</p>}

        {/* a dropdown menu to select occasion */}
        <label htmlFor="occasion" className="label">Occasion*</label>
        <select
            required
            id="occasion"
            name="occasion"
            className={`select ${emptyOccasionInput ? "error-border" : ""}`}
            onChange={e => handleChange(e)}
            onBlur={e => handleBlur(e)}
            value={formData.occasion}
        >
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        {/* Client-side validation - error messsage */}
        {emptyOccasionInput && <p className="error-message">Required Field!</p>}

        {/* submit button */}
        <input
            type="submit"
            className={`
                btn
                ${
                    ((emptyDateInput || emptyDateInput === null) &&
                    (emptyTimeInput || emptyTimeInput === null) &&
                    (emptyGuestsInput || emptyGuestsInput === null) &&
                    (incorrectLengthGuestsInput || incorrectLengthGuestsInput === null) &&
                    (emptyOccasionInput || emptyOccasionInput === null)
                ) ? "disabled" : ""
                }
                `}
            value="Make Your reservation"
            onClick={handleClick}
        />
    </form>
  );
}
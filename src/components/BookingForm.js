// style
import './BookingForm.css';

// hooks
import { useReducer, useState } from 'react';

export default function BookingForm({ availableTimes, dispatchTimes, submitForm }) {
    // the booking form with the following fields: date, time, amount of guests, occasion

    const requiredSign = '*';

    const [formData, setFormData] = useState({
        // the data from the form stored

        date: '',
        time: '18:00',
        guests: 1,
        occasion: ''
    });

    const errorsInitialState = {
        // initial state of input field errors and their error messages

        date: {
            noValue: {
                isError: false,
                errorMsg: 'Required field!'
            }
        },
        time: {
            noValue: {
                isError: false,
                errorMsg: 'Required field!'
            }
        },
        guests: {
            incorrectValue: {
                isError: false,
                errorMsg: 'Enter a number from 1 to 10!'
            },
        }
    };

    const handleBlur = e => {
        // reacting to when an input field is blurred

        const { name: input, value } = e.target;
        const noValue = value === '';
        const invalidNumber = value < 1 || value > 10;

        switch (input) {
            case 'date':
                // if the date input field does not have a value, an error message is shown
                noValue ? dispatchError({ type: 'ERR_DATE_NO_VALUE' }) : dispatchError({ type: 'NOERR_DATE_NO_VALUE' });
                break;
            case 'time':
                // if the time input field does not have a value, an error message is shown
                noValue ? dispatchError({ type: 'ERR_TIME_NO_VALUE' }) : dispatchError({ type: 'NOERR_TIME_NO_VALUE' });
                break;
            case 'guests':
                // if the value of the guests input field is not a number, an error message is shown
                noValue ? dispatchError({ type: 'ERR_GUESTS_INCORRECT_VALUE' }) : dispatchError({ type: 'NOERR_GUESTS_INCORRECT_VALUE' });

                // if the value of the guests input field is not a number from 1 to 10, an error message is shown
                invalidNumber ? dispatchError({ type: 'ERR_GUESTS_INCORRECT_VALUE' }) : dispatchError({ type: 'NOERR_GUESTS_INCORRECT_VALUE' });
                break;
            default:
                return null;
        }
    };

    const handleChange = e => {
        // reacting to when the value of an input field changes

        const { name: input, value } = e.target;
        const noValue = '';
        const invalidType = isNaN(parseInt(value));
        const invalidNumber = value < 1 || value > 10;

        setFormData(prev => ({ ...prev, [input]: value }));

        switch (input) {
            case 'date':
                // if the date input field does not have a value, an error message is shown
                noValue ? dispatchError({ type: 'ERR_DATE_NO_VALUE' }) : dispatchError({ type: 'NOERR_DATE_NO_VALUE' });

                // when a new date is selected, update the list of available times
                dispatchTimes({ type: 'UPDATE_TIMES', date: new Date(value) });
                break;
            case 'time':
                // if the time input field does not have a value, an error message is shown
                noValue ? dispatchError({ type: 'ERR_TIME_NO_VALUE' }) : dispatchError({ type: 'NOERR_TIME_NO_VALUE' });
                break;
            case 'guests':
                // if the value of the guests input field is not a number, an error message is shown
                invalidType ? dispatchError({ type: 'ERR_GUESTS_INCORRECT_VALUE' }) : dispatchError({ type: 'NOERR_GUESTS_INCORRECT_VALUE' });

                // if the value of the guests input field is not a number from 1 to 10, an error message is shown
                invalidNumber ? dispatchError({ type: 'ERR_GUESTS_INCORRECT_VALUE' }) : dispatchError({ type: 'NOERR_GUESTS_INCORRECT_VALUE' });
                break;
            default:
                return null;
        }
    };

    const errorReducer = (state, action) => {
        const { type } = action;

        switch (type) {
            case 'ERR_DATE_NO_VALUE':
                return { ...state, date: { ...state.date, noValue: { ...state.date.noValue, isError: true } } };
            case 'NOERR_DATE_NO_VALUE':
                return { ...state, date: { ...state.date, noValue: { ...state.date.noValue, isError: false } } };
            case 'ERR_TIME_NO_VALUE':
                return { ...state, time: { ...state.time, noValue: { ...state.time.noValue, isError: true } } };
            case 'NOERR_TIME_NO_VALUE':
                return { ...state, time: { ...state.time, noValue: { ...state.time.noValue, isError: false } } };
            case 'ERR_GUESTS_INCORRECT_VALUE':
                return { ...state, guests: { ...state.guests, incorrectValue: { ...state.guests.incorrectValue, isError: true } } };
            case 'NOERR_GUESTS_INCORRECT_VALUE':
                return { ...state, guests: { ...state.guests, incorrectValue: { ...state.guests.incorrectValue, isError: false } } };
            default:
                return state;
        }
    };

    const [errors, dispatchError] = useReducer(errorReducer, errorsInitialState);

  return (
    <form
        className="booking-form section-content-centered"
        onSubmit={(e) => submitForm(e, formData)}
    >
        <div className="input-wrapper">
        {/* input field - a date picker to choose a date of booking */}
            <label data-testid="my-test-id" htmlFor="res-date" className="label">Choose date{requiredSign}</label>
            <input
                data-testid="test-input"
                required
                type="date"
                id="res-date"
                name="date"
                className={`input ${errors.date.noValue.isError ? "error-border" : ""}`}
                onBlur={e => handleBlur(e)}
                onChange={e => handleChange(e)}
                value={formData.date}
            />
            {/* Client-side validation - error messsage */}
            {errors.date.noValue.isError && <p className="error-message">{errors.date.noValue.errorMsg}</p>}
        </div>

        <div className="input-wrapper">
            {/* input field - a dropdown menu to select an available time */}
            <label htmlFor="res-time" className="label">Choose time{requiredSign}</label>
            <select
                required
                id="res-time"
                name="time"
                className={`select ${errors.time.noValue.isError ? "error-border" : ""}`}
                onBlur={e => handleBlur(e)}
                onChange={e => handleChange(e)}
                value={formData.time}
            >
                {availableTimes && availableTimes.map(availableTime => <option key={availableTime} className="option">{availableTime}</option>)}
            </select>
            {/* Client-side validation - error messsage */}
            {errors.time.noValue.isError && <p className="error-message">{errors.time.noValue.errorMsg}</p>}
        </div>

        <div className="input-wrapper">
            {/* input field - an input field to enter a number representing the amount of guests */}
            <label htmlFor="guests" className="label">Number of guests{requiredSign}</label>
            <input
                required
                type="number"
                placeholder="1"
                id="guests"
                name="guests"
                className={`input ${errors.guests.incorrectValue.isError ? "error-border" : ""}`}
                onBlur={e => handleBlur(e)}
                onChange={e => handleChange(e)}
                value={formData.guests}
            />
            {/* Client-side validation - error messsage */}
            {errors.guests.incorrectValue.isError && <p className="error-message">{errors.guests.incorrectValue.errorMsg}</p>}
        </div>

        <div className="input-wrapper">
            {/* input field - a dropdown menu to select occasion */}
            <label htmlFor="occasion" className="label">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                className="select"
                onChange={e => handleChange(e)}
                value={formData.occasion}
            >
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
        </div>

        <div className="input-wrapper">
            {/* submit button */}
            <input
                type="submit"
                className="btn"
                value="Make Your reservation"
                disabled={
                    formData.date === '' ||
                    formData.time === '' ||
                    formData.guests === '' ||
                    errors.date.noValue.isError ||
                    errors.time.noValue.isError ||
                    errors.guests.incorrectValue.isError
                }
            />
        </div>
    </form>
  );
}
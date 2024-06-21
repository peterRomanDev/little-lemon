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

    // handle any change to the input field
    const handleChange = e => {
        const { name, value } = e.target;

        // update the form data
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'date') {
            // when a new date is selected, update the list of available times
            dispatch({ type: 'UPDATE_TIMES', date: new Date(value) });
        }
    };

  return (
    <form
        className="booking-form section-content-centered"
        style={{ display: 'grid', gap: '20px' }}
        onSubmit={() => submitForm(formData)}
    >
        {/* a date picker to choose a date of booking */}
        <label data-testid="my-test-id" htmlFor="res-date" className="label">Choose date*</label>
        <input
            data-testid="test-input"
            required
            type="date"
            id="res-date"
            name="date"
            className="input"
            onChange={e => handleChange(e)}
            value={formData.date}
        />
        {/* a dropdown menu to select an available time */}
        <label htmlFor="res-time" className="label">Choose time*</label>
        <select
            required
            id="res-time"
            name="time"
            className="select"
            onChange={e => handleChange(e)}
            value={formData.time}
        >
            {availableTimes && availableTimes.map(availableTime => <option key={availableTime} className="option">{availableTime}</option>)}
        </select>
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
            className="input"
            onChange={e => handleChange(e)}
            value={formData.guests}
        />
        {/* a dropdown menu to select occasion */}
        <label htmlFor="occasion" className="label">Occasion*</label>
        <select
            required
            id="occasion"
            name="occasion"
            className="select"
            onChange={e => handleChange(e)}
            value={formData.occasion}
        >
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        {/* submit button */}
        <input
            type="submit"
            className="btn"
            value="Make Your reservation"
        />
    </form>
  );
}
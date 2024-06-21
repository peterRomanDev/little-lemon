// hooks
import { useState } from 'react';

// style
import './BookingForm.css';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [formData, setFormData] = useState({
        date: '',
        time: '18:00',
        guests: 1,
        occasion: 'Birthday'
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'date') {
            dispatch({ type: 'UPDATE_TIMES', date: new Date(value) });
        }
    };

  return (
    <form
        className="booking-form section-content-centered"
        style={{ display: 'grid', gap: '20px' }}
        onSubmit={() => submitForm(formData)}
    >
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
        <input
            type="submit"
            className="btn"
            value="Make Your reservation"
        />
    </form>
  );
}
// hooks
import { useState } from 'react';

// style
import './BookingForm.css';

export default function BookingForm() {
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']);

    const [formData, setFormData] = useState({
        date: '',
        time: '18:00',
        guests: 1,
        occasion: 'Birthday'
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
    };

  return (
    <form
        className="booking-form section-content-centered"
        style={{ display: 'grid', gap: '20px' }}
        // style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
        onSubmit={e => handleSubmit(e)}
    >
        <label htmlFor="res-date" className="label">Choose date*</label>
        <input
            type="date"
            id="res-date"
            name="date"
            className="input"
            onChange={e => handleChange(e)}
            value={formData.date}
        />
        <label htmlFor="res-time" className="label">Choose time*</label>
        <select
            id="res-time"
            name="time"
            className="select"
            onChange={e => handleChange(e)}
            value={formData.time}
        >
            {availableTimes && availableTimes.map(availableTime => <option key={availableTime} className="option">{availableTime}</option>)}
            {/* <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option> */}
        </select>
        <label htmlFor="guests" className="label">Number of guests*</label>
        <input
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
        <label htmlFor="occasion" className="label">Occasion</label>
        <select
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
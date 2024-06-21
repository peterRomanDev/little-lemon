// React Testing Library
import { render, screen } from '@testing-library/react';

// components
import BookingForm from "../components/BookingForm";

test('renders input field with specific attributes', () => {
    // checking for specific attributes of input fields
    render(<BookingForm />);

    const inputField = screen.getByTestId('test-input');

    expect(inputField).toHaveAttribute('required');
});
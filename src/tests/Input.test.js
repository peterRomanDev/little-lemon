import { render, screen } from '@testing-library/react';

import BookingForm from "../components/BookingForm";

test('renders input field with correct attributes', () => {
    render(<BookingForm />);

    const inputField = screen.getByTestId('test-input');

    expect(inputField).toHaveAttribute('required');
});
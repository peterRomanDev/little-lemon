// React Testing Library
import { render, screen } from "@testing-library/react";

// components
import BookingForm from '../components/BookingForm';

test('renders a piece of static text from the booking form', () => {
    // checking for static text in the booking form
    render(<BookingForm />);

    const headingElement = screen.getByText("Choose date*");

    expect(headingElement).toBeInTheDocument();
});
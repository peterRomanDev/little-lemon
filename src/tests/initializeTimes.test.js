// components
import { initializeTimes } from "../pages/BookingPage";

test('checks if the initial times are a not an empty array', () => {
    // checks if the initial times are a not an empty array
    const arrayItems = initializeTimes();

    expect(Array.isArray(arrayItems)).toBe(true);
    expect(arrayItems.length).toBeGreaterThan(0);
});
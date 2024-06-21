import { initializeTimes } from "../pages/BookingPage";

test('returns a non-empty array', () => {
    const arrayItems = initializeTimes();

    expect(Array.isArray(arrayItems)).toBe(true);
    expect(arrayItems.length).toBeGreaterThan(0);
});
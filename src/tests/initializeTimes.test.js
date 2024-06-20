import { initializeTimes } from "../pages/BookingPage";

test('returns the correct expected value', () => {
    expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'])
});
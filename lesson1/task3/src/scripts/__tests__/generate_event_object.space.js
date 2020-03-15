import { transformHourFormat } from '../generate_event_object';

it ('should get tranformed hour', () => {
    const result = transformHourFormat(22);
    expect(result).toEqual(10);
});
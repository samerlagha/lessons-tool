import { sum, mult } from '../calculator';

it ('should return stored logs', () => {
    const result = sum(2,4);
    expect(result).toEqual(6);
});

it ('should save log message', () => {
    const result = mult(2,4);
    expect(result).toEqual(8);
});

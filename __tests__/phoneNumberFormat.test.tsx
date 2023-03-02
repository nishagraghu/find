import  phoneNumberFormat  from '../src/utils/phonNumberFormat'

describe('phoneNumberFormat', () => {
  it('should format a 10-digit phone number with spaces correctly', () => {
    const inputNumber = '+918867460746';
    const expectedOutput = '+91 8867460746';
    expect(phoneNumberFormat(inputNumber)).toEqual(expectedOutput);
  });



 


});

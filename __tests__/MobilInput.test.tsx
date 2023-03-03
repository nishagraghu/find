// import React from 'react';
// import {render, fireEvent} from '@testing-library/react-native';
// import MobilInput from '../src/components/MobilInput';
// import { useNavigation } from '@react-navigation/native';
// jest.mock('@react-navigation/native');
// describe('MobilInput', () => {
//   it('should submit phone number when submit button is pressed', async () => {
//     const navigateMock = jest.fn();
    
//      useNavigation.mockReturnValue({ navigate: navigateMock });

//     const {getByPlaceholderText, getByText} = render(<MobilInput />);
//     const phoneNumberInput = getByPlaceholderText('Phone Number');
//     fireEvent(phoneNumberInput, 'changeText', '1234567890');
//     const submitButton = getByText('SEND');
//     fireEvent.press(submitButton);
//     // expect some assertion here
//   });
//   it('error on submit button is pressed ', async () => {
   
    
     
//     const {getByPlaceholderText, getByText, getByTestId} = render(<MobilInput />);
//     const submitButton = getByText('SEND');
//     const phoneInput = getByPlaceholderText('Phone Number');
//     fireEvent.changeText(phoneInput, '123456789');
//     fireEvent.press(submitButton);
//     const errorMessage = getByTestId('error-msg');
//     expect(errorMessage).toBeDefined(); // Check that the element is defined
    
//   });
// });

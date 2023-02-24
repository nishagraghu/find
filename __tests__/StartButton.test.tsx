import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';

import StartButton from '../src/components/StartButton';

jest.mock('@react-navigation/native');


describe('StartButton component', () => {
  test('calls navigation.navigate on button press', () => {
    const navigateMock = jest.fn();
    
    useNavigation.mockReturnValue({ navigate: navigateMock });

    const { getByTestId } = render(<StartButton />);

    fireEvent.press(getByTestId('start-button'));

    expect(navigateMock).toHaveBeenCalledWith('Mobil');
  });
});

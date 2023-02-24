import React from 'react';
import { render } from '@testing-library/react-native';

import StartButton from '../../src/components/StartButton'



jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
      ...actualNav,
      useNavigation: jest.fn(),
    };
  });
describe('StartButton component', () => {
  test('renders correctly', () => {
    const { toJSON } = render(<StartButton />);
    expect(toJSON()).toMatchSnapshot();
  });
});

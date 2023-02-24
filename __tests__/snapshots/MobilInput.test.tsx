import React from 'react';
import { render } from '@testing-library/react-native';

import MobilInput from '../../src/components/MobilInput'



jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
      ...actualNav,
      useNavigation: jest.fn(),
    };
  });
describe('MobilInput component', () => {
  test('renders correctly', () => {
    const { toJSON } = render(<MobilInput />);
    expect(toJSON()).toMatchSnapshot();
  });
});

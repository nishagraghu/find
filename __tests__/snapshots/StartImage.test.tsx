import React from 'react';
import { render } from '@testing-library/react-native';

import StartImage from '../../src/components/StartImage'


describe('StartImage component', () => {
  test('renders correctly', () => {
    const { toJSON } = render(<StartImage />);
    expect(toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react-native';

import Welcome from '../../src/components/Welcome'


describe('Welcome component', () => {
  test('renders correctly', () => {
    const { toJSON } = render(<Welcome />);
    expect(toJSON()).toMatchSnapshot();
  });
});

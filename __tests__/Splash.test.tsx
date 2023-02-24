import React from 'react';
import { render } from '@testing-library/react-native';
import Welcome from '../src/components/Welcome'

describe('Welcome component', () => {
  test('renders welcome text', () => {
    const { getByText } = render(<Welcome />);

    const welcomeText = getByText(/welcome/i);
   
    expect(welcomeText).toBeDefined();
  });

  test('renders get started text', () => {
    const { getByText } = render(<Welcome />);
    const getStartedText = getByText(/get started/i);
    expect(getStartedText).toBeDefined();
  });

  test('renders start button text', () => {
    const { getByText } = render(<Welcome />);
    const startButtonText = getByText(/Press the Start/i);
    expect(startButtonText).toBeDefined();
  });
 });

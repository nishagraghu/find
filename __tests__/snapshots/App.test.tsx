import React from 'react';
import { render,cleanup } from '@testing-library/react-native';

import App from '../../App'
jest.mock('@react-navigation/native-stack', () => {
    const mockCreateStackNavigator = jest.fn();
    return { createNativeStackNavigator: mockCreateStackNavigator };
  });
jest.mock('@react-navigation/native');

describe('App component', () => {
    afterEach(cleanup);
  test('renders correctly', () => {
    const navigateMock = jest.fn();
    type MockNavigation = { navigate: typeof navigateMock };
    const useNavigationMock = jest.fn();
    useNavigationMock.mockReturnValue({ navigate: navigateMock } as MockNavigation);

    const { toJSON } = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders without crashing', () => {
    render(<Loader />);
  });
});

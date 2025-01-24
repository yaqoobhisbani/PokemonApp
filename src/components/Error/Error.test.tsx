import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Error from './Error';
import {STRINGS} from '../../constants/strings';

describe('Error Component', () => {
  it('renders without crashing', () => {
    render(<Error />);
  });

  it('displays the correct error message', () => {
    render(<Error />);
    expect(screen.getByText(STRINGS.SOMETHING_WENT_WRONG)).toBeTruthy();
  });

  it('has correct accessibility label', () => {
    render(<Error />);
    const container = screen.getByRole('alert');
    expect(container).toHaveProp('accessible', true);
    expect(container).toHaveProp(
      'accessibilityLabel',
      STRINGS.SOMETHING_WENT_WRONG,
    );
  });
});

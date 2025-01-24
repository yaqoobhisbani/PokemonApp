import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Chip from './Chip';

describe('Chip Component', () => {
  it('renders without crashing', () => {
    render(<Chip label="Test Chip" />);
  });

  it('renders the correct label', () => {
    render(<Chip label="My Custom Label" />);
    expect(screen.getByText('My Custom Label')).toBeTruthy();
  });

  it('renders empty label when no label is passed', () => {
    render(<Chip label="" />);
    expect(screen.getByText('')).toBeTruthy();
  });
});

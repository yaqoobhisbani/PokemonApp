import React from 'react';
import {screen, waitFor} from '@testing-library/react-native';
import {renderWithProviders} from '../../util/testing';
import PokemonDetails from './PokemonDetails';
import {server} from '../../mocks/server';
import {http, HttpResponse} from 'msw';

const BASE_URL = process.env.BASE_URL;

// Start and stop MSW server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => jest.useFakeTimers());

describe('Pokemon Details Screen', () => {
  const route = {params: {id: 1}};

  test('renders the loader while fetching data', async () => {
    // @ts-ignore
    renderWithProviders(<PokemonDetails route={route} />);
    expect(screen.getByTestId('loader')).toBeTruthy();
  });

  test('handles API errors gracefully and shows an error message', async () => {
    server.use(
      http.get(`${BASE_URL}/pokemon/1`, () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: 'Internal Server Error!',
        });
      }),
    );
    // @ts-ignore
    renderWithProviders(<PokemonDetails route={route} />);
    await waitFor(() => expect(screen.getByTestId('error')).toBeTruthy());
  });

  test('displays Pokemon Details when the API call succeeds', async () => {
    // @ts-ignore
    renderWithProviders(<PokemonDetails route={route} />);
    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeTruthy());
    expect(screen.getByText('7')).toBeTruthy();
    expect(screen.getByText('69')).toBeTruthy();
    expect(screen.getByText('grass')).toBeTruthy();
    expect(screen.getByText('poison')).toBeTruthy();
  });
});

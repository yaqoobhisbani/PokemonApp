import React from 'react';
import {screen, waitFor, fireEvent} from '@testing-library/react-native';
import {renderWithProviders} from '../../util/testing';
import Pokemons from './Pokemons';
import {server} from '../../mocks/server';
import {http, HttpResponse} from 'msw';
import {BASE_URL} from '@env';

// Start and stop MSW server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => jest.useFakeTimers());

describe('Pokemons Screen', () => {
  test('renders the loader while fetching data', async () => {
    // @ts-ignore
    renderWithProviders(<Pokemons />);
    expect(screen.getByTestId('loader')).toBeTruthy();
  });

  test('handles API errors gracefully and shows an error message', async () => {
    server.use(
      http.get(`${BASE_URL}/pokemon`, () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: 'Internal Server Error!',
        });
      }),
    );

    // @ts-ignore
    renderWithProviders(<Pokemons />);

    await waitFor(() => expect(screen.getByTestId('error')).toBeTruthy());
  });

  test('displays a list of Pokemon when the API call succeeds', async () => {
    // @ts-ignore
    renderWithProviders(<Pokemons />);

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeTruthy());
    expect(screen.getByText('ivysaur')).toBeTruthy();
  });

  test('navigates to PokemonDetails when a card is pressed', async () => {
    const mockNavigate = jest.fn();
    const mockNavigation = {navigate: mockNavigate};

    // @ts-ignore
    renderWithProviders(<Pokemons navigation={mockNavigation} />);

    await waitFor(() => expect(screen.getByText('bulbasaur')).toBeTruthy());

    const bulbasaurCard = screen.getByText('bulbasaur');
    fireEvent.press(bulbasaurCard);

    expect(mockNavigate).toHaveBeenCalledWith('PokemanDetails', {id: '1'});
  });
});

import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import PokemonCard from './PokemonCard';

describe('PokemonCard Component', () => {
  const item: PokemonListItem = {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  };

  const imageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif';

  const onPressMock = jest.fn();
  const testID = 'pokemon-card';

  it('renders without crashing', () => {
    render(
      <PokemonCard item={item} imageUrl={imageUrl} onPress={onPressMock} />,
    );
  });

  it('calls onPress when the card is pressed', () => {
    render(
      <PokemonCard
        item={item}
        imageUrl={imageUrl}
        onPress={onPressMock}
        testID={testID}
      />,
    );

    fireEvent.press(screen.getByTestId(testID));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('uses the testID prop if provided', () => {
    render(
      <PokemonCard
        item={item}
        imageUrl={imageUrl}
        onPress={onPressMock}
        testID={testID}
      />,
    );
    const card = screen.getByTestId(testID);
    expect(card).toBeTruthy();
  });
});

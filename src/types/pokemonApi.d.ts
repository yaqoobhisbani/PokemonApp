type PokemonListItem = {
  name: string;
  url: string;
};

type PokemonsList = {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItem[];
};

type PokemonType = {
  slot: number;
  type: {name: string; url: string};
};

type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: {other: {'official-artwork': {front_default: string}}};
};

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '@env';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getPokemons: builder.query<PokemonsList, void>({
      query: () => '/pokemon',
    }),
    getPokemonById: builder.query<PokemonDetails, string>({
      query: id => `/pokemon/${id}`,
    }),
  }),
});

export const {useGetPokemonsQuery, useGetPokemonByIdQuery} = pokemonApi;

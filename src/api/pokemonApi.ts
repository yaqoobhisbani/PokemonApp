import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: process.env.BASE_URL}),
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

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (build) => ({
    qetPokemonByName: build.query({
      query: (name) => `pokemon${name}`,
    }),
  }),
});


export const {useLazyQetPokemonByNameQuery} = pokemonApi
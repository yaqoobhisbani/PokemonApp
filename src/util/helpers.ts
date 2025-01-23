export const getPokemonIdByUrl = (url: string) => {
  const chunks = url.split('/');
  const id = chunks[chunks.length - 2];
  return id;
};

export const getPokemonImageUrl = (id: string) => {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
  return url;
};

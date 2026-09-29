export async function getPokemon(pokeId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon #${pokeId}: ${response.status}`); 
  }

  const pokeData = await response.json()
  const { id, name : rawName } = pokeData
  const artwork = pokeData.sprites?.other?.['official-artwork']?.front_default
  const name = capitaliseName(rawName)

  return { id, name, artwork}
}

function capitaliseName(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
}
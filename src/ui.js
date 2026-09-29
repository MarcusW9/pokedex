import { getPokemon } from "./getPokemon";

export const renderPokemon = async () => {
    const elementPokedexContainer = document.querySelector(".pokedex-container")
    const pokedexUpperLimit = 151

    for (let i = 1; i <= pokedexUpperLimit; i++) {
        const currentPokemon = await getPokemon(i);
        const elementPokemonEntry =  document.createElement("div")

        const elementPokemonName = document.createElement("p")
        elementPokemonName.textContent = currentPokemon.name

        const elementPokemonNumber = document.createElement("p")
        elementPokemonNumber.textContent = currentPokemon.id

        const currentPokemonSprite = currentPokemon.artwork
        const img = document.createElement("img")
        img.src = currentPokemonSprite

        // Add everything into an entry
        elementPokemonEntry.append(img, elementPokemonName, elementPokemonNumber)

        // Add to page
        elementPokedexContainer.append(elementPokemonEntry)
    }
}
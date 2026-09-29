import { getPokemon } from './getPokemon.js'

describe('getPokemon(id)', () => {
  beforeEach(() => {
    // Reset mocks before every test run
    vi.restoreAllMocks()
  })

  it('fetches and returns pokemon data for a valid ID', async () => {
    // 1. Mock a successful API response
    const mockPokemonData = { id: 25, name: 'pikachu' }
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue(mockPokemonData)
    })

    // 2. Call the function
    const result = await getPokemon(25)

    // 3. Assertions
    expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/25')
    expect(result).toEqual(mockPokemonData)
  })

  it('throws an error when the request fails', async () => {
    // 1. Mock a failed response (e.g., 404 Not Found)
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404
    })

    // 2. Assert that calling getPokemon rejects with an error
    await expect(getPokemon(9999)).rejects.toThrow('Failed to fetch Pokemon #9999: 404')
  })
})
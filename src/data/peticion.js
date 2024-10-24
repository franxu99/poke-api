export async function pokemonList() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
    const pokemons = []
    try {
        const response = await fetch(url)
        const data = await response.json()
        for (const pokemon of data.results) {
            const res = await fetch(pokemon.url);  
            const dataRes = await res.json();  
            const pokemonData = 
            {
                name: dataRes.name,
                img: dataRes.sprites['front_default']
            }
            pokemons.push(pokemonData)
        }
        return pokemons
        } catch(error){
        console.log('Error fetching Pokemon list: ', error)
        return []
    }
}
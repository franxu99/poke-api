<script setup>
  import { ref } from 'vue';
  import BoxPokemon from './components/BoxPokemon.vue';
  import { pokemonList } from './data/peticion';  // Asegúrate de que esta función esté definida correctamente

  const searchQuery = ref('');  // Almacena el valor del input de búsqueda
  const pokemons = ref([]);  // Almacena todos los Pokémon
  const filteredPokemons = ref([]);  // Almacena los Pokémon que coinciden con la búsqueda

  // Función para cargar la lista inicial de Pokémones
  const loadPokemons = async () => {
    pokemons.value = await pokemonList();
    filteredPokemons.value = pokemons.value;  // Inicialmente muestra todos
  };

  // Llama a la función de carga cuando el componente se monte
  loadPokemons();

  // Función para buscar un Pokémon por su nombre
  const searchPokemon = () => {
    const query = searchQuery.value.toLowerCase();  // Convierte el input a minúsculas para evitar problemas de capitalización
    if (query) {
      filteredPokemons.value = pokemons.value.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query)
      );
    } else {
      // Si no hay texto en el input, muestra todos los Pokémon
      filteredPokemons.value = pokemons.value;
    }
  };
</script>

<template>
  <div class="containerWeb">
    <h1 style="text-align: center; color: yellow;">
      Pokedex
    </h1>
    <div class="containerInput">
      <input type="text" v-model="searchQuery" placeholder="Escribe tu pokemon" style="padding: 0.5rem; width: 15vw;">
      <input type="button" value="Buscar" @click="searchPokemon" style="padding: 0.5rem; width: 5vw; color: black; cursor: pointer;">
    </div>
    <div class="containerBox">
      <BoxPokemon v-for="pokemon in filteredPokemons" :key="pokemon.name" :pokemon="pokemon"/>
    </div>
  </div>
</template>

<style scoped>
  .containerWeb{
    height: 100%;
    width: 100%;
  }
  .containerInput{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1vw;
  }
  .containerBox{
    padding: 2%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5vw;
  }
  
</style>

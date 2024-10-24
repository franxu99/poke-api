<template>
        <div class="item">
            <img v-bind:src="pokemon.img" alt="" style="background-color: white; padding: 3rem; border-radius: 3%;">
            <h3 style="color: black;">{{ pokemon.name }}</h3>
        </div>
</template>

<script setup>
    defineProps({
    pokemon: {
      type: Object,
      required: true
    }
  });

</script>

<style scoped>
    .item {
        background-color: lightblue;
        padding: 20px;
        text-align: center;
        border: 1px solid #ddd;
        }
</style>
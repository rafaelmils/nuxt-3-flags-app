<template>
  <div class="country-container mx-4 my-4">
    <NuxtLink :to="`/detail/${country.alpha3Code.toLowerCase()}`">
    <img class="flag-image" :src="country?.flags?.svg" alt="lall">
    <div class="info-container">
      <h2 class="font-bold mb-2">{{ country.name }}</h2>
      <p>Population: {{ country.population }}</p>
      <p>Region: {{ country.region }}</p>
      <p>Capital: {{ country.capital }}</p>
    </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import Country from '@/types/Country'

const props = defineProps({
  country: {
      type: Object as PropType<Country>,
      required: true
    },
})
</script>

<style lang="css" scoped>
  .country-container {
    max-width: 400px;
    border: 1px solid grey;
    border-radius: 5px;
    overflow: hidden;
    /* margin: 0; */
  }

  .info-container {
    padding: 20px 20px;
  }

 .flag-image {
   object-fit: cover;
   height: 240px;
   width: 350px;

 } 
</style>
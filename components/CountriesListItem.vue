<template>
  <div class="country-container mx-4 my-8">
    <img class="flag-image" :src="country?.flags?.svg" alt="lall">
    <div class="info-container">
      <h2 class="font-bold mb-2">{{ country.name }}</h2>
      <p>Population: {{ country.population }}</p>
      <p>Region: {{ country.region }}</p>
      <p>Capital: {{ country.capital }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import Country from '@/types/Country'

export default defineComponent({
  props: {
    country: {
      type: Object as PropType<Country>,
      required: true
    },
  },
  setup(props) {
  },
})
</script>


<style lang="css" scoped>
  .country-container {
    max-width: 400px;
    border: 1px solid grey;
    border-radius: 5px;
  }

  .info-container {
    padding: 20px 20px;
  }

 .flag-image {
   object-fit: cover;
   height: 215px;
   width: 350px;
 } 
</style>
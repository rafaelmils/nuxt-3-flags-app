<template>
  <CountriesList :countries="countries"></CountriesList>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  async setup(props) {
    const { data } = await useFetch('https://restcountries.com/v2/all')
    const countries = data

    return { countries }
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
<template>
  <h2>RAAAAAF</h2>
  <!-- <h2 class="text-3xl font-bold underline">
    Page visits: {{ countries }}
  </h2> -->
  <div v-for="country in countries" :key="country.numericCode">
    <div class="country-container">
      <img :src="country.flags.svg" alt="lall">
      <div class="info-container">
        <h3>{{ country.name }}</h3>
        <p>Population: {{ country.population }}</p>
        <p>Region: {{ country.region }}</p>
        <p>Capital: {{ country.capital }}</p>
    </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch('https://restcountries.com/v2/all')
const countries = data
</script>

<style lang="css" scoped>
  .country-container {
    max-width: 400px;
    border: 1px solid grey;
    border-radius: 5px;
  }

  .info-container {
    padding: 0 10px;
  }

</style>
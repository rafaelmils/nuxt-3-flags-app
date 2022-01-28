<template>
  <button @click="$router.back()"></button>
  <div class="flex">
    <img class="detail-image px-4 py-4" :src="country?.flags?.svg" alt="detail-image">
    <div class="flex flex-col px-32 pt-16 py-8 country-details-container">
      <h2 class="country-name text-3xl pb-4 font-semibold">{{ country.name }}</h2>
      <div class="flex">
        <div class="country-details">
          <p><span>Native name: </span> {{country?.nativeName}}</p>
          <p><span>Population: </span> {{country?.nativeName}}</p>
          <p><span>Region: </span> {{country?.region}}</p>
          <p><span>Sub Region: </span> {{country?.subregion}}</p>
          <p><span>Capital: </span> {{country?.capital}}</p>
        </div>
        <div class="country-details lg:ml-24">
          <p><span>Top Level Domain: </span> {{country.topLevelDomain?.[0]}}</p>
          <p><span>Currencies: </span> {{country.currencies.map(item => item.name).join(', ')}}</p>
          <p><span>Languages: </span> {{country.languages.map(item => item.name).join(', ')}}</p>
        </div>
      </div>
      <div class="flex country-details mt-8">
        <p><span class=" mr-2">Border countries: </span></p>
        <span class="border-countries">Belgium</span>
      </div>
      
    </div>
  </div>
</template>


<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import Country from '@/types/Country'
  import fetchCountries from '@/api/fetchCountries'
  
  const route = useRoute()
  const slug = route.params._slug;
  const countriesTemp = await fetchCountries();
  const countries = ref(countriesTemp)
  const { data: country } = await useFetch(`https://restcountries.com/v2/alpha/${slug}`)

  defineExpose({
    countries
  })
</script>

<style lang="css" scoped>
  .country-details p {
    padding: 2px 0;
  }
  .country-details p span {
    @apply font-semibold
  }
  .border-countries {
    @apply border-2 leading-7 h-8 px-6 mx-1 rounded-sm;
    box-shadow: 0px 0px 10px rgba(0,0,0,.1);
  }
  .detail-image {
    width: 700px;
    height: auto;
  }
</style>

<template>
  <FilterActions
    @queryUpdated="updateResults"
    :regions="regions.value"
  />
  <CountriesList :query="query ?? ''"></CountriesList>
</template>


<script lang="ts" setup>
  import { ref } from 'vue'
  // import Country from '@/types/Country'
  import fetchCountries from '@/api/fetchCountries'
  
  const query = ref('')
  const regions = ref<String[]>([])
  const {data: countries} = await fetchCountries()

  const getCountries = computed(() => {
    return query !== ''
      ? countries.value.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
      : countries.value
  })

  function updateResults(str: string) {
    query.value = str
  }

  defineExpose({
    getCountries,
    countries,
    updateResults,
    query,
    regions
})
</script>

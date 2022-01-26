<template>
  <FilterActions
    @queryUpdated="updateSearchQuery"
    @dropdownUpdated="updateRegionSelected"
    :regions="regions.value"
  />
  <CountriesList :countries="filterCountries" />
</template>


<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import Country from '@/types/Country'
  import fetchCountries from '@/api/fetchCountries'
  
  const query = ref('')
  const regionSelected = ref('')
  let regions = reactive<String[]>([])
  const {data: countries} = await fetchCountries()
  regions.value = getUniqueListBy(countries.value, 'region')

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

  const getCountries = computed(() => {
    return query.value !== '' && regionSelected.value !== ''
      ? countries.value
        .filter((country: Country) => country.name.toLowerCase().includes(query.value.toLowerCase()))
        .filter((country: Country) => regionSelected.value !== '' && country.region.toLowerCase() === regionSelected.value.toLowerCase())
      : countries.value
  })

  const filterCountries = computed(() => {
    const kal = filterByQuery(countries.value)
    const kal2 = filterByRegion(kal)
    return kal2;
  })

  function filterByQuery(countriesArray: Country[]) {
     if (query.value.length) {
       return countriesArray.filter((country: Country) => country.name.toLowerCase().includes(query.value.toLowerCase()))
     }
     return countriesArray
  }

  function filterByRegion(countriesArray: Country[]) {
    if (regionSelected.value.length) {
       return countriesArray.filter((country: Country) => country.region.toLowerCase().includes(regionSelected.value.toLowerCase()))
     }
     return countriesArray
  }

  function updateSearchQuery(str: string) {
    query.value = str
  }

  function updateRegionSelected(str: string) {
    regionSelected.value = str
  }

  defineExpose({
    getCountries,
    filterCountries,
    countries,
    updateSearchQuery,
    updateRegionSelected,
    query,
    regions
})
</script>

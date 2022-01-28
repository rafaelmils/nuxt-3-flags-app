<template>
  <FilterActions
    @queryUpdated="updateSearchQuery"
    @dropdownUpdated="updateRegionSelected"
    :regions="regions"
  />
  <CountriesList :countries="filterCountries" />
</template>


<script lang="ts" setup>
  
  const {
    countries,
    regions,
    filterCountries,
    updateSearchQuery,
    updateRegionSelected
  } = await useCountries()

  defineExpose({
    countries,
    regions,
    filterCountries,
    updateSearchQuery,
    updateRegionSelected
})
</script>

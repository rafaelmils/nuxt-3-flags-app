<template>
  <FilterActions @queryUpdated="updateResults" :regions="regions.value"></FilterActions>
  <CountriesList :query="query ?? ''"></CountriesList>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import CountriesListItem from '@/components/CountriesListItem.vue'
import fetchCountries from '@/api/fetchCountries'

export default {
  async setup(props) {
    const query = ref('')
    let regions = ref<String[]>([])
    const {data} = await fetchCountries()
    regions.value = data

    function updateResults(str: string) {
      query.value = str
    }

    return {
      updateResults,
      query,
      regions
      }
  },
}
</script>

import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import Country from '@/types/Country'
import fetchCountries from '@/api/fetchCountries'

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}

export default async function ()  {
  const query = ref('')
  const regionSelected = ref('')

  const countries = await fetchCountries();
  const regions = getUniqueListBy(countries, 'region')

  const filterCountries = computed(() => {
    const kal = filterByQuery(countries)
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

  return {
    countries,
    regions,
    filterCountries,
    updateSearchQuery,
    updateRegionSelected
  }
}

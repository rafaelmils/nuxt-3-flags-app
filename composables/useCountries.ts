import { ref, reactive } from 'vue'
import Country from '@/types/Country'
import fetchCountries from '@/api/fetchCountries'

export const useCats = async () => {
  const query = ref('')
  const regionSelected = ref('')
  let regions = reactive<String[]>([])
  const {data: countries} = await fetchCountries()
  regions.value = getUniqueListBy(countries.value, 'region')

  function getUniqueListBy(arr, key) {
    const k = [...new Map(arr.map(item => [item[key], item])).values()]
    return k;
  }

  const filterCountries = computed(() => {
    const queryFiltered = filterByQuery(countries.value)
    const regionFiltered = filterByRegion(queryFiltered)
    return regionFiltered;
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
    filterCountries,
    countries,
    updateSearchQuery,
    updateRegionSelected,
    query,
    regions
  }
}
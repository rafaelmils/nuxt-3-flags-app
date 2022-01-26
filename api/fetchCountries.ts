const fetchCountries = async () => {
  const { data } = await useFetch('https://restcountries.com/v2/all')
  return {data}
  }

  export default fetchCountries
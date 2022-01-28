const fetchCountries = async () => {
  const request = await fetch("https://restcountries.com/v2/all");
  return await request.json();
}

export default fetchCountries;
import { ref } from "vue";

export const Status = {
  IDLE: "IDLE",
  RUNNING: "RUNNING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useCountries = async () => {
  async function fetchCountries() {
    status.value = Status.RUNNING;
    try {
      const res = await fetch("https://restcountries.com/v2/all", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        status.value = Status.ERROR;
      }
      const json = await res.json();
      status.value = Status.SUCCESS;
      return json;
    } catch (err) {
      status.value = Status.ERROR;

      throw new Error(err);
    }
  }

  async function refetchCountries() {
    countries.value = await fetchCountries();
  }

  let status = ref(Status.IDLE);
  let countries = ref(await fetchCountries());

  return {
    countries,
    status,
  };
}
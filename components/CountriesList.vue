<template>
  <div class="flex flex-wrap justify-center">
    <p>{{ cats }}</p>
    <transition-group name="list">
      <CountriesListItem
        v-for="country in getCountries"
        :key="country.numericCode"
        :country="country"
      />
      </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, watch, ref } from 'vue'
import Country from '@/types/Country'
import CountriesListItem from '@/components/CountriesListItem.vue'
import fetchCountries from '@/api/fetchCountries'

const props = defineProps({
  query: {
      type: String,
      required: false,
  }
})

const {query} = toRefs(props);
const {data} = await fetchCountries()
const countries = data

const getCountries = computed(() => {
  return props.query !== ''
    ? countries.value.filter(country => country.name.toLowerCase().includes(props.query.toLowerCase()))
    : countries.value
})


defineExpose({
      getCountries,
      countries,
    })

</script>

<style lang="css" scoped>
.list-move {
    transition: all 1.5s;
  }
</style>
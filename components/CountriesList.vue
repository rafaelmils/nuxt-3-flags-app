<template>
  <!-- <div class="grid grid-cols-4 gap-14"> -->
  <div class="flex flex-wrap justify-center">
    <CountriesListItem
      v-for="country in countries"
      :key="country.numericCode"
      :country="country"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import Country from '@/types/Country'
import CountriesListItem from '@/components/CountriesListItem.vue'

export default defineComponent({
  props: {
    countries: {
      type: Array as PropType<Country[]>,
      required: true
    },
  },
  setup(props) {
  },
})
</script>

<style lang="css" scoped>
</style>
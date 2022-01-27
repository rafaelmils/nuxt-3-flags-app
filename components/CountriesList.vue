<template>
  <div class="flex flex-wrap justify-center">
    <transition-group name="list">
      <CountriesListItem
        v-for="country in countries"
        :key="country.numericCode"
        :country="country"
      />
      </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import Country from '@/types/Country'
import fetchCountries from '@/api/fetchCountries'

const props = defineProps({
  countries: {
      type: Array as PropType<Country[]>,
      required: true,
  },
})
</script>

<style lang="css" scoped>
.list-move {
    transition: all 1.5s;
  }
</style>
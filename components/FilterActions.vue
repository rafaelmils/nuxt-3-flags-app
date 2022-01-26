<template>
<div class="flex justify-between">
  <div class="search-input w-60 p-2  m-2 border-2 rounded">
    <span class="inline-flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></span>
    <input
      v-model="searchQuery"
      @input="handleChange"
      type="text"
      placeholder="Search for a country..."
      >
  </div>
  <div id="v-model-select" class="demo">
  <select class="w-60 p-2 m-2 border-2 rounded" v-model="selected">
    <option disabled value="">Please select one</option>
    <option v-for="(region) in regions" :key="region.alpha3Code" :value="region.region">
      {{region.region}}
      </option>
  </select>
</div>
</div>
</template>

<script lang="ts" setup>
import { defineComponent, PropType, computed } from 'vue'
import Country from '@/types/Country'

const props = defineProps({
  regions: {
      type: Array as PropType<Country[]>,
      required: false,
    }
})

const emit = defineEmits(['queryUpdated'])

const {regions} = toRefs(props);
function handleChange(e: HTMLInputElement) {
    emit('queryUpdated', e.target.value);
}

const getRegions = computed(() => {
  const tempArray = []
  props.regions.forEach(element => {
    if (!tempArray.includes(element.region.toLowerCase())) {
    tempArray.push(element.region);
  }
  })
  return tempArray;
})

    
</script>

<style lang="css" scoped>
.search-input {
  box-shadow: 0px 0px 10px rgba(0,0,0,.1);
}
</style>
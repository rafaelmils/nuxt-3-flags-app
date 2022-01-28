<template>
<div class="flex flex-col justify-between md:ml-18 md:mr-18 lg:ml-22 lg:mr-22 xl:ml-4 xl:mr-4 lg:flex-row">
  <div class="flex search-input self-center h-12 w-60 p-2 border-2 rounded">
    <span class="inline-flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </span>
    <input
      @input="handleQueryChange"
      type="text"
      placeholder="Search for a country..."
      class="ml-2"
      >
  </div>
  <div class="flex self-center">
    <select
      class="w-60 p-2 h-12 pr-2 border-2 rounded"
      v-model="selected"
      @change="handleDropdownChange(selected)"
      >
      <option disabled value="">Please select one</option>
      <option v-for="(region) in regions" :key="region.alpha3Code" :value="region.region">
        {{region.region}}
        </option>
        <option value="">None</option>
    </select>
  </div>
</div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue'
import Country from '@/types/Country'

const props = defineProps({
  regions: {
      type: Array as PropType<Country[]>,
      required: true,
    }
})
const selected = ref<string>('');
const emit = defineEmits(['queryUpdated', 'dropdownUpdated'])

function handleQueryChange(e: HTMLInputElement) {
    emit('queryUpdated', e.target.value);
}

function handleDropdownChange(selectedRegion: string) {
  console.log(selectedRegion);
    emit('dropdownUpdated', selectedRegion);
}
</script>

<style lang="css" scoped>
.search-input {
  box-shadow: 0px 0px 10px rgba(0,0,0,.1);
}
</style>
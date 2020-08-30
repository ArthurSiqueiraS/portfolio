<template>
  <div class="py-2">
    <div class="d-flex justify-space-between align-center">
      <h3>{{ title }}</h3>
      <div class="body-2 font-weight-bold">
        {{ $representers.localeDate(startDate)
        }}<span v-if="endDate"> - {{ $representers.localeDate(endDate) }}</span>
      </div>
    </div>
    <h5 v-if="subtitle">{{ subtitle }}</h5>
    <p class="mt-1 text-justify">
      <slot />
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    startDate: {
      type: String,
      default: null,
    },
    endDate: {
      type: String,
      default: null,
    },
  },
}
</script>

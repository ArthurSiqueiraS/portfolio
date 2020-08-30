<template>
  <div class="py-4">
    <h4 class="mb-2 text-center">{{ title }}</h4>
    <div class="caption accent--text">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

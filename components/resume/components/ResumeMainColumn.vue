<template>
  <div class="py-3">
    <h2 class="primary--text text-uppercase mb-2">{{ title }}</h2>
    <div class="body accent--text">
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

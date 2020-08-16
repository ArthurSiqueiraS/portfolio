<template>
  <div>
    <v-card
      v-for="(highlight, index) in highlights"
      :key="index"
      class="d-flex my-8"
      :class="index % 2 == 0 ? '' : 'flex-row-reverse'"
      tile
      flat
      height="200px"
    >
      <img height="100%" width="auto" contain :src="highlight.image" />
      <div class="pa-8" :class="index % 2 == 0 ? '' : 'text-right'">
        <div class="title pb-4 primary--text">
          {{ highlight.title }}
        </div>
        <div class="accent--text">
          {{ highlight.text }}
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    highlights: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

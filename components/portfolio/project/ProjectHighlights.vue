<template>
  <div>
    <v-card
      v-for="(highlight, index) in highlights"
      :key="index"
      class="d-flex my-0 my-sm-8 align-center"
      :class="even(index) ? '' : 'flex-row-reverse'"
      tile
      flat
      :height="mobile ? '' : '200px'"
    >
      <img
        v-show="!mobile"
        :height="$vuetify.breakpoint.smOnly ? '75%' : '100%'"
        width="auto"
        contain
        :style="'border: 1px solid ' + $vuetify.theme.currentTheme.primary"
        :src="highlight.image"
      />
      <div
        class="pa-8 text-center"
        :class="even(index) ? 'text-sm-left' : 'text-sm-right'"
      >
        <div class="align-center title pb-4 primary--text">
          <v-icon v-show="even(index)" color="accent" left>{{
            highlight.icon
          }}</v-icon
          >{{ highlight.title
          }}<v-icon v-show="!even(index)" color="accent" right>{{
            highlight.icon
          }}</v-icon>
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
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xsOnly
    },
  },
  methods: {
    even(n) {
      return this.mobile || n % 2 === 0
    },
  },
}
</script>

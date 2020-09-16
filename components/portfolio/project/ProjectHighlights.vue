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
      <v-img
        v-show="!mobile && highlight.image"
        :height="$vuetify.breakpoint.smOnly ? '75%' : '100%'"
        width="auto"
        :style="{
          border: '1px solid ' + $vuetify.theme.currentTheme.primary,
          maxWidth: '300px',
        }"
        :src="highlight.image"
        :class="even(index) ? 'mr-8' : 'ml-8'"
      />
      <div
        class="py-8 text-center"
        :class="even(index) ? 'text-sm-left' : 'text-sm-right'"
      >
        <div class="title pb-4 primary--text">
          <v-icon
            v-show="even(index)"
            style="bottom: 2px;"
            color="accent"
            left
            >{{ highlight.icon }}</v-icon
          >{{ highlight.title
          }}<v-icon
            v-show="!even(index)"
            style="bottom: 2px;"
            color="accent"
            right
            >{{ highlight.icon }}</v-icon
          >
        </div>
        <div
          class="accent--text text-justify"
          :style="{
            fontSize: '16px',
            textAlignLast: even(index) ? 'left' : 'right',
          }"
        >
          {{ highlight.description }}
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

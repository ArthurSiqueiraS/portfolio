<template>
  <v-sheet id="landing" style="position: relative;">
    <div
      style="
        width: 100%;
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translate(-50%, -80%);
        z-index: 1;
      "
      class="d-flex flex-column align-center"
    >
      <v-img
        :width="$vuetify.breakpoint.mobile ? '150px' : '200px'"
        :src="$logo()"
      />
      <div class="accent--text text-center text-uppercase mt-10 mb-4 mx-md-4">
        <h1>
          Arthur Siqueira
        </h1>
        <h2>{{ $portfolio().title }}</h2>
      </div>
    </div>
    <div style="height: 100vh;">
      <vue-particles
        v-if="animations"
        :key="key"
        style="height: 100%;"
        class="secondary"
        :color="this.$vuetify.theme.currentTheme.primary"
        :particle-opacity="darkTheme ? 0.6 : 0.3"
        :line-opacity="darkTheme ? 0.4 : 0.2"
        :particles-number="mobile ? 50 : 35"
        :shape-type="darkTheme ? 'circle' : 'triangle'"
        :particle-size="darkTheme ? 7 : 9"
        :lines-color="this.$vuetify.theme.currentTheme.accent"
        :lines-distance="175"
        :move-speed="darkTheme ? 3 : 5"
        click-mode="repulse"
      >
      </vue-particles>
      <v-img
        v-else
        height="100%"
        :src="darkTheme ? staticBackgroundDark : staticBackgroundLight"
      />
    </div>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      key: 0,
      staticBackgroundLight: require('@/assets/images/static_landing_light.png'),
      staticBackgroundDark: require('@/assets/images/static_landing_dark.png'),
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    darkTheme() {
      return this.$vuetify.theme.dark
    },
    animations() {
      return this.$store.state.portfolio.animations
    },
  },
  watch: {
    darkTheme() {
      this.key++
    },
  },
}
</script>

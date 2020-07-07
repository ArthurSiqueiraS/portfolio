<template>
  <v-card id="landing">
    <div
      style="
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      "
      class="d-flex flex-column align-center"
    >
      <v-img
        max-width="50%"
        :src="require('@/assets/images/portfolio_logo.png')"
      />
      <div class="accent--text text-uppercase mt-10 mb-4 mx-4">
        <h1>
          Arthur Siqueira
        </h1>
        <h2>Full-stack developer</h2>
      </div>
      <v-img
        width="200"
        height="auto"
        max-width="40%"
        :gradient="`to top, ${$helpers.hexToRGB(
          $vuetify.theme.currentTheme.primary,
          0.05
        )}, ${$helpers.hexToRGB($vuetify.theme.currentTheme.secondary, 0.15)}`"
        class="rounded-circle mt-16 elevation-8"
        :src="require('@/assets/images/landing_profile.jpg')"
      />
    </div>
    <vue-particles
      :key="key"
      style="height: 100vh;"
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
  </v-card>
</template>
<script>
export default {
  data: () => ({
    key: 0,
  }),
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    darkTheme() {
      return this.$vuetify.theme.dark
    },
  },
  watch: {
    darkTheme() {
      this.key++
    },
  },
}
</script>

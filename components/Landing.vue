<template>
  <v-sheet id="landing" style="position: relative;">
    <div
      class="d-flex align-center ml-2 mt-2"
      style="position: absolute; z-index: 999;"
    >
      <StandardButton class="px-0" @click="animations = !animations">
        <v-switch
          v-model="animations"
          readonly
          hide-details
          dense
          class="ma-0"
        />
        {{ $t('animations') }}
      </StandardButton>
    </div>
    <div
      style="
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -80%);
        z-index: 1;
      "
      class="d-flex flex-column align-center"
    >
      <v-img
        max-width="50%"
        :src="require('@/assets/images/portfolio_logo.png')"
      />
      <div class="accent--text text-center text-uppercase mt-10 mb-4 mx-4">
        <h1>
          Arthur Siqueira
        </h1>
        <h2>{{ $t('title') }}</h2>
      </div>
      <!-- <v-img
        width="200"
        height="auto"
        max-width="40%"
        :gradient="`to top, ${$helpers.hexToRGB(
          $vuetify.theme.currentTheme.primary,
          0.05
        )}, ${$helpers.hexToRGB($vuetify.theme.currentTheme.secondary, 0.15)}`"
        class="rounded-circle mt-16 elevation-8"
        :src="require('@/assets/images/landing_profile.jpg')"
      /> -->
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
      animations: !this.$getCookie('static_landing'),
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
  },
  watch: {
    darkTheme() {
      this.key++
    },
    animations(on) {
      if (on) {
        this.$deleteCookie('static_landing')
      } else {
        this.$setCookie('static_landing', true)
      }
    },
  },
}
</script>

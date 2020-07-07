<template>
  <v-app>
    <v-toolbar
      color="transparent"
      :absolute="landing"
      flat
      width="100%"
      :style="{ zIndex: landing && 999 }"
    >
      <div style="width: 100%;" class="d-flex justify-center">
        <StandardButton
          v-for="item in navigationMenu"
          :key="item.name"
          :small="$vuetify.breakpoint.xsOnly"
        >
          {{ item.name }}
        </StandardButton>
      </div>
      <v-tooltip color="primary" left>
        <template v-slot:activator="{ on }">
          <StandardButton
            class="mr-4"
            style="position: absolute; right: 0;"
            :small="$vuetify.breakpoint.xsOnly"
            icon
            v-on="on"
            @click="$vuetify.theme.dark = !$vuetify.theme.dark"
          >
            <v-icon :small="$vuetify.breakpoint.xsOnly">
              wb_sunny
            </v-icon>
          </StandardButton>
        </template>
        Alternar tema
      </v-tooltip>
    </v-toolbar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      landing: this.$route.path === '/',
      navigationMenu: [
        { name: 'Home' },
        { name: 'Portfolio' },
        { name: 'About me' },
      ],
    }
  },
}
</script>

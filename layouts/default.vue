<template>
  <v-app>
    <v-toolbar
      prominent
      color="transparent"
      :absolute="landing"
      flat
      width="100%"
      :style="{ zIndex: landing && 999 }"
    >
      <div
        style="width: 100%; height: 100%;"
        class="d-flex justify-center align-center"
      >
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
    <v-footer
      :color="darkTheme ? 'secondary' : 'accent'"
      class="white--text d-flex justify-center pa-10"
      absolute
      app
    >
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
      <div class="d-flex flex-column align-center">
        <div class="title mb-2">Find me on:</div>
        <div>
          <v-tooltip
            v-for="network in networks"
            :key="network.name"
            top
            :color="network.color"
          >
            <template v-slot:activator="{ on }">
              <StandardButton
                icon
                x-large
                :href="network.link"
                target="_blank"
                text-color="white"
                :text-hover-color="network.color"
                v-on="on"
              >
                <v-icon large>{{ network.icon }}</v-icon>
              </StandardButton>
            </template>
            {{ network.name }}
          </v-tooltip>
        </div>
        <div class="my-2">
          <v-icon color="white" class="mr-1">mail</v-icon
          >asesilva@inf.ufpel.edu.br
        </div>
        <v-img
          width="100"
          class="mt-5"
          :src="require('@/assets/images/portfolio_logo.png')"
        />
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiGithub, mdiGitlab, mdiLinkedin, mdiInstagram } from '@mdi/js'

export default {
  data() {
    return {
      landing: this.$route.path === '/',
      navigationMenu: [
        { name: 'Home' },
        { name: 'Portfolio' },
        { name: 'About me' },
      ],
      networks: [
        {
          icon: mdiGithub,
          link: 'https://github.com/arthursiqueiras',
          name: 'Github',
          color: 'black',
        },
        {
          icon: mdiGitlab,
          link: 'https://gitlab.com/ArthurSiqueiraS',
          name: 'Gitlab',
          color: '#FC6D27',
        },
        {
          icon: mdiLinkedin,
          link: 'https://www.linkedin.com/in/arthur-siqueira-e-silva-8283bb18a',
          name: 'Linkedin',
          color: '#0076B4',
        },
        {
          icon: mdiInstagram,
          link: 'https://instagram.com/arthursiqueiras',
          name: 'Instagram',
          color: '#C1558B',
        },
      ],
    }
  },
  computed: {
    darkTheme() {
      return this.$vuetify.theme.dark
    },
  },
}
</script>

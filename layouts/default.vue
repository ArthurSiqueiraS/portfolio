<template>
  <v-app>
    <v-toolbar
      id="toolbar"
      prominent
      color="transparent"
      :absolute="landing"
      flat
      width="100%"
      :style="{ zIndex: landing && 999 }"
    >
      <div
        class="d-flex align-center mr-4 mt-2"
        style="position: absolute; right: 0;"
      >
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-tooltip color="primary" left>
              <template v-slot:activator="tooltipProps">
                <StandardButton
                  class="px-1 mx-2"
                  v-on="{ ...on, ...tooltipProps.on }"
                  >{{ $i18n.locale }}</StandardButton
                >
              </template>
              {{ $t('chooseLanguage') }}
            </v-tooltip>
          </template>
          <v-list class="py-0">
            <v-list-item
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="primary--text"
            >
              {{ locale.name }}
            </v-list-item>
          </v-list>
        </v-menu>
        <v-tooltip color="primary" left>
          <template v-slot:activator="{ on }">
            <StandardButton class="px-1 mx-2" v-on="on" @click="changeTheme">
              <v-icon :small="$vuetify.breakpoint.xsOnly">
                wb_sunny
              </v-icon>
            </StandardButton>
          </template>
          {{ $t('changeTheme') }}
        </v-tooltip>
      </div>
    </v-toolbar>
    <v-main>
      <nuxt />
    </v-main>
    <v-divider v-if="darkTheme" class="mx-12" />
    <v-footer
      :color="darkTheme ? 'secondary' : 'accent'"
      class="white--text d-flex justify-center pa-10"
    >
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
      <div class="d-flex flex-column align-center">
        <div class="title mb-2">{{ $t('findMe') }}</div>
        <div id="networks">
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
        <a
          :href="'mailto:' + email"
          class="my-2 text-decoration-none white--text"
        >
          <v-icon color="white" class="mr-1">mail</v-icon>{{ email }}
        </a>
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
      landing: this.$route.name.includes('index'),
      email: 'dev.arthusiqueira@gmail.com',
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
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$setCookie('theme', this.darkTheme ? 'dark' : 'light')
    },
  },
}
</script>
<style lang="scss">
#toolbar {
  .v-input__slot {
    background: transparent;
  }
}
</style>

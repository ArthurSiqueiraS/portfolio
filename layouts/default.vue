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
      <div class="d-flex align-center" style="position: absolute; right: 0;">
        <v-tooltip color="primary" left>
          <template v-slot:activator="{ on }">
            <StandardButton
              :small="$vuetify.breakpoint.xsOnly"
              icon
              v-on="on"
              @click="changeTheme"
            >
              <v-icon :small="$vuetify.breakpoint.xsOnly">
                wb_sunny
              </v-icon>
            </StandardButton>
          </template>
          {{ $t('changeTheme') }}
        </v-tooltip>
        <v-hover v-slot:default="{ hover }">
          <v-select
            id="lang-select"
            solo
            hide-details
            dense
            flat
            append-icon="none"
            class="rounded-pill text-center"
            style="width: 120px;"
            :value="$i18n.locale"
            :items="$i18n.locales"
            item-text="name"
            item-value="code"
            @change="(locale) => $router.push(switchLocalePath(locale))"
          >
            <template v-slot:selection="{ item }">
              <div
                class="v-btn"
                :class="hover ? 'primary--text' : 'accent--text'"
                style="transtion: 0.1s; font-size: 0.85rem;"
              >
                {{ item.name }}
              </div>
            </template>
          </v-select>
        </v-hover>
      </div>
    </v-toolbar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer
      :color="darkTheme ? 'secondary' : 'accent'"
      class="white--text d-flex justify-center pa-10"
    >
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
      <div class="d-flex flex-column align-center">
        <div class="title mb-2">{{ $t('findMe') }}</div>
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
      landing: this.$route.name.includes('index'),
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
    navigationMenu() {
      return [
        { name: this.$t('home') },
        { name: this.$t('portfolio') },
        { name: this.$t('about') },
      ]
    },
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

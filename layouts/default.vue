<template>
  <v-app>
    <v-row
      no-gutters
      class="hide-print pa-4"
      :style="{ position: 'absolute', width: '100%', zIndex: landing && 999 }"
    >
      <v-col cols="6" md="2">
        <StandardButton
          v-if="home"
          class="px-0"
          @click="animations = !animations"
        >
          <v-switch
            v-model="animations"
            readonly
            hide-details
            dense
            class="ma-0"
          />
          {{ $t('animations') }}
        </StandardButton>
        <n-link v-else :to="localePath('/')" class="d-flex">
          <img height="40px" :src="$logo()" />
        </n-link>
      </v-col>
      <v-col
        cols="12"
        md="8"
        style="width: 100%; height: 100%;"
        class="d-flex order-last order-md-0 justify-center align-center mt-4 mt-md-0"
      >
        <div v-if="home">
          <StandardButton
            v-for="item in navigationMenu"
            :key="item.id"
            :small="$vuetify.breakpoint.xsOnly"
            @click="navigate(item)"
          >
            {{ $t('navItems.' + item.id) }}
          </StandardButton>
          <StandardButton
            :small="$vuetify.breakpoint.xsOnly"
            :to="localePath('/resume')"
          >
            {{ $t('navItems.resume') }}
          </StandardButton>
        </div>
      </v-col>
      <v-col cols="6" md="2" class="d-flex align-center justify-end">
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
      </v-col>
    </v-row>
    <v-main>
      <nuxt />
    </v-main>
    <v-divider v-if="darkTheme" class="mx-12" />
    <div class="hide-print">
      <v-footer
        :color="darkTheme ? 'secondary' : 'accent'"
        class="white--text d-flex justify-center pa-10 pb-5"
      >
        <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->
        <div class="d-flex flex-column align-center">
          <v-img width="100" class="mb-5" :src="$logo()" />
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
          <a :href="'mailto:' + email" class="my-2 white--text">
            <v-icon color="white" class="mr-1">mail</v-icon>{{ email }}
          </a>

          <a
            href="https://github.com/ArthurSiqueiraS/portfolio"
            target="_blank"
            class="mt-8 caption text-center white--text d-flex align-center"
          >
            <v-icon small color="white" class="mr-1">{{ mdiGithub }}</v-icon>
            {{ $t('madeWith') }}
          </a>
        </div>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
import { mdiGithub, mdiGitlab, mdiLinkedin, mdiInstagram } from '@mdi/js'

export default {
  data() {
    return {
      landing: this.$route.name.includes('index'),
      mdiGithub,
      animations: !this.$getCookie('static_landing'),
    }
  },
  computed: {
    home() {
      return this.$route.path === '/' || this.$route.path === '/pt'
    },
    navigationMenu() {
      return [{ id: 'about' }, { id: 'portfolio' }, { id: 'technologies' }]
    },
    darkTheme() {
      return this.$vuetify.theme.dark
    },
    email() {
      return this.$portfolio().email
    },
    networks() {
      const portfolio = this.$portfolio()
      let linkedin = portfolio.linkedin
      if (this.$i18n.locale === 'pt') linkedin += '/?locale=pt_BR'

      return [
        {
          icon: mdiLinkedin,
          link: 'https://www.linkedin.com/in/' + linkedin,
          name: 'Linkedin',
          color: '#0076B4',
        },
        {
          icon: mdiGithub,
          link: 'https://github.com/' + portfolio.github,
          name: 'Github',
          color: 'black',
        },
        {
          icon: mdiGitlab,
          link: 'https://gitlab.com/' + portfolio.gitlab,
          name: 'Gitlab',
          color: '#FC6D27',
        },
        {
          icon: mdiInstagram,
          link: 'https://instagram.com/' + portfolio.instagram,
          name: 'Instagram',
          color: '#C1558B',
        },
      ]
    },
  },
  watch: {
    animations: {
      immediate: true,
      handler(on) {
        this.$setAnimations(on)
      },
    },
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.$setCookie('theme', this.darkTheme ? 'dark' : 'light')
    },
    navigate(link) {
      const el = document.getElementById(link.id)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    },
  },
}
</script>

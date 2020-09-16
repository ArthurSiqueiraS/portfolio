import colors from 'vuetify/es5/util/colors'

const dev = process.env.NODE_ENV === 'development'

const themes = {
  light: {
    primary: '#41B883',
    accent: '#35495E',
    secondary: '#FFFFFF',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
  },
  dark: {
    primary: '#51c8e8',
    accent: '#FFFFFF',
    secondary: '#20232A',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
  },
}

export default {
  mode: 'spa',
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
  env: {
    backendUrl: dev
      ? 'http://localhost:3000'
      : 'https://portfolio-arthur-siqueira.herokuapp.com',
  },
  loading: { color: themes.light.accent },
  head: {
    titleTemplate: process.env.npm_package_title,
    title: process.env.npm_package_title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/helpers',
    '@/plugins/representers',
    '@/plugins/vueParticles',
    '@/plugins/cookieFactory',
    '@/plugins/portfolio',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'G-DE034J4T7K',
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    'nuxt-i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', file: 'en-US.js', name: 'English' },
      { code: 'pt', file: 'pt-BR.js', name: 'Português' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'lang/',
  },
  router: {
    middleware: 'portfolio',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseUrl: 'https://portfolio-arthur-siqueira.herokuapp.com',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      themes,
    },
    defaultAssets: {
      font: {
        family: 'Quicksand',
      },
      icons: 'md',
    },
  },
  webfontloader: {
    google: {
      families: ['Quicksand'],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}

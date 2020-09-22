export default function ({ store, app, $axios, $vuetify }, inject) {
  async function fetchPortfolio(locale) {
    const response = await $axios.get(process.env.backendUrl + '/portfolio', {
      params: { locale },
    })
    store.commit('portfolio/set', response.data)
  }

  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    fetchPortfolio(newLocale)
  }

  inject('portfolio', () => {
    return store.state.portfolio.data
  })

  inject('logo', () => {
    const theme = $vuetify.theme.isDark ? 'dark' : 'light'
    return store.state.portfolio.logo[theme]
  })

  inject('setAnimations', (on) => {
    store.commit('portfolio/setAnimations', on)

    if (on) {
      app.$deleteCookie('static_landing')
    } else {
      app.$setCookie('static_landing', true)
    }
  })
}

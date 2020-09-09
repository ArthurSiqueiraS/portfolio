export default function ({ store, app, $axios }, inject) {
  async function fetchPortfolio(locale) {
    const response = await $axios.get('http://localhost:3000/portfolio', {
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
}

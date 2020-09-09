export default async function ({ app, store, $axios }) {
  const response = await $axios.get('http://localhost:3000/portfolio', {
    params: { locale: app.i18n.locale },
  })
  store.commit('portfolio/set', response.data)
}

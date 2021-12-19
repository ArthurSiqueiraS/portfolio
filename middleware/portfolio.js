export default async function ({ app, store, $axios }) {
  $axios.onRequest((config) => {
    config.params.frontPageTechnologies = [
      'Vue.js',
      'React.js',
      'Ruby on Rails',
      'Git',
      'Nuxt.js',
      'Adobe Photoshop',
    ]
  })
  const response = await $axios.get(process.env.backendUrl + '/portfolio', {
    params: { locale: app.i18n.locale },
  })
  store.commit('portfolio/set', response.data)
}

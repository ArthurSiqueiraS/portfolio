export default async function ({ app, store, $axios }) {
  $axios.onRequest((config) => {
    config.params.frontPageTechnologies = [
      'Vue.js',
      'Nuxt.js',
      'React.js',
      'Ruby on Rails',
      'MongoDB',
      'Adobe Photoshop',
    ]
  })
  console.log('t', process.env.backendUrl)
  const response = await $axios.get(process.env.backendUrl + '/portfolio', {
    params: { locale: app.i18n.locale },
  })
  store.commit('portfolio/set', response.data)
}

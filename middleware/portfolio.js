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

  const response = await $axios.get('http://localhost:3000/portfolio', {
    params: { locale: app.i18n.locale },
  })
  store.commit('portfolio/set', response.data)
}
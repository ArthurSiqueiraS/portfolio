export default function (app, inject) {
  function getCookie(name) {
    const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
  }

  function setCookie(name, value, days) {
    const d = new Date()
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
    document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString()
  }

  function deleteCookie(name) {
    setCookie(name, '', -1)
  }

  inject('getCookie', getCookie)

  inject('setCookie', setCookie)

  inject('deleteCookie', deleteCookie)

  const theme = getCookie('theme')

  app.$vuetify.theme.dark = theme === 'dark'
}

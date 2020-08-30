import moment from 'moment'

export default function ({ app }, inject) {
  function localeDate(d) {
    const date = moment(d)

    return date.locale(app.i18n.locale).format('MMM, YYYY')
  }

  inject('representers', {
    localeDate,
  })
}

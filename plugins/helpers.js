export default function ({ $vuetify }, inject) {
  function hexToRGB(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')'
    }
  }

  function imageGradient(opacity = 1) {
    return `0deg, ${hexToRGB(
      $vuetify.theme.currentTheme.primary,
      0.4 * opacity
    )} 0%, 10%, transparent`
  }

  inject('helpers', {
    imageGradient,
  })
}

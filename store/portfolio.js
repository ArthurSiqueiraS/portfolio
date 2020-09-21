const logoLight = require('@/assets/images/portfolio_logo_light.svg')
const logoDark = require('@/assets/images/portfolio_logo_dark.svg')

export const state = () => ({
  data: {},
  logo: {
    light: logoLight,
    dark: logoDark,
  },
})

export const mutations = {
  set(state, portfolio) {
    state.data = { ...portfolio }
  },
}

export const actions = {}

export const strict = false

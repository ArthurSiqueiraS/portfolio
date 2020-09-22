const logoLight = require('@/assets/images/portfolio_logo_light.svg')
const logoDark = require('@/assets/images/portfolio_logo_dark.svg')

export const state = () => ({
  data: {},
  logo: {
    light: logoLight,
    dark: logoDark,
  },
  animations: false,
})

export const mutations = {
  set(state, portfolio) {
    state.data = { ...portfolio }
  },
  setAnimations(state, value) {
    state.animations = value
  },
}

export const actions = {}

export const strict = false

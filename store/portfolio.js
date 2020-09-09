export const state = () => ({
  data: null,
})

export const mutations = {
  set(state, portfolio) {
    state.data = { ...portfolio }
  },
}

export const actions = {}

export const strict = false

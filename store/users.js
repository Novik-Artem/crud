import Repository from '../repository'

export const state = () => {
  return {
    users: [],
  }
}
export const mutations = {
  createNewUser(state, userName) {
    if (userName) {
      state.users.push({
        name: userName,
      })
    }
  },
  setUsers(state, value) {
    state.users = value
  },
  deleteUser(state, id) {
    state.users = state.users.filter((user) => user._id !== id)
  },
  changeUser(state, chosenUser) {
    state.users = state.users.map((user) =>
      user._id === chosenUser.id ? { ...user, role: chosenUser.role, name:chosenUser.name } : user
    )
  },
}

export const getters = {}

export const actions = {
	async createNewUser({ commit }, user) {
    try {
      const { value, error } = await Repository.APIUsers.addUser(user)
      window.console.log(value, error)
      if (!error) {
        commit('createNewUser', user)
      }
    } catch (e) {
      window.console.log(e)
    }
  },

  async getUsers({ commit }) {
    try {
      const { value } = await Repository.APIUsers.getUsers()
      commit('setUsers', value)
    } catch (e) {
      window.console.log(e)
    }
  },

  async deleteUser({ commit }, id) {
    try {
      const { value, error } = await Repository.APIUsers.deleteUser(id)
      window.console.log(value, error)
      if (!error) {
        commit('deleteUser', id)
      }
    } catch (e) {
      window.console.log(e)
    }
  },

	async changeUser({ commit }, chosenUser) {
		window.console.log(chosenUser)
    try {
			const { value, error } = await Repository.APIUsers.changeUser(chosenUser)
      window.console.log(value, error)
      if (!error) {
        commit('changeUser', chosenUser)
      }
    } catch (e) {
      window.console.log(e)
    }
  },
}

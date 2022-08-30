import Connector from '../connector'
class Users {
  getUsers = async () => {
    const result = {
      value: null,
      error: null,
    }
    try {
      const response = await Connector.connector.get('')
      result.value = response.data
    } catch (e) {
      result.error = e.message
    }
    return result
  }

  addUser = async (user) => {
    const result = {
      value: null,
      error: null,
    }
    try {
      const response = await Connector.connector.post('/', {
        name: user,
        role: '',
      })
      result.value = response.data
    } catch (e) {
      result.error = e.message
    }
    return result
  }

  deleteUser = async (id) => {
    const result = {
      value: null,
      error: null,
    }
    try {
      const response = await Connector.connector.delete(`/${id}`)
      result.value = response.data
    } catch (e) {
      result.error = e.message
    }
    return result
  }

  changeUser = async (chosenUser) => {
    const result = {
      value: null,
      error: null,
    }
    try {
      const response = await Connector.connector.put(`/${chosenUser.id}`, {
        role: chosenUser.role,
        name: chosenUser.name,
        id: chosenUser.id,
      })
      result.value = response.data
      window.console.log(result.value)
    } catch (e) {
      result.error = e.message
    }
    return result
  }
}
export default new Users()

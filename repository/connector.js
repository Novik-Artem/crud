import axios from 'axios'

class Connector {
  connector
  constructor() {
    this.connector = axios.create({
      baseURL:
        'https://crudcrud.com/api/9b27029971d643d9a8a5426b7ada79ef/users',
    })
  }
}

export default new Connector()

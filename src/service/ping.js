import api from '../api'

const testApi = async () => {
  return await api.get('ping')
}

export { testApi }

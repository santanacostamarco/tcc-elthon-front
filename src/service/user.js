import { api } from '../api'

export const userService = {
  async getUser(username) {
    const { data } = await api.get(`users/${username}`)
    return data
  }  
}
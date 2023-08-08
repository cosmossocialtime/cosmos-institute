import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.cosmossocial.com.br/api',
})

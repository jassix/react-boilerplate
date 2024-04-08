import axios from 'axios'

export const todoApiClient = axios.create({
  baseURL: '<get url from env ;)>',
})

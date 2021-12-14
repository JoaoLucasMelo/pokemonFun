import Axios from 'axios'
import { baseURL } from '../env'
export const pokeApi = Axios.create({
  baseURL: 'https://api.pokemontcg.io/v2/',
  timeout: 9000
})

import { logger } from "../utils/Logger"
import { pokeApi } from "./AxiosService"
import pokemon from 'pokemontcgsdk'
import { AppState } from "../AppState"


class PokemonService{
async getAll(){
  const res = await pokeApi.get('cards')
  logger.log('Get All', res.data)
}
async get(name){
  await pokemon.configure({ apiKey: 'e5b42c70-35be-4b12-9932-15220dfad3a4' })
  await pokemon.card.where({ q: 'name:'+ name }).then(cards => { AppState.pokemons = cards.data})
  logger.log('Pokemons',AppState.pokemons)
}
async getActive(id){
  await pokemon.configure({ apiKey: 'e5b42c70-35be-4b12-9932-15220dfad3a4' })
  await pokemon.card.find(id).then(card => { AppState.activePokemon = card})
  logger.log('Active Pokemon',AppState.activePokemon)
}
}
export const pokemonService = new PokemonService()
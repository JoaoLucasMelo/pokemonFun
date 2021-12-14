<template>
  <div class="container-fluid">
    <div class="row">
      <h1>Pokemon</h1>
      <div>
        <div>
          <form @submit.prevent="get" action="">
            <label for="">Pokemon name:</label>
            <input v-model="pokemon" type="text" name="" id="" />
            <button class="btn btn-warning" type="submit">Get</button>
          </form>
        </div>
        <div v-for="p in pokemons" :key="p.id">
          <p @click="getActive(p.id)">{{ p.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
import { pokemonService } from "../services/PokemonService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { AppState } from "../AppState"
import { useRouter } from "vue-router"
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const pokemon = ref('')
    return {
      router,
      pokemons: computed(() => AppState.pokemons),
      pokemon,
      async get() {
        try {
          await pokemonService.get(pokemon.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async getActive(id) {
        try {
          await pokemonService.getActive(id)
          await router.push({ name: 'Pokemon', params: { id: AppState.activePokemon.id } })
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

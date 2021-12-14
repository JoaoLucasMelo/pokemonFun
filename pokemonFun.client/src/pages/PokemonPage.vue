<template>
  <div class="col-12 d-flex justify-content-center bg-danger height100 font">
    <PokemonCard :activePokemon="activePokemon" />
  </div>
</template>


<script>
import { computed, onMounted, watchEffect } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { pokemonService } from "../services/PokemonService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"


export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await pokemonService.getActive(route.params.id)
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, 'error')
      }
    })

    return {
      activePokemon: computed(() => AppState.activePokemon)
    }
  }
}
</script>


<style lang="scss" scoped>
.height100 {
  height: 100vh;
}
.card {
  height: 75%;
  border-color: rgb(139, 139, 139) !important;
}
.font {
  font-family: "Chakra Petch", sans-serif;
}
.backcolor {
  background-color: rgb(27, 37, 121);
}
</style>
<template>
  <div class="component">
    <div
      class="
        card
        d-flex
        rounded
        align-items-center
        flex-row
        mt-5
        text-light
        backcolor
        border border-5
      "
    >
      <div class="ms-4 me-4">
        <div>
          <h3>Name: {{ activePokemon.name }}</h3>
        </div>
        <div>
          <p>
            <span class="text-primary">Artist:</span> {{ activePokemon.artist }}
          </p>
          <!-- <p>
            <span class="text-primary">Attacks:</span>
            {{ activePokemon.attacks[0].name }},
            {{ activePokemon.attacks[1]?.name }}
          </p> -->
          <p>
            <span class="text-primary">Level:</span> {{ activePokemon.level }}
          </p>
          <p>
            <span class="text-primary">Rarity:</span> {{ activePokemon.rarity }}
          </p>
          <!-- <p>
            <span class="text-primary">Pokedex #:</span>
            {{ activePokemon.nationalPokedexNumbers[0] }}
          </p> -->
          <p>
            <span class="text-primary">Edition:</span>:
            {{ activePokemon.number }}
          </p>
        </div>
        <div>
          <h5>Prices:</h5>
          <p>
            <span class="text-primary">Normal Market:</span> ${{
              activePokemon.tcgplayer.prices.normal.market
            }}
          </p>
          <p>
            <span class="text-primary">Normal Low:</span> ${{
              activePokemon.tcgplayer.prices.normal.low
            }}
          </p>
          <p>
            <span class="text-primary">Normal Mid:</span> ${{
              activePokemon.tcgplayer.prices.normal.mid
            }}
          </p>
          <p>
            <span class="text-primary">Updated:</span>
            {{ activePokemon.tcgplayer.updatedAt }}
          </p>
          <a :href="activePokemon.tcgplayer.url">TCG Link </a>
        </div>
      </div>
      <div class="ms-4 m-2 me-4">
        <img
          height="500"
          width="370"
          :src="activePokemon.images.large"
          alt=""
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    activePokemon: { type: Object }
  },
  setup() {
    return {}
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
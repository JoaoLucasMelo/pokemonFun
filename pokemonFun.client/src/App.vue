<template>
  <header></header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap");
</style>

<template>
  <navbar/>
  <router-view :key="$route.path"></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
<script>
import Navbar from "@/components/global/partials/header/Navbar";
export default {
  components: {Navbar}
}
</script>
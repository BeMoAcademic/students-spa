<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <img class="navbar-icon" alt="Vue logo" src="../../../../assets/bluetext.png">
      <button class="navbar-light navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-light navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="route in routes">
            <router-link class="nav-link" :to="route.path" v-text="route.name"/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      routes: [
        { path: "/student",
          name: "Home"
        },
        { path: "/forms",
          name: "Forms"
        },
        { path: "/student/programs",
          name: "Programs"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/sass/navbar.scss";
</style>
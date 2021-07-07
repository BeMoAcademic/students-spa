<template>
  <main>
    <div class="home-page--blue-bar"></div>
    <div class="home-page__main">
      <div class="home-page__left-grid">
        <div class="home-page__left-grid__navigation-bar">
          <h1>Welcome!</h1>
          <h4>to Your BeMo Members Area!</h4>
          <hr>
          <template v-for="label in labels">
            <router-link :to="label.path">
              <span class="home-page__left-grid__arrow-right"></span>
              <p class="home-page__left-grid__labels" v-text="label.name"></p>
            </router-link>
            <hr class="dotted">
          </template>
        </div>
        <div class="home-page__left-grid__contact">
          <p>If you have any questions regarding your program contact Student Support at
            info@bemoacademicconsulting.com</p>
        </div>

      </div>
      <div class="home-page__right-grid">
        <div class="home-page__right-grid__content">
          <lazy-video css-class="home-video"
                      src="//fast.wistia.net/embed/iframe/biswrlkb1a.jsonp?autoPlay=false"></lazy-video>
          <div class="home-page__right-grid__instructions">
          <img class="home-page__right-grid__instructions__image" src="../assets/professor.png" alt="professor">
            <div class="home-page__right-grid__instructions__text">
            <h5>Watch this video for instructions on how to use your BeMo Member’s Area</h5>
            <p>Tip: Use the tabs at the top or on the side to navigate to your various resources!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import LazyVideo from "@/components/global/partials/LazyVideo";

export default {
  name: 'Home',
  components: {LazyVideo},
  data() {
    return {
      labels: [
        {name: "Your Programs", path: "/student/program"},
        {name: "Your Resources", path: "/student/program"},
        {name: "Your Profile", path: "/student/program"},
        {name: "Help", path: "/student/program"},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/sass/homepage";
</style>

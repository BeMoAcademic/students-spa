<template>
  <main>
    <div class="home-page--blue-bar"></div>
    <div class="home-page__main container-fluid">
      <div class="home-page__left-grid">
        <div class="home-page__left-grid__navigation-bar">
          <h2>Welcome!</h2>
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
          <lazy-video css-class="home-video wistia_embed"
                      src="//fast.wistia.net/embed/iframe/5epry264bj?autoPlay=0"></lazy-video>
          <div class="home-page__right-grid__instructions">
            <img class="home-page__right-grid__instructions__image" src="../assets/professor.png" alt="professor">
            <div class="home-page__right-grid__instructions__text">
              <h5>Watch this video for instructions on how to use your BeMo Member’s Area</h5>
              <p>Tip: Use the tabs at the top or on the side to navigate to your various resources!</p>
            </div>
          </div>
          <hr>
          <div class="home-page__right-grid__sponsorship">
            <h1>Club Sponsorship!</h1>
            <img class="home-page__right-grid__sponsorship__image" src="../assets/home_image.png" alt="students">
            <div class="home-page__right-grid__sponsorship__text">
              <p>Are you part of a club on campus? We provide discounts and free resources to your club members with our
                club sponsorship program. </p>
              <p>If you refer your club to use you will receive a $250 referral bonus!</p>
              <p>Learn more below:</p>
            </div>
            <button class="new-button">Learn More &#8702;</button>
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

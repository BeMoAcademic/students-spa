<template>
  <div class='embed-responsive' data-nosnippet="true">
    <iframe :class="cssClass" :src="currentSrc"></iframe>
  </div>
</template>

<script>
export default {
  name: "LazyVideo",
  props: {
    src: {
      type: String,
      required: true
    },
    cssClass: {
      type: String,
      required: false
    },
    loadTime: {
      type: Number,
      required: false,
      default: 3000
    }
  },

  data() {
    return {
      currentSrc: ''
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(this.handleScroll);
    this.observer.observe(this.$el);
  },

  methods: {
    /**
     * Checks if an element is in viewport
     */
    handleScroll(entries) {
      if (entries[0].isIntersecting) {
        this.currentSrc = this.src;
        this.observer.disconnect();
      }
    }
  },

  beforeDestroy() {
    this.observer.disconnect();
  }
}
</script>
<style lang="scss" scoped>
.lazy-video {
  z-index: 1 !important;
}

.home-video {
  width: 90%;
  min-height: 30vh;
  margin-left: 5%;

  @include breakpoint-up(lg) {
    width: 80%;
    margin-left: 10%;
  }
}
</style>

<template>
    <div v-if="content" v-html="content.text"></div>
</template>
<script>
import UserDashboard from "/src/services/resources/UserDashboard";
export default {
  name: "Form",
  data() {
    return {
      content: null
    }
  },
  mounted() {
      this.getWelcome();
  },
  methods: {
    getWelcome() {
      UserDashboard.studentDashboard().then((response) => {
          this.content = response.data.data;
      })
    }
  }
};
</script>
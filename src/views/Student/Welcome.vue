<template>
    <div v-if="content">
      <div v-if="content.text" v-html="content.text.content"></div>
      <div v-else v-html="content.text.content"></div>
    </div>
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
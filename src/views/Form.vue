<template>
  <BaseInput v-model="forms.input" label="Title" type="text"></BaseInput>

  <BaseSelect :options="options" v-model="forms.select" />

  <BaseCheckbox v-model="forms.checkbox" label="Catering" />
  <BaseTextarea v-model="forms.textarea" label="Catering" />

<button class="btn btn-primary" @click="submit">Save</button>

  {{ forms }}
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      forms: {
        input: "",
        select: "Item 1",
        checkbox: false,
        textarea: ''
      },
      options: ["Item 1", "Item 2", "Item 3"],
    };
  },
};
</script>
<template>
  <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>
<script>
import FieldMixin from "./FieldMixin";
export default {
  mixins: [FieldMixin],
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>
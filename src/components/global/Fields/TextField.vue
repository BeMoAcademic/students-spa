<template>
    <label :for="id">{{ label }}</label>
    <input
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :value="modelValue">
    <p class="help is-danger" v-if="error" v-text="error"/>
</template>

<script>
import FieldMixin from "./FieldMixin";

export default {
    name: 'TextField',
    mixins: [FieldMixin]
}
</script>
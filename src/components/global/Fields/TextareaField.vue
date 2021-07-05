<template>
    <label for="">{{ label }}</label>
    <textarea
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :value="modelValue"> </textarea>
</template>

<script>
import FieldMixin from "./FieldMixin";
export default {
    name: 'TextareaField',
    mixins: [FieldMixin]
}
</script>
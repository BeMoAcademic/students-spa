<template>
    <label for="">{{ label }}</label>
    <input
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :value="modelValue">
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    }
}
</script>
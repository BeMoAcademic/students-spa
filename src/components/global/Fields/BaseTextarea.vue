<template>
    <label for="">{{ label }}</label>
    <textarea
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        :value="modelValue"> </textarea>
</template>

<script>
export default {
    name: 'BaseTextarea',
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
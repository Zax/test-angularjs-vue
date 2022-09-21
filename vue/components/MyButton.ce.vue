<template>
    <button @click="$emit('clicked')">titolo -> {{ title }}</button>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style>
button {
    color:red;
}
</style>
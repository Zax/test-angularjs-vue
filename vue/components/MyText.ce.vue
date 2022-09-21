<template>
  <div>{{message}}</div>
  <input v-model="value">
</template>

<script>
export default {
    props: {
        message: String
    },
    watch: {
        value(newValue) {
            this.$emit('updated', newValue)
            console.log('change')
        }
    },  
    data() {
        return {
            value: 0
        }
    },
    mounted() {
        console.log('mounted')
    }
}
</script>

<style>
div {
    color: red;
}
</style>
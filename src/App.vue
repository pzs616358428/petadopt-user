<template>
    <div id="app">
        <pet-header></pet-header>
    </div>
</template>

<script>
    import Header from './components/Header'

    export default {
        name: 'App',
        components: {
            'pet-header': Header
        }
    }
</script>

<style lang="stylus" scoped>
</style>

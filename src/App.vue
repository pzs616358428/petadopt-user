<template>
    <div id="app">
        <pet-header></pet-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
    #app
        width 100%
        background-color: #f2f2f2;
</style>

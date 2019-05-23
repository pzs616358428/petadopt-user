<template>
    <div id="app">
        <pet-header></pet-header>
        <router-view></router-view>
        <pet-footer></pet-footer>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
        name: 'App',
        components: {
            'pet-header': Header,
            'pet-footer': Footer
        }
    }
</script>

<style lang="stylus" scoped>
    #app
        width 100%
        background-color: #f2f2f2;
</style>

<template>
    <div class="container">
        <input type="text" v-model="search" placeholder="Search title.."/>

        <Games :games="filteredGames"/>
    </div>
</template>

<script>
import Games from '../components/Games'

export default {
    name: 'Home',
    components: {
        Games
    },
    data() {
        return {
            search: '',
            games: []
        }
    },
    methods: {
        async fetchGames() {
            const response = await fetch('/games.json')
            const result = await response.json()
            const data = Object.values(result)

            return data
        }
    },
    async created() {
        this.games = await this.fetchGames()
    },
    computed: {
        filteredGames() {
            return this.games.filter(game => {
                return game.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>

<style scoped>
    input{
        background-color: transparent;
        border: none;
        border-bottom: 2px solid white;
        margin-bottom: 15px;
        padding: 5px;
        outline: none;
        color: white;
        font-family: 'Cairo', sans-serif;
        font-weight: 600;
    }
</style>
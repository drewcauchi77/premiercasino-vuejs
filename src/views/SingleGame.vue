<template>
    <div class="game-content" :style="{ backgroundImage: 'url(' + game.game_background + ')' }">
        <div class="overlay"></div>

        <div class="container game-details">
            <h2>{{ game.title }}</h2>
            <div class="post-content" v-if="game.content" v-html="game.content"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleGame',
    data() {
        return {
            game: Object
        }
    },
    methods: {
        async fetchSingleGame() {
            const res = await fetch('/games.json')
            const data = await res.json()

            return data[this.$route.params.slug]
        }
    },
    async created() {
        this.game = await this.fetchSingleGame()
    }
}
</script>

<style scoped>
    .game-content{
        height: 80vh;
        background-size: cover;
        position: relative;
    }

    .overlay{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(16, 16, 16, 0.4);
    }

    .game-details{
        background-color: #101010;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: fit-content;
        width: fit-content;
        margin: auto;
        width: 70%;
        padding-top: 30px;
    }

    h2{
        text-align: center;
    }

    .post-content{
        padding: 3%;
    }
</style>
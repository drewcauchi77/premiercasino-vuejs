<template>
    <div class="games-list">
        <div v-for="game in games" :key="game.id" class="single-game">
            <Game :game="game"/>
        </div>
    </div>
</template>

<script>
import Game from './Game'

export default {
    name: 'Games',
    components: {
        Game
    },
    props: {
        games: Object
    }
}
</script>

<style scoped>
    .games-list{
        display: grid;
        grid-row-gap: 5px;
        margin: 0 auto;
        width: fit-content
    }

    .single-game{
        max-width: 450px;
    }

    @media only screen and (min-width: 768px){
        .games-list{
            grid-column-gap: 5px;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (min-width: 1024px){
        .games-list{
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media only screen and (min-width: 1420px){
        .games-list{
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>
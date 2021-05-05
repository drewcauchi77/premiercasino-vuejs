<template>
    <router-link :to="'/casino/' + game.slug">
        <img :src="game.game_thumbnail" :alt="game.title">

        <div class="play-now">
            <span>Play Now</span>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'Game',
    props: {
        game: Object
    }
}
</script>

<style scoped>
    img, a{
        width: 100%;
        height: 300px;
        display: block;
    }

    img{
        object-fit: cover;
    }

    a{
        position: relative;
    }

    .play-now{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 100%;
        background: rgba(16, 16, 16, 0.7);
        opacity: 0;
        visibility: hidden;
        transition: 0.5s all;
    }

    .play-now span{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 40px;
        width: 200px;
        display: block;
        text-align: center;
        border-radius: 50px;
        background: green;
        font-size: 20px;
    }

    a:hover .play-now{
        opacity: 1;
        visibility: visible;
    }
</style>
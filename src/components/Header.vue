<template>
    <header>
        <div class="header-section container">
            <h1>{{ title }}</h1>

            <nav>
                <router-link to="/">HOME</router-link>
                <router-link to="/about">ABOUT</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String
    }
}
</script>

<style scoped>
    header{
        min-height: 180px;
        position: sticky;
        top: 0;
        background: #101010;
        z-index: 999;
    }

    .header-section{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        height: fit-content;
    }

    h1{
        text-transform: uppercase;
        text-align: center;
    }

    nav{
        padding-top: 30px;
        display: grid;
        grid-template-columns: repeat(2, 100px);
        grid-column-gap: 20px;
        justify-content: center;
    }

    nav a{
        text-align: center;
    }

    

    .is-active{
        font-weight: 600;
        text-decoration: underline;
    }
</style>
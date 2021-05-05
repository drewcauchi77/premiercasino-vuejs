<template>
    <Header title="Premier Casino"/>
    <main>
      <router-view></router-view>
      <Footer />
    </main>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

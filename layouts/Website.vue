<template>
  <div>
      <Header />
      <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style>
* {
margin: 0;
padding: 1px;
}
</style>
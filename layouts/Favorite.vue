<template>
  <div>
      <HeaderFavorite />
      <Nuxt />
  </div>
</template>

<script>
import HeaderFavorite from '@/components/HeaderFavorite.vue'
export default {
    components: {
        HeaderFavorite
    }
}
</script>

<style>
* {
margin: 0;
padding: 1px;
}
</style>
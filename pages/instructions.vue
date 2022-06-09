<template>
     <div class="container-fluid p-5 d-flex align-content-center justify-content-center">
         <div class="intructions">
         <h1>Instructions</h1><br></br>
         <h3>1. Find your favorite music</h3>
         <h3>2. Add to your list</h3>
         <h3>3 .Download file</h3>
         <h3>4. Use <a href="https://www.tunemymusic.com/es/CSV-to-Spotify.php#step1" target="_blank" >Tunemymusic.com</a> to import on your platform</h3>
         <a href="https://www.tunemymusic.com/es/CSV-to-Spotify.php#step1"></a>
         <div class="logos"></div>
         <button class="my-button"><NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/">START</NuxtLink></button>
        </div>
     </div>
  
</template>

<script>
export default {
    name: 'Instructions',
    layout: 'Website'
}
</script>

<style scoped>
h3{ 
    text-align: center;
    color: #bfbfbf;
}
@keyframes displace { 
    0% {background-position: 0 center;}
    100% {background-position: -1231px center;}
}
.logos {
    background: url(@/assets/plataforms.PNG) repeat-x left center;
    height: 100%;
    -webkit-animation: displace 45s linear infinite;
    animation: displace 45s linear infinite;
    height: 55px;
}
.intructions{ 
    width: 80%;
    text-align: center;
}
</style>


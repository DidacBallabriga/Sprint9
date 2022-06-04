<template>
<div class="container-fluid">
  <div class="gif"><img src="@/assets/pampallugues.gif" alt=""></div>
  <h1>FEEL THE MUSIC</h1>
  <h2>Enjoy your premium access</h2>
  <div class="container-fluid my-buttons">
       <button class="my-button"><NuxtLink active-class="active" class="nuxt-link-1 p-3" to="/premium">PREMIUM ACCESS</NuxtLink></button>
    </div>
</div>
</template>

<script>
export default {
  name: 'enjoy',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body{
  font-family: 'Montserrat', sans-serif;
  background-color: black;
}
h1{
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: #5DC1B9;
}
h2{
  margin-top: 2rem;
  text-align: center;
}
p{
  margin: 2rem;
  text-align: center;
  color:#5DC1B9;
}
.my-buttons{
  text-align: center;
}
.my-button{
    margin: 4rem;
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: transparent;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}
.my-button::before{
     content: '';
    background: linear-gradient(45deg, #00ffd5, #002bff, #7a00ff, #00ffd5, #002bff, #7a00ff, #00ffd5);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: colors 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
.my-button:active{
 color: #000
}
.my-button:active::after{
      background: transparent;
}
.my-button:hover::before{
   opacity: 1;
}
.my-button:after{
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}
@keyframes colors {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
.my-button a {
  color:rgb(143, 140, 140);
  font-size: 1rem;
  font-weight: 500;
}
button a:hover{
  text-decoration: none;
  color: #5DC1B9;
}
@media (max-width: 767px){
  h1{
  margin: 1rem;
  }
  .my-button{
    margin: 1rem;
  }
}
.gif {
  text-align: center;

}
</style>
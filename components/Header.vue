<template>
  <div class="container-fluid">
    <b-navbar id="navbar" toggleable="md">
      <div class="myclass"></div>
        <b-navbar-brand class="d-md-none">
          <Logo />
        </b-navbar-brand>
      <b-navbar-toggle target="collapse-area"></b-navbar-toggle>
        <b-collapse id="collapse-area" is-nav>
          <b-navbar-nav class="d-none d-md-block mx-auto">
            <b-nav-text>
              <Logo />
            </b-nav-text>
          </b-navbar-nav>
          <div class="buttons" v-if="this.$store.loggedIn===false">
            <p>Registred as:<br>{{emailUser}}</p> 
            <NuxtLink to="/premium/favoritelist"><button class="my-button button-custom-log">FAVORITES</button></NuxtLink>
            <NuxtLink @click.native="logout" to="/"><button class="my-button button-custom-log">LOG OUT</button></NuxtLink>
          </div>
          <div v-else>
          <b-navbar-nav>
            <b-nav-item><NuxtLink to="/login"><button class="my-button button-custom">LOG IN</button></NuxtLink></b-nav-item>
            <b-nav-item><NuxtLink to="/registrer"><button class="my-button button-custom">SIGN UP</button></NuxtLink></b-nav-item>
          </b-navbar-nav>
          </div>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  name: 'Header',
  emailUser: "",
  components: {
    Logo
  },
  beforeMount(){
     if(localStorage.getItem("auth.user.auth")!==null){
        this.emailUser = JSON.parse(localStorage.getItem("auth.user.auth")).email
        this.$store.loggedIn = false
      }
  },
  methods: {
    logout: function(){
        window.localStorage.removeItem("auth.user.auth")
        this.$store.dispatch('logout')
        this.$router.push('/home')
        this.$store.loggedIn = true
    }
  }
}
</script>

<style scoped>
.buttons{
  text-align: center;
}
.my-button{
    margin: 0rem;
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
.button-custom{
  width: 90px!important;
  color:rgb(143, 140, 140);
}
.button-custom:hover{
  color: #5DC1B9;
}
.button-custom-log{
  color:rgb(143, 140, 140);
  width: 100px;
  height: 50px;
}
.button-custom-log:hover{
  color: #5DC1B9;
}
.container-fluid{
  background-color: black;
}
a, span{
  color: rgb(143, 140, 140);
}
@media (max-width: 767px){
  .double-bar{
    display: none;
  }
  .myclass{
    display: none;
  }
}
.navbar-light {
    color: rgb(143, 140, 140);
    border-color: rgb(143, 140, 140);
}
.navbar-toggler {
    background-color: #ffffff;
}
.div-nuxt-link{
  font-size: 1.2rem;
  font-weight: 500;
  border-top: 1px solid rgb(143, 140, 140);
  border-bottom: 1px solid rgb(143, 140, 140);
}
.nuxt-link-1{
  border-left: 1px solid rgb(143, 140, 140);
  border-right: 1px solid rgb(143, 140, 140);
}
.nuxt-link-1:hover{
  text-decoration: none;
  color: #ffffff;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
.nuxt-link-2:hover{
  text-decoration: none;
  color: #ffffff;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue, 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue,1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
.nuxt-link-2{
  border-right: 1px solid rgb(143, 140, 140);
}
.myclass{
  width: 155px;
}
.active{
   border-bottom: 2px solid blue;
   cursor: pointer;
 }
</style>
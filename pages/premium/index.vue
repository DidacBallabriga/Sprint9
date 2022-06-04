<template>
  <b-container fluid>
    <h1>FEEL THE MUSIC PREMIUM</h1>
    <div class="row p-sm-5">
        <div class="col-md-11 col-10 input-field" id="form" >
          <input type="text" v-model="text" v-on:keyup.enter="search" autocomplete="off" @focus="focusChanged" @focusout="handleFocusout"/>
          <label id="active">Search track, artist or album here...</label>
        </div>
        <div class="col-md-1 col-1 button">
          <button><img class="loupe" src="@/assets/loupe.png" @click="search"></button>
        </div>
        <ResultSearchPremium/>
    </div>
  </b-container>
</template>

<script scoped>
import ResultSearchPremium from '@/components/ResultSearchPremium.vue'
export default {
    name: 'premium',
    layout: 'Website',
    components: {
      ResultSearchPremium
    },
    data() {
      return {
        text: '',
      } 
    },
    beforeMount(){
      if(localStorage.getItem("auth.user.auth")==null){
        console.log("USER CAN NOT PASS");
        this.$router.push('/login')
      } else {
        this.$auth.loggedIn
        this.$router.push('/premium')
      }
    },
    methods: {
      focusChanged() {  
       let id = document.getElementById('active')
        id.className = 'active'
      },
      handleFocusout() {
        if(this.text ===""){
          let id = document.getElementById('active')
          id.className = 'none'
        }
      },
      search(){
        this.$store.commit('music/setText', this.text)
        this.$store.dispatch('music/loadMusic')
      }
    }
}
</script>


<style scoped>
.input-field label {
    color: gray;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    font-size: 1rem;
    cursor: text;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out,-webkit-transform .2s ease-out;
    transform-origin: 0 100%;
    text-align: initial;
    transform: translateY(30px) translateX(20px);
    pointer-events: none;
}
.input-field label.active {
  transform: translateY(-14px) scale(.8);
  transform-origin: 0 0;
}
input{
  width: 100%;
  background-color: transparent;
  border-color: transparent;
  border-bottom: 2px solid #5DC1B9;
  margin-top: 1.5rem;
  color: gray;
}
input:focus{
  outline: none;
}
button{
  background-color: black;
  border-color: rgba(111,111,111,0) transparent transparent;
}
.loupe{
  width: 2.2rem;
  margin-top: 1rem;
}
.loupe:hover {
    transform: rotate(-280deg);
    transition: transform 0.5s;
}
@media (max-width: 768px){
  h1{
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
}


</style>
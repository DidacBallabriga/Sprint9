<template>
  <div class="container-fluid">
      <h1>-CREATE YOUR ACCOUNT-</h1>
      <UserRegistrerForm/>
  </div>
</template>

<script>
import UserRegistrerForm from '@/components/UserRegistrerForm.vue'
export default {
  name: 'registrer',
  layout: 'Website',
  auth: false,
  components: {
    UserRegistrerForm
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body{
  font-family: 'Montserrat', sans-serif;
  background-color: black;
}
h1{
  margin: 2rem;
  text-align: center;
  color: #5DC1B9;
}
@media (max-width: 767px){
  h1{
  margin: 1rem;
  }
}
</style>
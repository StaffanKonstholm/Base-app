<script setup lang="ts">
</script>

<template>
    
    <div class="container-fluid fixed-top navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand">Base application</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <!-- The div below needs to be a routerlink in order to be an SPA, it could be a simple href element but it 
          would not be an SPA then. -->
          <!-- <a href="/" class="nav-link">Home</a> -->
          <RouterLink class='nav-link' to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <!-- <a href="/about" class="nav-link">About</a> -->
          <RouterLink class='nav-link' to="/about">About</RouterLink>
        </li>        
      </div>
  </div>
</template>

<style>
/* https://stackoverflow.com/questions/14735274/bootstrap-css-hides-a-portion-of-a-container-below-navbar-navbar-fixed-top
Without the body padding, the navbar hides some of the elements of the body
*/
body {
    padding-top: 10px;
  }
/* The explicit './Navbar.vue' specification is not necessary since we are in the right folder, but this is 
here to illustrate that you can have styles spread out between different folders. This style could be in App.vue 
but the it would have to say './components/Navbar.vue'

*/
</style>./Navbar.vue
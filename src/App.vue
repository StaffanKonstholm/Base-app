<script setup lang="ts">
  // https://runthatline.com/pinia-typescript-type-state-actions-getters/
  import { useCustomers } from './stores/customers'
  import { storeToRefs } from 'pinia'
  const customersStore = useCustomers()
  // https://medium.com/@albro/vue-js-typescript-basic-views-and-routing-setup-496931f753fb
  import Navbar from        './components/Navbar.vue';

</script>

<template>
      <!-- https://www.bezkoder.com/vue-typescript-crud/#Add_Navbar_and_Router_View_to_Vue_Typescript_App -->
      <!-- To import bootstrap href needs to be here--> 
      <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
  <div class="container">
    <!--https://stackoverflow.com/questions/33170205/bootstrap-navbar-doesnt-fill-the-whole-width-->
    <!-- Bootstrap uses a grid system, class="container" needs to be changed to class="container-fluid"-->
    <!-- https://stackoverflow.com/questions/41199894/bootstrap-4-how-to-make-top-fixed-navbar-stay-in-container-and-not-stretch-->
    <!-- Too lock at top container fixed-top needs to be in nav class --> 
    <!-- <nav class="container-fluid fixed-top navbar navbar-expand navbar-dark bg-dark"> -->
    
  <!-- router-view needs to be on app in order to display the views-->
  <Navbar/>
  <div class="row mt-3">

    <router-view/>
  </div>
</div>
  
</template>


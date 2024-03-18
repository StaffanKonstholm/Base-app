<script setup lang="ts">
import { ref } from 'vue';
import { useCustomers } from '../stores/customers'
import { storeToRefs } from 'pinia'
import User from './User.vue'

const customerStore = useCustomers()
const {customers, isRequestLoading, activeCustomersCount, getCustomerById} = storeToRefs(customerStore)
function doThing (){
    customerStore.pushCustomer(inputValue.value);
    inputValue = ref("")
}
let inputValue = ref("")
</script>

<template>
    
    <p v-if="isRequestLoading">Loading...</p>
    <p>number of customers {{ customers.length }}</p><br>
    <p>of which are active: {{activeCustomersCount}}</p><br>
    <!--you get ugly list-dots without the list-group class -->
    <li class= "list-group" v-for="customer in customers">
        <div v-if="customer.isActive">
            <User :customerProp="customer"/>

        </div>

    </li>
    <br>
    <div class="form-group">
          
          <input
            id="name"
            v-model="inputValue"
            type="text"
            class="form-control"
            placeholder="Name Lastname"
            required
          />
        </div>
    <button type="submit" class="btn btn-dark mt-4 float-end" @click="doThing"> OK</button>

</template>

<script setup lang="ts">
import { useCustomers, type Customer } from '../stores/customers'
import { type PropType } from 'vue';

const customerStore = useCustomers();
const props = defineProps({
  customerProp: {
    type: Object as PropType<Customer>,
    required: true
    },
  optionalProp: {
    type: Object as PropType<Customer>,
    required: false
  }
})
function doThing (){
  customerStore.removeCustomer(props.customerProp);
  
}
</script>

<template>
<div class="list-group-item">
  {{props.customerProp.fullName}}
  <button type="button" class="btn btn-sm btn-outline-primary remove" @click="doThing">X</button>

  </div>
  
</template>

<style>
.NameBlock {
  border-style: solid;
  margin-bottom: 2px;
  width: 25%;
  flex: auto;
  flex-direction: row;
}
.remove {
  float: right;
  transform: translateY(-10%);
}
</style>
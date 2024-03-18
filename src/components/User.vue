<script setup lang="ts">
// this is how you import a type
// import {type Customer} from "../stores/customers"


defineProps({
  customerProp: {
    type: Object,
    required: true
    }
  })
</script>

<template>
<div class="list-group-item">
  {{customerProp.fullName}}
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
</style>
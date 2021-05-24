<template>
  <div v-if="divider" class="dropdown-divider"/>
  <div v-else-if="header" class="dropdown-header"><slot/></div>
  <a v-else @click="clicked" :class="classObj" href="#"><slot/></a> 
</template>

<script>
import js from './TDropdownMenuItem.js';
export default js;
</script>

<style>

</style>
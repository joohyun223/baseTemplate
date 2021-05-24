<template>
  <TFormGroup>
    <label v-if="label" :for="safeId">{{label}}</label>
    <textarea :class="classes" :id="safeId" :rows="rows"></textarea>
  </TFormGroup>
</template>

<script>
import js from './TTextarea.js';
export default js;
</script>

<style>

</style>
<template>
  <TFormGroup wrapperClasses="form-check">
    <input 
        :class="classes"
        :type="type"
        :id="safeId"
        :value="value"
        :disabled="disabled"
        v-on="$listeners"
    />  
    <label class="form-check-label" v-if="label" :for="safeId">{{label}}</label>
  </TFormGroup>
</template>

<script>
import js from './TCheckBox.js';
export default js;
</script>

<style>

</style>
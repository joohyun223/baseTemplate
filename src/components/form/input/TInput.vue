<template>
  <TFormGroup :wrapperClasses="computedClasses">
      <label v-if="label" :for="safeId">{{label}}</label>
      <input 
        :class="classes"
        :type="type"
        :id="safeId"
        :placeholder="placeholder"
        :value="value"
        :readonly="readonly"
        :disabled="disabled"
        :aria-describedby="ariaDescby"
      />
      <slot></slot>
  </TFormGroup>

</template>

<script>
import js from './TInput.js';
export default js;
</script>

<style scoped>


</style>
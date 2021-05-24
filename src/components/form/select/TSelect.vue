<template>
  <TFormGroup>
    <label v-if="label" :for="safeId">{{label}}</label>
     <select :class="classes" :id="safeId" :multiple="multiple" v-on="$listeners">
       <option v-if="placeholder" value="" selected hidden>{{placeholder}}</option>
       <template v-for="(option, key) in optionList">
        <option 
        v-if="typeof option==='object'"
        :key="key"
        :value="option.value"
        :disabled="option.disabled"
        :selected="option.selected"
        >
        {{option.label || option.value}}
        </option>
        <option
        v-else
        :key="key"
        :value="option"
        :selected="option === value"
        >
        {{option}}
        </option>
       </template>
    </select>
  </TFormGroup>
</template>
  
<script>
import js from './TSelect.js';
export default js;
</script>

<style>

</style>
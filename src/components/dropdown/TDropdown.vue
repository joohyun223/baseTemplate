<template>
<div ref="dropdown" class="dropdown" :class="{'btn-group':splitBtn}" style="position:relative">
  
  <button v-show="splitBtn" :is="btnType" :class="classes" @click="btnClick" v-bind="btnAttr" class="btn">{{splitBtn}}</button>
  <button :is="btnType" :class="classes" ref="toggle" @click="btnToggle" :id="safeId" v-bind="btnAttr" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="computedExpaned">

    <template v-if="splitBtn">
      <span class="sr-only">Toggle Dropdown</span>
    </template>
    <template v-else>
      {{btnText}}
    </template>
  </button>

  <div ref="menu" class="dropdown-menu" :class="menuVisible" :aria-labelledby="safeId">
    <slot/>
  </div>
</div>
</template>

<script>
import js from './Tdropdown.js';
export default js;
</script>

<style scoped>

</style>
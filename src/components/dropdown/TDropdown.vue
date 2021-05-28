<template>
<div ref="dropdown" class="dropdown" :class="{'btn-group':splitBtn}" style="position:relative; display:inline-block">
  
  <button v-show="splitBtn" :is="btnType" :class="classes" @click="btnClick" v-bind="btnAttr" class="btn">{{splitBtn}}</button>
  <button :is="btnType" :class="classes" ref="toggle" @click="btnToggle" :id="safeId" v-bind="btnAttr" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="visible">
    <template v-if="splitBtn">
      <span class="sr-only">Toggle Dropdown</span>
    </template>
    <template v-else>
      {{btnText}}
    </template>
  </button>
  <div ref="menu" class="dropdown-menu" :class="menuVisible" :aria-labelledby="safeId" :style="{width:menuWidth}">
    <div ref="itemWrap" class="item-wrap" @mousewheel="dropWheel">
      <slot/>
    </div>
    <div ref="scrollbarWrap" v-show="showScrollbar" class="scrollbar-wrap" >
      <div ref="scrollbar" class="scrollbar" @mousedown="dropScrollMousedown" :style="scrollbarStyle"></div>
    </div>
  </div>
</div>
</template>

<script>
import js from './Tdropdown.js';
export default js;
</script>

<style scoped>
.item-wrap{
  max-height: 150px;
  overflow-y: hidden;
}
.scrollbar-wrap{
  position: absolute;
  top: 0px;
  right: 6px;
  padding: 10px 0px;
}
.scrollbar{
  height: 50%;
  top:0px;
  width: 4px;
  background: #ccc;
  position: relative;
}
.show{
  padding: 0rem;
}
</style>
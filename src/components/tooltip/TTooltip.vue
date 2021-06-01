<template>
  <div>
    <TTooltipBtn 
      @btnClicked="clickEvt"
      @enteredMouse="mouseEnterEvt"
      @leavedMouse="mouseLeaveEvt"
      @focus="focusEvt"
      @blur="blurEvt"
      :btnText="btnText"
      :propsPlacementData="propsPlacementData"
      :btnTitle="btnTitle"
    ></TTooltipBtn>
    <TTooltipWrap 
      :tooltipText="tooltipText"
    ></TTooltipWrap>
  </div>
</template>

<script>
import js from './TTooltip.js';
export default js;
</script>

<style>

</style>
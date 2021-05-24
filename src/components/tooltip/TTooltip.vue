<template>
  <div>
    <TTooltipBtn 
      @btnClicked="clickEvt"
      @enteredMouse="mouseEnterEvt"
      @leavedMouse="mouseLeaveEvt"
      @focus="focusEvt"
      @blur="blurEvt"
      :btnText="btnText"
      :btnDataPlacement="btnDataPlacement"
      :btnTitle="btnTitle"
    ></TTooltipBtn>
    <TTooltipWrap 
      :tooltipText="tooltipText"
      :arrowPlacementClass="arrowPlacementClass"
    ></TTooltipWrap>
  </div>
</template>

<script>
import js from './TTooltip.js';
export default js;
</script>

<style>

</style>
<template>
  <!-- <div role="tooltip" id="tooltipPopper"> -->
  <div :class="arrowPlacementClass" class="tooltip" role="tooltip" id="tooltipPopper">
    <div id="arrow" data-popper-arrow></div>
    <div class="tooltip-text" v-html="tooltipText"></div>
  </div>
</template>

<script>
export default {
  name: 'TTooltipWrap',
  data: () => {
    return {
      
    };
  },
  props: {
    tooltipText        : {default: ''},
    arrowPlacementClass: {default: ''}
  },
  mounted: () => {
    
  },
  methods: {
  
  }
};
</script>

<style scoped>

#tooltipPopper {
  display: inline-block;
  background: black;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 4px;
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: '';
  /* background-color: red; */
  transform: rotate(45deg);
}

.tooltip-text{
  padding: 2px;
}

#tooltipPopper[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

#tooltipPopper[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

#tooltipPopper[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

#tooltipPopper[data-popper-placement^='right'] > #arrow {
  left: -4px;
}

</style>
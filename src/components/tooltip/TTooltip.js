import { createPopper } from '@popperjs/core';
import TTooltipBtn from './TTooltipBtn.vue';
import TTooltipWrap from './TTooltipWrap.vue';


export default {
  name      : 'TTooltip',
  components: {
    TTooltipBtn,
    TTooltipWrap
  },
  data: () => {
    return {
      testdata          : true,
      placementData     : '',
      tooltipEl         : null,
      placementTopValue : null,
      placementLeftValue: null,
      paddingValue      : null
    };
  },
  props: {
    btnText                : {default: ''},
    btnDataPlacement       : {default: ''},
    btnTitle               : {default: ''},
    tooltipText            : {default: ''},
    propsPlacementData     : {default: ''},
    arrowPlacementClass    : {default: ''},
    propsPlacementTopValue : {default: ''},
    propsPlacementLeftValue: {default: ''},
    propsPaddingValue      : {default: ''}
  },
  created: function() {

    this.placementData = this.propsPlacementData;
    this.placementTopValue = this.propsPlacementTopValue;
    this.placementLeftValue = this.propsPlacementLeftValue;
    this.paddingValue = this.propsPaddingValue;
  },
  mounted: function() {

    this.setPopper();
  },
  methods: {
    clickEvt: function(evt) {
      this.showTooltip(evt);
      this.$emit('clickEvt', evt);
    },
    mouseEnterEvt: function(evt) {
      this.showTooltip(evt);
      this.$emit('mouseEnterEvt', evt);
    },
    mouseLeaveEvt: function(evt) {
      this.hideTooltip(evt);
      this.$emit('mouseLeaveEvt', evt);

    },
    focusEvt: function(evt) {
      this.showTooltip(evt);
      this.$emit('focusEvt', evt);

    },
    blurEvt: function(evt) {
      this.hideTooltip(evt);
      this.$emit('blurEvt', evt);

    },
    showTooltip: function(evt) {    

      this.tooltipEl = evt.target.nextSibling;
      
      this.tooltipEl.classList.add('show');
      this.tooltipEl.classList.add('fade');
      this.tooltipEl.style.willChange = 'transform';
    },

    hideTooltip: function(evt) {

      this.tooltipEl = evt.target.nextSibling;

      if (!evt.target.classList.contains('js-clicked')) {
        this.tooltipEl.classList.remove('show');
        this.tooltipEl.classList.remove('fade');
      }
    },

    setPopper: function() {
      let buttonEl = this.$el.querySelector('button');
      let tooltipEl = this.$el.querySelector('#tooltipPopper');
      // const vm = this;
      
      this.$popper=createPopper(buttonEl, tooltipEl, {
        placement: this.placementData,
        modifiers: [
          {
            name   : 'arrow',
            options: {
              // element: arrow,
              // padding: ({ popper }) => popper.width / 2,
              // padding: vm.paddingValue, // 5px from the edges of the popper
              // padding: 50 // 5px from the edges of the popper
              padding: ({ popper, reference, placement }) => {
                console.log('padding compute', popper, 'is popper' ,reference,'is reference' , placement, '---is placement');
                reference.width / popper.width;
              }
            },
          },
          {
            name   : 'offset',
            options: {
              offset: [0, 10]
            },

          },
        ],
      });

      // console.log(this.paddingValue);

    }
  }
};
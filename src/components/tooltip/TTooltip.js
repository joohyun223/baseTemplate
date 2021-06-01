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
      testdata     : true,
      placementData: '',
      tooltipEl    : null,
      placementY   : null,
      placementX   : null
    };
  },
  props: {
    btnText           : {default: ''},
    btnTitle          : {default: ''},
    tooltipText       : {default: ''},
    propsPlacementData: {default: ''},
    propsPlacementY   : {default: ''},
    propsPlacementX   : {default: ''}
  },
  created: function() {

    this.placementData = this.propsPlacementData;
    this.placementY = this.propsPlacementY;
    this.placementX = this.propsPlacementX;
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
              padding: ({ popper, reference, placement }) => {
                if (placement === 'bottom') {
                  return popper.width / 5;
                } else {
                  return popper.width / 5;
                }
              }
            },
          },
          {
            name   : 'offset',
            options: {
              offset: [parseInt(this.placementX), parseInt(this.placementY)]
            },
          },
        ],
      });
    }
  }
};
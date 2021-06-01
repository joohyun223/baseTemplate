<template>
		<button 
      @click="btnClicked"
      @mouseenter="enteredMouse" 
      @mouseleave="leavedMouse"
      @focus="focus"
      @blur="blur"
      :data-placement="propsPlacementData" 
      :title="btnTitle"
      type="button" 
      class="btn btn-secondary" 
      data-toggle="tooltip" 
      v-html="btnText"
    >
		</button>
</template>

<script>
export default {
  name: 'TTooltipBtn',
  data: () => {
    return {
      
    };
  },
  props: {
    btnText           : {default: ''},
    propsPlacementData: {default: ''},
    btnTitle          : {default: ''}
  },
  mounted: function() {
    // const testEl = document.getElementById('tooltip');
    // // console.log(testEl.disabled);
    // // console.log(this.disabledData);
    // testEl.disabled = this.disabledData;
    // console.log(testEl.disabled);       

    
  },
  methods: {
    btnClicked: function(evt) {
      evt.target.classList.add('js-clicked'); // hidetooltip methods에서 구분하기 위함
      this.$emit('enteredMouse', evt);
      // console.log('---btnClicked');
    },
    enteredMouse: function(evt) {
      this.$emit('enteredMouse', evt);
      // console.log('---enteredMouse');
      this.setDataTitleAttr(evt);


    },
    leavedMouse: function(evt) {
      this.$emit('leavedMouse', evt);
      // console.log('---leavedMouse');
      this.setTitleAttr(evt);

    },
    focus: function(evt) {
      
      this.$emit('focus', evt);
      // console.log('----focus-----test');
    },
    blur: function(evt) {
      evt.target.classList.remove('js-clicked');
      this.$emit('blur', evt);
      // console.log('---blur test');
    },
    setDataTitleAttr: function(evt) {
      evt.target.setAttribute('data-title', evt.target.title);
      evt.target.title = '';
    },
    setTitleAttr: function(evt) {
      evt.target.setAttribute('title', evt.target.getAttribute('data-title'));
    }

  }
};
</script>

<style scoped>
  .btn {
    margin-bottom: 20px;
  }
</style>
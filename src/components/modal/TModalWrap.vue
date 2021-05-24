<template>
  <div :aria-labelledby="this.ariaLabelledby" class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
      <div :class="modaldialogClasses" class="modal-dialog">
          <div class="modal-content">
            <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'TModalWrap',
  data: () => {
    return { 
    };
  },
  props: {
    ariaLabelledby    : {default: ''},
    modaldialogClasses: {default: ''}
  }
};
</script>


<style>

</style>
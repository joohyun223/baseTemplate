<template>
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ headerText }}</h5>
        <button @click="callHideModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true" aria-label="Close">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
  name : 'TModalHeader',
  props: {
    headerText: {default: ''}
  },
  methods: {
    callHideModal: function(evt) {
      // console.log('callHideModal');
      this.$emit('headercloseclicked',evt);
    }
  }
};
</script>


<style>

</style>
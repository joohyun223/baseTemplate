<template>
    <div class="modal-footer">
        <button @click="callHideModal" type="button" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">{{ footerCloseText }}</button>
        <button @click="confirmBtnClicked" type="button" class="btn btn-primary">{{ footerSaveText }}</button>
    </div>
</template>

<script>
export default {
  name: 'TModalFooter',
  data: () => {
    return {
    
    };
  },
  props: {
    footerCloseText: {default: ''},
    footerSaveText : {default: ''}
  },
  methods: {
    callHideModal: function(evt) {
      this.$emit('footerCloseClicked',evt);
    },
    confirmBtnClicked: function() {
      this.$emit('confirmBtnClicked');
    }
  }
};
</script>


<style>

</style>
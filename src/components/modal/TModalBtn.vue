<template>
    <div>
        <button @click.prevent="callShowModal" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          {{ btntext }}
        </button>
    </div>
</template>

<script>
export default {
  name : 'TModalBtn',
  props: {
    btntext: {default: ''}
  },
  methods: {
    callShowModal: function(evt) {
      this.$emit('modalbuttonclicked', evt);
    }
  }
};
</script>


<style>

</style>
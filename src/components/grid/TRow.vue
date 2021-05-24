<script>

export default {
  name : 'TRow',
  props: {
    rootTag: {
      type   : String,
      default: 'div'
    },
    form: Boolean
  },
  render(h) {
    return h(
      this.rootTag,
      {
        staticClass: this.form? 'form-row' : 'row'
      },
      this.$slots.default
    );
  },
  mounted: function() {
  }
};
</script>

<style>

</style>
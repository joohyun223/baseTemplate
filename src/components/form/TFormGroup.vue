

<script>
export default {
  name : 'TFormGroup',
  props: {
    wrapperClasses: {
      default: ''
    },
    inline: {
      type   : Boolean,
      default: false
    }
  },
  render(h) {
    return h(
      'div',
      {
        staticClass: 'form-group',
        class      : [
          this.wrapperClasses, 
          {
            'form-inline': this.inline
          }
        ]
      },
      this.$slots.default
    );
  },
};
</script>

<style>

</style>
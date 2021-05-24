<script>
export default {
  name : 'TForm',
  props: {
    inline: Boolean
  },
  render(h) {
    return h(
      'form',
      {
        class: {
          'form-inline': this.inline
        }
      },
      this.$slots.default
    );
  }
};
</script>

<style>

</style>
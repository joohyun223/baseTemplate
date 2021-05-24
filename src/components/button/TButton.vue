<script>
export default {
  name : 'TButton',
  props: {
  },
  methods: {
  },
  render(h) {
    let self = this;
    return h(
      'button', 
      {
        on: self.$listeners
      },
      this.$slots.default
    );
  },
  mounted() {
  }
};
</script>

<style>
</style>
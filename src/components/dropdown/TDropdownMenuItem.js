export default {
  components: {
  },
  data() {
    return {
      classObj: {
        'disabled'     : this.disabled,
        'active'       : this.active, 
        'dropdown-item': !this.divider
      }
    };
  },
  props: {
    disabled: {
      type   : Boolean,
      default: false
    },
    active: {
      type   : Boolean,
      default: false
    },
    divider: {
      type   : Boolean,
      default: false
    },
    header: {
      type   : Boolean,
      default: false
    }
  },
  mounted: function() {
  },
  methods: {
    clicked: function(event) {
      this.$parent.$emit('menuClicked', event);
    }
  }
};